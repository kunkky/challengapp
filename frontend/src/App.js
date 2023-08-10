import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Signin from './Pages/SignIn'
import Profile from './Pages/Profile'
import ErrorPage from './Pages/ErrorPage'
import Dashboard from './Pages/Dashboard'





const ProtectedRoutes = ({ children }) => {
  if (sessionStorage.getItem("token")) {
    return children
  } else {
    return <Navigate to={"/"} replace={true} />
  }
}



const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signUp' element={<SignUp />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
      {/* Protected routes */}

      <Route path='/dashboard' element={
        <ProtectedRoutes>

          <Dashboard />
        </ProtectedRoutes>
      }></Route>

      <Route path='/profile' element={
        <ProtectedRoutes>
          <Profile />
        </ProtectedRoutes>
      }></Route>

      {/* Error Page */}
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
  )
}

export default App