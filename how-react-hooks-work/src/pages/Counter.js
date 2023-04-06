import React, { useState } from 'react';

const CounterLabel = ({ count }) => {
  const color = count % 2 === 0 ? 'red' : 'blue';
  return <p style={{ color }}>You clicked {count} times</p>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterLabel count={count} />
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
