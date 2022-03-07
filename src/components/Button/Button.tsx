import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  type?: 'submit' | 'button';
}

const Button: FC<ButtonProps> = ({ type, children, ...props }) => (
  <button type={type} className="Button">
    {children}
  </button>
);

export default Button;
