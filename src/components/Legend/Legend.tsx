import React, { FC } from 'react';
import './Legend.scss';

interface LegendProps {}

const Legend: FC<LegendProps> = ({ children, ...props }) => (
  <legend className="Legend" {...props}>
    {children}
  </legend>
);

export default Legend;
