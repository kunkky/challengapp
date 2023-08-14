import React from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/Signup'
import Signin from './Pages/Signin'
import AdminSignin from './Pages/AdminSignin'
import Profile from './Pages/Profile'
import ErrorPage from './Pages/ErrorPage'
import Dashboard from './Pages/Dashboard'
import WebTerminal from './Components/WebTerminal'
import CodeEditor from './Components/CodeEditor'
import HtmlCOdeEditor from './Components/HtmlCOdeEditor'
import AdminDashboard from './Pages/AdminDashboard'
import BaseUrl from './BaseUrl'

const ProtectedRoutes = ({ children }) => {
  if (sessionStorage.getItem("user")) {
    return children
  } else {
    return <Navigate to={"/"} replace={true} />
  }
}

const App = () => {


  const navigate = useNavigate()
  const logoutHandler = async () => {
    try {
      const response = await fetch(BaseUrl + 'logout', {
        method: 'GET',
      });
      const data = await response.json();
      //clearsession
      // Delete the session item
      sessionStorage.removeItem('user');

      //redirect here
      navigate("/", {
        state: {
          message: data.responseMessage
        },
        replace: true,
      });

    } catch (error) {
      //error
    }
  };


  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signUp' element={<SignUp />}></Route>
      <Route path='/signin' element={<Signin />}></Route> 
      <Route path='/adminsignin' element={<AdminSignin />}></Route>
      <Route path='/terminal' element={<WebTerminal />}></Route>
      <Route path='/editor' element={<CodeEditor />}></Route>
      <Route path='/htmleditor' element={<HtmlCOdeEditor />}></Route>
      {/* Protected routes */}

      <Route path='/dashboard' element={
        <ProtectedRoutes>
          <Dashboard logoutHandler={logoutHandler}/>
        </ProtectedRoutes>
      }></Route>

      <Route path='/profile' element={
        <ProtectedRoutes>
          <Profile />
        </ProtectedRoutes>
      }></Route>

      <Route path='/admindashboard' element={
        <ProtectedRoutes>
          <AdminDashboard logoutHandler={logoutHandler} />
        </ProtectedRoutes>
      }></Route>


      {/* Error Page */}
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
  )
}

export default App