import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import Textarea from '../components/Textarea/Textarea';
import Legend from '../components/Legend/Legend';
import Fieldset from '../components/Fieldset/Fieldset';
import Button from '../components/Button/Button';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import './FormControls.scss';

interface FormControlsProps {}

const initialData = {
  name: '',
  password: '',
  isMarried: false,
  gender: '',
  biography: '',
};

const FormControls: FC<FormControlsProps> = () => {
  const [data, setData] = useState(initialData);
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(data);
  };
  const onValueChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = target.type === 'checkbox' ? (target as EventTarget & HTMLInputElement).checked : target.value;

    setData({
      ...data,
      [target.name]: value,
    });
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
                onChange={onValueChange}
              />
              isMarried
            </div>
            <Fieldset>
              <Legend> Gender </Legend>
              <Input
                type="radio"
                checked={data.gender === 'male'}
                value="male"
                name="gender"
                onChange={onValueChange}
              />
              Male
              <Input
                type="radio"
                checked={data.gender === 'female'}
                value="female"
                name="gender"
                onChange={onValueChange}
              />
              Female
            </Fieldset>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </section>
      <section>right</section>
    </div>
  );
};

export default FormControls;
