import React, { FC } from 'react';
import './Fieldset.scss';

interface FieldsetProps {}

const Fieldset: FC<FieldsetProps> = ({ children, ...props }) => (
  <fieldset className="Fieldset" {...props}>
    {children}
  </fieldset>
);

export default Fieldset;
