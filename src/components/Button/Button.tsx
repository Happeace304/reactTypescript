import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  type?: 'submit' | 'button';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ type, children, ...props }) => (
  <button type={type} className="Button" {...props}>
    {children}
  </button>
);

export default Button;
