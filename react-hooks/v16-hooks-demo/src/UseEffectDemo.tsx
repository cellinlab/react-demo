import { useEffect, useState } from "react";

const Child = () => {
  useEffect(() => {
    console.log("Child useEffect");
    return () => {
      console.log("Child useEffect return");
    };
  }, []);

  return <div>Child</div>;
};

const AnotherChild = () => {
  useEffect(() => {
    console.log("AnotherChild useEffect always run");
  });

  return <div>AnotherChild</div>;
};

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("UseEffectDemo useEffect");
    console.log("count: ", count);
  }, [count]);

  return (
    <div>
      <h2>UseEffectDemo</h2>
      <p>count: {count}</p>
      {count % 2 === 0 && <Child />}
      <AnotherChild />
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export default UseEffectDemo;
