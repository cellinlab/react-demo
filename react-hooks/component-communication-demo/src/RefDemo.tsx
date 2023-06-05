import React from "react";

const Child = React.forwardRef((props: any, ref: any) => {
  const [count, setCount] = React.useState(0);
  const doSomeThing = () => {
    console.log("Child do something");
    setCount(count + 1);
  };

  React.useImperativeHandle(ref, () => ({
    doSomeThing,
  }));

  return (
    <div>
      <h2>Child</h2>
      <p>Count: {count}</p>
    </div>
  );
});

const Parent = () => {
  const childRef = React.useRef<any>(null);

  const handleClick = () => {
    childRef.current.doSomeThing();
  };

  return (
    <div>
      <h2>Parent</h2>
      <Child ref={childRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

const RefDemo = () => {
  return (
    <div>
      <h2>RefDemo</h2>
      <Parent />
    </div>
  );
};

export default RefDemo;
