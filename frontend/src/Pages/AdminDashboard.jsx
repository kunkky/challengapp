import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const AdminDashboard = ({ logoutHandler }) => {
    useLayoutEffect(() => {
        document.title = "Dashboard |";
    }, []);

//ensure only admin see page
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
    
        return (
        <div>
            Dashboard
            <span onClick={logoutHandler}>Log Out</span>
        </div>
    );
};

export default AdminDashboard