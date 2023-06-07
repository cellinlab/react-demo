import { useState, useEffect } from "react";

import { useLatest } from "../hooks";

const UseLatest = () => {
  const [count, setCount] = useState(0);
  const countRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("count", count);
      console.log("countRef", countRef.current);
      // setCount(count + 1);
      setCount(countRef.current + 1);
    }, 1000);
    return () => {
      console.log("clear interval", interval);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>useLatest</h2>
      <div>
        counter is: <span>{count}</span>
      </div>
    </div>
  );
};

export default UseLatest;
