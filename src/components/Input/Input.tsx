import React, { ChangeEventHandler, FC } from 'react';
import './Input.scss';

interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  value?: number | string;
  checked?: boolean;
  type?: 'text' | 'password' | 'radio' | 'checkbox';
  id?: string;
}

const Input: FC<InputProps> = ({ type, ...props }) => {
  return <input type={type} className="Input" {...props} />;
};

export default Input;
