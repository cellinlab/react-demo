import { useCallback, useState } from "react"

const useAsync = (asyncFunction) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const execute = useCallback(() => {
    setLoading(true);
    setData(null);
    setError(null);

    return asyncFunction()
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [asyncFunction]);

  return { data, error, loading, execute };
};

export default useAsync;
