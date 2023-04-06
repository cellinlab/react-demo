import { useRef } from 'react';

const useSingleton = (callback) => {
  const hasBeenCalled = useRef(false);
  if (hasBeenCalled.current) return;
  callback();
  hasBeenCalled.current = true;
}

export default useSingleton;
