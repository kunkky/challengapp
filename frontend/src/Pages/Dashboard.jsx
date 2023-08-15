import React, { useLayoutEffect, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashTemplate from '../Components/DashTemplate';

const Dashboard = () => {
  useLayoutEffect(() => {
    document.title = "Dashboard | Tech Challenge App";
  }, []);

  //ensure only user see page
  const navigate = useNavigate();
  useEffect(() => {
    // Set Use location so as to get user info
    if (sessionStorage.getItem("user")) {
      // Redirect if not user
      const userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo.type === "admin") {
        navigate('/admindashboard');
      }
    } else {
      navigate('/');
    }
  }, [navigate]); // Add navigate to the dependency array

  return (
    <div>
      <DashTemplate pageName="Dashboard" />
    </div>
  );
};

export default Dashboard;
