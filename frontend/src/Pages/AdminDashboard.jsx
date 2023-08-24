import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import DashboardFooter from '../Components/DashboardFooter'
import AdminDashTemplate from '../Components/AdminDashTemplate'


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
                <AdminDashTemplate pageName="Admin Dashboard" />
                <DashboardFooter />
            </div>

    );
};

export default AdminDashboard