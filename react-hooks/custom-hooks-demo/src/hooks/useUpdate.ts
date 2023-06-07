import { useReducer } from 'react';

const useUpdate = () => {
  // 这里也可以用 useState
  const [, forceUpdate] = useReducer((num: number): number => num + 1, 0);

  return forceUpdate;
}

export default useUpdate;
