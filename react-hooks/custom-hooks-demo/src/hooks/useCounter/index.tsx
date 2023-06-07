import { useState } from 'react';

const useCounter = (initialValue: number = 0) => {
  const [current, setCurrent] = useState(initialValue);

  const increment = (num = 1) => {
    setCurrent((v) => v + num);
  };

  const decrement = (num = 1) => {
    setCurrent((v) => v - num);
  };

  const reset = (num = initialValue) => {
    setCurrent(num);
  };

  return [
    current,
    {
      increment,
      decrement,
      reset,
    },
  ] as const;
};

export default useCounter;
