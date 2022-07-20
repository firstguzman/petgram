import React, { Suspense, useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Detail } from './pages/Detail'

import { Routes, Route, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { SignUp } from './pages/SignUp'

import { Context } from './Context'
import { LogIn } from './pages/LogIn'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'

const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:categoryId' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='/favs'
          element={isAuth ? <Favs /> : <Navigate replace to='/login' />}
        />
        <Route
          path='/user'
          element={isAuth ? <User /> : <Navigate replace to='/login' />}
        />
        <Route
          path='/login'
          element={!isAuth ? <LogIn /> : <Navigate replace to='/' />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <NavBar />
    </Suspense>
  )
}
