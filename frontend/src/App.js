import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/Signup'
import Logout from './Pages/Logout'
import UserProfile from './Pages/UserProfile'
import Signin from './Pages/Signin'
import Challenge from './Pages/Challenge'
import AdminSignin from './Pages/AdminSignin'
import Profile from './Pages/Profile'
import ErrorPage from './Pages/ErrorPage'
import Dashboard from './Pages/Dashboard'
import WebTerminal from './Components/WebTerminal'
import CodeEditor from './Components/CodeEditor'
import HtmlCOdeEditor from './Components/HtmlCOdeEditor'
import AdminDashboard from './Pages/AdminDashboard'



const ProtectedRoutes = ({ children }) => {
  if (sessionStorage.getItem("user")) {
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
      <Route path='/logout' element={<Logout />}></Route> 
      <Route path='/adminsignin' element={<AdminSignin />}></Route>
      <Route path='/terminal' element={<WebTerminal />}></Route>
      <Route path='/editor' element={<CodeEditor />}></Route>
      <Route path='/htmleditor' element={<HtmlCOdeEditor />}></Route>
      {/* Protected routes */}

      <Route path='/dashboard' element={
        <ProtectedRoutes>
          <Dashboard />
        </ProtectedRoutes>
      }></Route>
      <Route path='/challenge' element={
        <ProtectedRoutes>
          <Challenge />
        </ProtectedRoutes>
      }></Route>
      <Route path='/userprofile' element={
        <ProtectedRoutes>
          <UserProfile />
        </ProtectedRoutes>
      }></Route>

      <Route path='/profile' element={
        <ProtectedRoutes>
          <Profile />
        </ProtectedRoutes> 
      }></Route>

      <Route path='/admindashboard' element={
        <ProtectedRoutes>
          <AdminDashboard/>
        </ProtectedRoutes>
      }></Route>


      {/* Error Page */}
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
  )
}

export default App