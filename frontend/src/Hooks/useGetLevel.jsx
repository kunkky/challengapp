import React, { useEffect, useState } from 'react';
import BaseUrl from './../BaseUrl';

const useGetLevel = ( url) => {
  const [loading, setLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);
    console.log(BaseUrl+url);
  const fetchApi = async () => {
    if (url !== "") {
      setLoading(true);
      try {
          const response = await fetch(BaseUrl + url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setLoading(false);
          setApiResponse(data);
      } catch (error) {
        setLoading(false);
          setApiResponse(error);
          console.log(error);
      }
    }
  };

  useEffect(() => {
    // Run the effect only when details.email, details.password, or Authtype change
    fetchApi();
  }, [url]);

  return {
    loading,
    apiResponse,
  };
};

export default useGetLevel;
