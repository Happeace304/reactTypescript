import React, { ChangeEventHandler, FC } from 'react';
import './Textarea.scss';

interface TextAreaProps {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  name: string;
  value?: number | string;
  id?: string;
}

const Textarea: FC<TextAreaProps> = ({ ...props }) => (
  <textarea className="Textarea" {...props} />
);

export default Textarea;
