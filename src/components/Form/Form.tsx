import React, { FC, FormEvent } from 'react'
import './Form.scss'

interface FormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const Form: FC<FormProps> = ({ children, ...props }) => (
  <form className="Form" {...props}>
    {children}
  </form>
)

export default Form
