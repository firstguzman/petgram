import { useMutation } from '@apollo/client'
import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'
import { LOGIN } from '../graphql/queries'
import { Link as LinkRouter } from 'react-router-dom'

export const LogIn = () => {
  const { activateAuth } = useContext(Context)
  const [loginMutation, { loading, error }] = useMutation(LOGIN)

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  const errorMsg =
    error && 'La contraseña no es correcta o el usuario no existe.'

  return (
    <>
      <UserForm
        disabled={loading}
        error={errorMsg}
        title='Iniciar Sesión'
        onSubmit={onSubmit}
      />
      <a>
        ¿No tienes cuenta? <LinkRouter to='/signup'>Clic aquí</LinkRouter>
      </a>
    </>
  )
}
