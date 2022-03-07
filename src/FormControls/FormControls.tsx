import React, { ChangeEvent, FC, FormEvent } from 'react';

import Button from '../components/Button/Button';
import Fieldset from '../components/Fieldset/Fieldset';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import Legend from '../components/Legend/Legend';
import Textarea from '../components/Textarea/Textarea';
import { loadInitial, updateData } from '../FormControls/formSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { RootState } from '../store';
import './FormControls.scss';

import FormDataModel from './FormData.model';

interface FormControlsProps {}

const FormControls: FC<FormControlsProps> = () => {
  const data: FormDataModel = useAppSelector(
    (state: RootState) => state.form.value,
  );
  const dispatch = useAppDispatch();
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(data);
  };
  const resetForm = () => dispatch(loadInitial());
  const onValueChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value =
      target.type === 'checkbox'
        ? (target as EventTarget & HTMLInputElement).checked
        : target.value;

    dispatch(
      updateData({
        [target.name]: value,
      }),
    );
  };

  return (
    <div className="FormControls">
      <section>
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
      </section>
      <section>right</section>
    </div>
  );
};

export default FormControls;
