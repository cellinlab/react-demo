import { useState, useEffect } from "react";

import apiClient from "./apiClient";

const useComments = ({ articleId }) => {
  console.log("useComments");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!articleId) {
      return;
    }

    setLoading(true);
    setData(null);
    setError(null);

    console.log("useComments: apiClient");
    apiClient
      .get(`/posts/${articleId}/comments`)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [articleId]);

  return {
    data,
    error,
    loading,
  };
};

export default useComments;
