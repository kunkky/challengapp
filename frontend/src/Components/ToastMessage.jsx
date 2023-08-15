
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';


const ToastMessage = () => {

    //Get Location Items
    const location = useLocation()
    const state = location.state;
    let NotificationMessage=null;
    let notify=null;
    if (state!==null){
        NotificationMessage=state.message;
        notify = () => toast(state.message);
    }
    else{
        notify = () => toast("Hi");
    }

    useEffect(() => {
        if (NotificationMessage !==null){
            notify()
        }
    }, [state])
    
    return (
        <div>
            <ToastContainer />
        </div>
    );
}

export default ToastMessage