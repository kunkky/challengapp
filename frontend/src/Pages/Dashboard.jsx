import React, { useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  useLayoutEffect(() => {
    document.title = "Dashboard | Big Money awaits you"
  }, [])
  
  const navigate = useNavigate;
  //set Use location so as to get user info
  const location = useLocation()
  let account_number = null;
  if (sessionStorage.getItem("user")) {
    console.log(sessionStorage.getItem("user"));
  }
  else {
    navigate('/')

  }


  return (
    <div>Dashboard</div>
  )
}

export default Dashboard