import React, { useEffect, useState } from "react";

import useSingleton from "./useSingleton";

const Deom = () => {
  const [count, setCount] = useState(0);

  console.log("Render called");

  useSingleton(() => {
    console.log("Singleton called");
    console.log("Count: ", count);
  });

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Deom;
