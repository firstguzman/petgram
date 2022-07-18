import { useMutation } from '@apollo/client'
import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'
import { REGISTER } from '../graphql/queries'
import { Link as LinkRouter } from 'react-router-dom'

export const SignUp = () => {
  const { activateAuth } = useContext(Context)
  const [registerUserMutation, { loading, error }] = useMutation(REGISTER)

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerUserMutation({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }

  const errorMsgRegister =
    error && 'El usuario ya existe o hay algún problema.'

  return (
    <>
      <UserForm
        disabled={loading}
        error={errorMsgRegister}
        title='Registrarse'
        onSubmit={onSubmit}
      />
      <LinkRouter to='/login'>
        <a>Ya tengo una cuenta</a>
      </LinkRouter>
    </>
  )
}
