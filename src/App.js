import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { SignUp } from './pages/SignUp'

import Context from './Context'
import { LogIn } from './pages/LogIn'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:categoryId' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth
            ? (
              <Routes>
                <Route path='/favs' element={<Favs />} />
                <Route path='/user' element={<User />} />
              </Routes>
              )
            : (
              <Routes>
                <Route path='/favs' element={<LogIn />} />
                <Route path='/user' element={<LogIn />} />
              </Routes>
              )}
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
