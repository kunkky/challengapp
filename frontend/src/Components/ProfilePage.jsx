import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState({});

  //ensure only user see page
  const navigate = useNavigate();
  
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const userInfo = JSON.parse(sessionStorage.getItem("user"));
        if (userInfo.type === "user") {
          navigate('/dashboard');
        }
    } else {
      console.log("Navigating to /");
        navigate('/');
    }
  }, [navigate]);

    //ensure only user see page
    const navigate = useNavigate();

  const fetchProfileDetails = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/profile"); // Replace with actual endpoint to fetch user profile details from the backend
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate('/logout')
  };

  return (
    <div>
      <div className="p-4">
        <div className="bg-white-200 mb-4">
          <h2 className="text-blue-2xl font-semibold mb-2"><strong>Student Name:</strong> {user.name}</h2>
          <p className="text-blue-600 mb-1"><strong>Stack:</strong> {user.stack}</p>
          <p className="text-blue-600 mb-1"><strong>Level:</strong> {user.level}</p>
          <p className="text-blue-600 mb-1"><strong>Language:</strong> {user.language}</p>
          <p className="text-blue-600 mb-1"><strong>Email:</strong> {user.email}</p>
          <p className="text-blue-600 mb-1"><strong>Contact:</strong> {user.contact}</p>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
  </div>
  )
}

export default ProfilePage
