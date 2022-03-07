import React, { FC } from 'react';
import './Label.scss';

interface LabelProps {
  htmlFor: string;
}

const Label: FC<LabelProps> = ({ children, ...props }) => (
  <label className="Label" {...props}>
    {children}
  </label>
);

export default Label;
