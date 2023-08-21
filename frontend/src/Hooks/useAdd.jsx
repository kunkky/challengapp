import React, { useEffect, useState } from 'react';
import BaseUrl from './../BaseUrl';
import  Token  from './../Token';

const useAdd = (details, url) => {
    const [loading, setLoading] = useState(false);
    const [challengeResponse, setChallengeResponse] = useState('');

    const fetchApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(BaseUrl + url, {
                method: 'POST',
                body: JSON.stringify(details),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': Token
                    
                },
            });
            const data = await response.json();
            setLoading(false);
            setChallengeResponse(data);
        } catch (error) {
            setLoading(false);
            setChallengeResponse(error);
        }
    };

    useEffect(() => {
        // Run the effect only when details.level, details.type change
        fetchApi();
    }, [details.level, details.type]);

    return {
        loading,
        challengeResponse,
    };
};

export default useAdd;
