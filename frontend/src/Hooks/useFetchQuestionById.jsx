import React, { useEffect, useState } from 'react';
import BaseUrl from './../BaseUrl';
import Token from './../Token';

const useFetchQuestionById = (details, url) => {
    const [loading, setLoading] = useState(false);
    const [challengeResponse, setChallengeResponse] = useState(null);

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
    }, [details._id]);

    return {
        loading,
        challengeResponse,
    };
};

export default useFetchQuestionById