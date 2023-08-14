import React, { useEffect, useState } from 'react';
import BaseUrl from './../BaseUrl';

const useLogin = (details, url) => {
  const [loading, setLoading] = useState(false);
  const [loginResponse, setLoginResponse] = useState(null);
  const fetchApi = async () => {
  console.log(details);
    if (details.email !== "") {
      setLoading(true);
      try {
        const response = await fetch(BaseUrl + url, {
          method: 'POST',
          body: details,
        });
        console.log("Response status:", response.status);
        console.log("Response statusText:", response.statusText);
        const data = await response.json();
        console.log("Response data:", data);
        setLoading(false);
        setLoginResponse(data);
      } catch (error) {
        setLoading(false);
        setLoginResponse(error);
      }
    }
  };
  useEffect(() => {
    fetchApi();
  }, [details]); 

  return {
    loading,
    loginResponse,
  }; // 
};

export default useLogin;
