import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [user, setUser] = useState({});

  //ensure only user see page
  const navigate = useNavigate();
  
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo.type === "user") {
        setUser({
          name: userInfo.fullname,
          email: userInfo.email,
          stack: userInfo.stack,
          contact: userInfo.phone,
          level: userInfo.level
        });
      } else {
        console.log("Navigating to /");
        navigate('/');
      }
    } 
  }, [navigate]);

  const handleLogout = () => {
    // Add logout logic here
    navigate('/logout')
  };

  return (
    <div>
      <div className="p-4">
        <div className="bg-white-200 mb-4">
          <h1 className="text-blue-900 mb-2"><strong>Student Name:</strong> {user.name}</h1>
          <p className="text-blue-900 mb-2"><strong>Stack:</strong> {user.stack}</p>
          <p className="text-blue-900 mb-2"><strong>Level:</strong> {user.level}</p>
          <p className="text-blue-900 mb-2"><strong>Email:</strong> {user.email}</p>
          <p className="text-blue-900 mb-2"><strong>Contact:</strong> {user.contact}</p>
          <p className="text-blue-900 mb-2"><strong>Language:</strong> {user.language}</p>
        </div>
        <button
          className="bg-red-500 hover:bg-red-800 text-white py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
  </div>
  )
}

export default ProfilePage
