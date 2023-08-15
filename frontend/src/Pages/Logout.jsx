import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BaseUrl from '../BaseUrl'

const Logout = () => {
    const navigate = useNavigate();
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

useEffect(() => {
    logoutHandler();
}, [])


  return (
    <div></div>
  )
}

export default Logout