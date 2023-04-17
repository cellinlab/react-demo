import { useState, useEffect } from 'react';

import getData from './api';

export default function useFetch(url) {
  const [data, setData] = useState();
  const [status, setStatus] = useState('idle'); // ['idle', 'loading', 'error', 'success']
  const [error, setError] = useState(null);

  useEffect(() => {
    let doUpdate = true;

    setStatus('loading');
    setError(null);
    setData(undefined);

    getData(url)
      .then((data) => {
        if (doUpdate) {
          setData(data);
          setStatus('success');
        }
      })
      .catch((error) => {
        if (doUpdate) {
          setError(error);
          setStatus('error');
        }
      });

    return () => {
      doUpdate = false;
    };
  }, [url]);

  return { data, status, error };
}
