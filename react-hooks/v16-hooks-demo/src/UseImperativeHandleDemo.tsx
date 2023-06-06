import { useImperativeHandle, useRef, useState } from "react";

const Child = ({ cRef }: any) => {
  const [count, setCount] = useState<number>(0);

  useImperativeHandle(cRef, () => ({
    add: add,
  }));

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Child</h2>
      <div>count: {count}</div>
      <button
        onClick={() => {
          add();
        }}
      >
        Add Count From Child
      </button>
    </div>
  );
};

const Parent = () => {
  const ref = useRef<any>(null);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Parent</h2>
      <Child cRef={ref} />
      <button
        onClick={() => {
          ref.current.add();
        }}
      >
        Add Count From Parent
      </button>
    </div>
  );
};

const UseImperativeHandle = () => {
  return (
    <div>
      <h2>UseImperativeHandle</h2>
      <Parent />
    </div>
  );
};

export default UseImperativeHandle;
