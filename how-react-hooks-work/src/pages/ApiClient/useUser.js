import { useEffect, useState } from 'react';

import apiClient from './apiClient';

const useUser = (id) => {
  console.log('useUser');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    setLoading(true);
    setData(null);
    setError(null);

    console.log('useUser: apiClient');
    apiClient
      .get(`/users/${id}`)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [id]);

  return {
    data,
    error,
    loading,
  };
};

export default useUser;
