import React, { useEffect, useState } from 'react';
import BaseUrl from './../BaseUrl';
import  Token  from './../Token';

const useFetchAllChallenges = (url) => {
    const [loading, setLoading] = useState(false);
    const [challengeResponse, setChallengeResponse] = useState('');

    const fetchApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(BaseUrl + url, {
                method: 'GET',
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
    }, [url]);

    return {
        loading,
        challengeResponse,
    };
};

export default useFetchAllChallenges;
