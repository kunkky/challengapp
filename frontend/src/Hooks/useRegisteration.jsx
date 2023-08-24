import React, { useEffect, useState } from 'react';
import BaseUrl from './../BaseUrl';


const useRegisteration = (details, url, Authtype) => {
    const [loading, setLoading] = useState(false);
    const [regResponse, setRegResponse] = useState('');
    const userinfo = {
        stack: details.stack,
        fullname: details.fullname,
        email: details.email,
        password: details.password,
        phone: details.phone,
        type: Authtype,
        level: "beginner"

    }


    const fetchApi = async () => {
        if (details.email !== "") {
            setLoading(true);
            try {
                const response = await fetch(BaseUrl + url, {
                    method: 'PUT',
                    body: JSON.stringify(userinfo),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setLoading(false);
                setRegResponse(data);
            } catch (error) {
                setLoading(false);
                setRegResponse(error);
            }
        }
    };

    useEffect(() => {
        // Run the effect only when details.email, details.password, or Authtype change
        fetchApi();
    }, [details.email, details.password, Authtype]);

    return {
        loading,
        regResponse,
    };
};

export default useRegisteration