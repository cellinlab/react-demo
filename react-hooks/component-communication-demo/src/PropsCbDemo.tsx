import React, { useState } from "react";

const Child: React.FC<any> = (props) => {
  const { flag, children, changCount } = props;

  return (
    <>
      <div
        style={{
          border: "1px solid green",
          padding: "10px",
        }}
      >
        <h2>Child Component</h2>
        <div>flag from parent: {JSON.stringify(flag)}</div>
        <div>children from parent: {children}</div>
        <div>
          change parent count:
          <button
            onClick={() => {
              changCount();
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

const Parent: React.FC<any> = () => {
  const [flag, setFlag] = useState(true);
  const [count, setCount] = useState(0);

  const handleChangeCount = () => {
    setCount((v) => v + 1);
  };

  return (
    <>
      <div
        style={{
          border: "1px solid blue",
          padding: "10px",
        }}
      >
        <h2>Parent Component</h2>
        <button onClick={() => setFlag((v) => !v)}>Toggle</button>
        <div>flag: {JSON.stringify(flag)}</div>
        <div>count: {count}</div>
        <Child flag={flag} changCount={handleChangeCount}>
          <p
            style={{
              border: "1px solid red",
            }}
          >
            P tag from parent
          </p>
        </Child>
      </div>
    </>
  );
};

const PropsCb = () => {
  return (
    <div>
      <h2>PropsCb</h2>
      <Parent />
    </div>
  );
};

export default PropsCb;
