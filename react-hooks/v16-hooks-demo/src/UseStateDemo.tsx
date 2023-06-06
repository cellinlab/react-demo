import { useState } from "react";

const UseStateDemo = () => {
  const [count, setCount] = useState(0);
  const [countInObj, setCountInObj] = useState({ count: 0 });

  const handleChange = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>UseStateDemo</h2>
      <p>Count: {count}</p>
      <button onClick={handleChange}>Increment</button>
      <button
        onClick={() => {
          setCount((v) => v - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <br />
      <p>Count in object: {countInObj.count}</p>
      <button
        onClick={() => {
          setCountInObj({ count: countInObj.count + 1 });
        }}
      >
        Increment by new object
      </button>
      <button
        onClick={() => {
          countInObj.count += 1;
          setCountInObj(countInObj);
        }}
      >
        Increment by same object
      </button>
    </div>
  );
};

export default UseStateDemo;
