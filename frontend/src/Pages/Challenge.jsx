import React, { useLayoutEffect, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChallengeTemplate from '../Components/ChallengeTemplate';

const Challenge = () => {
  useLayoutEffect(() => {
    document.title = "Dashboard | Challenge ";
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
      <ChallengeTemplate pageName="Challenge"/>
    </div>
  );
};

export default Challenge