import { useEffect, useState } from 'react';

import apiClient from './apiClient';

const useArticle = (id) => {
  console.log('useArticle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    console.log('useArticle: apiClient');
    apiClient
      .get(`/posts/${id}`)
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

export default useArticle;
