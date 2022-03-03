import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import Button from '../components/Button/Button'
import Form from '../components/Form/Form'

import Input from '../components/Input/Input'
import './FormControls.scss'

interface FormControlsProps {}

const initialData = {
  name: '',
  password: '',
  isMarried: false,
}

const FormControls: FC<FormControlsProps> = () => {
  const [data, setData] = useState(initialData)
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(data)
  }
  const onValueChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const value = target.type === 'checkbox' ? target.checked : target.value

    setData({
      ...data,
      [target.name]: value,
    })
  }

  return (
    <div className="FormControls">
      <section>
        <Form onSubmit={submitForm}>
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
          <Input
            type="checkbox"
            checked={data.isMarried}
            name="isMarried"
            onChange={onValueChange}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </section>
      <section>right</section>
    </div>
  )
}

export default FormControls
