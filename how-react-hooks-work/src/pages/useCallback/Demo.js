import React, { useCallback, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  const handleIncrement = useCallback(
    () => {
      useCallbackFunc.reuseTimes = (useCallbackFunc.reuseTimes || 0) + 1;
      console.log("handleIncrement");
      console.log("useCallbackFunc.reuseTimes", useCallbackFunc.reuseTimes);
      setCount(count + 1);
    },
    [count]
  );

  const handleColorChange = () => {
    useCallbackFunc.reuseTimes = (useCallbackFunc.reuseTimes || 0) + 1;
    console.log("handleColorChange");
    console.log("useCallbackFunc.reuseTimes", useCallbackFunc.reuseTimes);
    setColor(color === "red" ? "blue" : "red");
  };

  const useCallbackFunc = useCallback(() => {
    console.log("useCallbackFunc");
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleIncrement}>Increment</button>
      <p style={{ color }}>Change color</p>
      <button onClick={handleColorChange}>Change color</button>
    </div>
  );
};

export default Counter;
