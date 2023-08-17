import React, { useEffect, useState } from 'react';
import BaseUrl from './../BaseUrl';

const useFetchChallenges = (details, url) => {
    const [loading, setLoading] = useState(false);
    const [challengeResponse, setChallengeResponse] = useState('');

    const fetchApi = async () => {
        setLoading(true);
        try {
        console.log(BaseUrl+url);
            const response = await fetch(BaseUrl + url, {
                method: 'POST',
                credentials: 'include', // Include cookies in the request
                body: JSON.stringify(details),
                headers: {
                    'Content-Type': 'application/json',
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

export default useFetchChallenges;
