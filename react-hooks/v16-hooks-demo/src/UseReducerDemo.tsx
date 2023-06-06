import { useReducer } from "react";

const Child = ({ count }: { count: number }) => {
  console.log("Child render");
  return <div>Child: {count}</div>;
};

const UseReducerDemo = () => {
  const [count, dispatch] = useReducer((state: number, action: string) => {
    switch (action) {
      case "add":
        return state + 1;
      case "minus":
        return state - 1;
      case "nochange":
        return state;
      default:
        return state;
    }
  }, 0);

  console.log("UseReducerDemo render");

  return (
    <div>
      <h2>UseReducerDemo</h2>
      <p>count: {count}</p>
      <Child count={count} />
      <button onClick={() => dispatch("add")}>+1</button>
      <button onClick={() => dispatch("minus")}>-1</button>
      <button onClick={() => dispatch("nochange")}>nochange</button>
    </div>
  );
};

export default UseReducerDemo;
