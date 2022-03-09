import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchData, fetchDataById, postData } from "../FormControls/FormThunk";
import { RootState } from "../store";
import "./FormControls.scss";
import FormDataModel from "./FormData.model";
import { loadInitial, updateData } from "./FormSlice";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";

interface FormControlsProps extends PropsFromRedux {}

const FormControls: FC<FormControlsProps> = ({
  data,
  list,
  onDetailClick,
  resetForm,
  loadData,
  updateForm,
  saveToList,
}) => {
  return (
    <div className="FormControls">
      <section>
        <UserForm
          data={data}
          resetForm={resetForm}
          loadData={loadData}
          updateForm={updateForm}
          saveToList={saveToList}
        />
      </section>
      <section>
        <UserList data={list} onDetailClick={onDetailClick} />
      </section>
    </div>
  );
};
const mapStateToProps = ({ form }: RootState) => ({
  data: form.data,
  list: form.list,
});
const mapDispatchToProps = {
  resetForm: () => loadInitial(),
  loadData: () => fetchData(),
  updateForm: (data: Partial<FormDataModel>) => updateData(data),
  saveToList: (data: FormDataModel) => postData(data),
  onDetailClick: (id: string) => fetchDataById(id),
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FormControls);
