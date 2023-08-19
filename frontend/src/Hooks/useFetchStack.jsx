import React, { useEffect, useState } from 'react';
import BaseUrl from './../BaseUrl';

const useFetchStack = (url,where) => {
    const [apiLoading, setApiLoading] = useState(false);
    const [apiResponse, setApiresponse] = useState('');

    const fetchApi = async () => {
        setApiLoading(true);
        try {
            const response = await fetch(BaseUrl + url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setApiLoading(false);
            setApiresponse(data);
        } catch (error) {
            setApiLoading(false);
            setApiresponse(error);
        }
    };

    useEffect(() => {
        // Run the effect only when details.level, details.type change
        fetchApi();
    }, [where]);

    return {
        apiLoading,
        apiResponse,
    };
};

export default useFetchStack