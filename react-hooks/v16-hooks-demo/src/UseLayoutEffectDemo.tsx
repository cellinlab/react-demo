import { useLayoutEffect, useState, useEffect } from "react";

const UseLayoutEffectDemo = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  useEffect(() => {
    console.log("useEffect", count1);
    if (count1 === 0) {
      setCount1(10 + Math.random() * 100);
    }
  }, [count1]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect", count1);
    if (count2 === 0) {
      setCount2(10 + Math.random() * 100);
    }
  }, [count2]);

  return (
    <div>
      <h2>UseLayoutEffectDemo</h2>
      <div>count1: {count1}</div>
      <div>count2: {count2}</div>
    </div>
  );
};

export default UseLayoutEffectDemo;
