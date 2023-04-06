import useCounter from "./useCounter";

const Demo = () => {
  const {
    count,
    increment,
    decrement,
  } = useCounter(1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Demo;
