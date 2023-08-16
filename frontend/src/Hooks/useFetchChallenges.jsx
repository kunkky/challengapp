import React, { useEffect, useState } from 'react';
import BaseUrl from './../BaseUrl';

const useFetchChallenges = (details, url) => {
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
        // Run the effect only when details.email, details.password, or Authtype change
        fetchApi();
    }, [details]);

    return {
        loading,
        challengeResponse,
    };
};

export default useFetchChallenges