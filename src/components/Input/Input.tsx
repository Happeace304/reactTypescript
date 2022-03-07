import React, { ChangeEventHandler, FC } from 'react';
import './Input.scss';
import Label from '../Label/Label';
import uniqid from 'uniqid';

interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  labelText?: string;
  value?: number | string;
  checked?: boolean;
  type?: 'text' | 'password' | 'radio' | 'checkbox';
  id?: string;
}

const Input: FC<InputProps> = ({ type, id, labelText, ...props }) => {
  const inputId = id || uniqid();

  return (
    <>
      {labelText && <Label htmlFor={inputId}>{labelText}</Label>}
      <input type={type} id={inputId} className="Input" {...props} />
    </>
  );
};
export default Input;
