import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton'
import { Error, Form, Input, Title } from './styles'
import PropTypes from 'prop-types'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <SubmitButton>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>

  )
}

UserForm.propTypes = {
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func,
  title: PropTypes.string.isRequired
}
