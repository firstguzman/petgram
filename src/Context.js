import React, { createContext, useState } from 'react'
import { useApolloClient } from '@apollo/client'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      const apolloClient = useApolloClient()

      setIsAuth(false)
      window.sessionStorage.removeItem('token')
      apolloClient.resetStore()
    }
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Consumer: Context.Consumer
}
