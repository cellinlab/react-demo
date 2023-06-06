import { createContext, useContext, useState } from "react";

const CountContext = createContext(0);

const Child = () => {
  const count = useContext(CountContext);

  return (
    <div>
      Child: {count}
      <GrandChild />
    </div>
  );
};

const GrandChild = () => {
  const count = useContext(CountContext);

  return <div>GrandChild: {count}</div>;
};

const UseContextDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>UseContextDemo</h2>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <CountContext.Provider value={count}>
        <Child />
      </CountContext.Provider>
    </div>
  );
};

export default UseContextDemo;
