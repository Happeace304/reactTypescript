import React, { ChangeEvent, FC, FormEvent, useEffect } from 'react';
import Button from '../../components/Button/Button';
import Fieldset from '../../components/Fieldset/Fieldset';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Legend from '../../components/Legend/Legend';
import Textarea from '../../components/Textarea/Textarea';
import FormDataModel from '../../FormControls/FormData.model';
import './UserForm.scss';

interface FormControlsProps {
  data: FormDataModel;
  resetForm: () => void;
  loadData: () => void;
  updateForm: (data: Partial<FormDataModel>) => void;
  saveToList: (data: FormDataModel) => void;
}

const UserForm: FC<FormControlsProps> = ({
  data,
  resetForm,
  loadData,
  updateForm,
  saveToList,
}) => {
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    saveToList(data);
  };
  const onValueChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value =
      target.type === 'checkbox'
        ? (target as EventTarget & HTMLInputElement).checked
        : target.value;

    updateForm({
      [target.name]: value,
    });
  };

  return (
    <div className="UserForm">
      <Form onSubmit={submitForm}>
        <div className="InputForm">
          <Input
            type="text"
            value={data.name}
            name="name"
            onChange={onValueChange}
          />
          <Input
            type="password"
            value={data.password}
            name="password"
            onChange={onValueChange}
          />
          <Textarea
            value={data.biography}
            name="biography"
            onChange={onValueChange}
          />
          <div>
            <Input
              type="checkbox"
              checked={data.isMarried}
              name="isMarried"
              labelText="isMarried"
              onChange={onValueChange}
            />
          </div>
          <Fieldset>
            <Legend> Gender </Legend>
            <Input
              type="radio"
              checked={data.gender === 'male'}
              value="male"
              name="gender"
              labelText="Male"
              onChange={onValueChange}
            />

            <Input
              type="radio"
              checked={data.gender === 'female'}
              value="female"
              name="gender"
              labelText="Female"
              onChange={onValueChange}
            />
          </Fieldset>
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={resetForm}>
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
