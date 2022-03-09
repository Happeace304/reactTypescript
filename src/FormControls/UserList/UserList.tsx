import React, { FC, Fragment } from "react";
import Button from "../../components/Button/Button";
import FormDataModel from "../FormData.model";
import "./UserList.scss";

interface UserListProps {
  data: FormDataModel[];
  onDetailClick: (id: string) => void;
}

const UserList: FC<UserListProps> = ({ data, onDetailClick }) => (
  <div className="UserList">
    {data.map((el) => (
      <Fragment key={el.id}>
        <div className="UserItem">
          <div>
            <span>Name: {el.name}</span>
          </div>
          <div>
            <span>Gender: {el.gender}</span>
          </div>
          <div>
            <span>Biography: {el.biography}</span>
          </div>
          <div>
            <span>Is Married: {el.isMarried}</span>
          </div>
        </div>
        <Button onClick={() => onDetailClick(el.id)}>Detail</Button>
      </Fragment>
    ))}
  </div>
);

export default UserList;
