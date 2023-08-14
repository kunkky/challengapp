import React, { useEffect, useState } from 'react';
import BaseUrl from './../BaseUrl';

const useLogin = (details, url, Authtype) => {
  const [loading, setLoading] = useState(false);
  const [loginResponse, setLoginResponse] = useState('');
  const userinfo = { email: details.email, password: details.password, type: Authtype };

  const fetchApi = async () => {
    if (details.email !== "") {
      setLoading(true);
      try {
        const response = await fetch(BaseUrl + url, {
          method: 'POST',
          body: JSON.stringify(userinfo),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setLoading(false);
        setLoginResponse(data);
      } catch (error) {
        setLoading(false);
        setLoginResponse(error);
      }
    }
  };

  useEffect(() => {
    // Run the effect only when details.email, details.password, or Authtype change
    fetchApi();
  }, [details.email, details.password, Authtype]);

  return {
    loading,
    loginResponse,
  };
};

export default useLogin;
