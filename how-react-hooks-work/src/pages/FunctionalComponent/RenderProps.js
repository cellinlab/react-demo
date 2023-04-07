import React, { useState } from 'react';

const CounterRenderProps = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return children({
    count,
    increment,
    decrement,
  });
};


const Demo = () => {
  return (
    <div>
      <h1>Render Props</h1>
      <fieldset style={{ width: '200px' }}>
        <legend>Counter 1</legend>
        <CounterRenderProps>
          {({ count, increment, decrement }) => (
            <div>
              <p>{count}</p>
              <button onClick={increment}>+</button>
              <button onClick={decrement}>-</button>
            </div>
          )}
        </CounterRenderProps>
      </fieldset>
      <fieldset style={{ width: '200px' }}>
        <legend>Counter 2</legend>
        <CounterRenderProps>
          {({ count, increment, decrement }) => (
            <div>
              <button onClick={increment}>+</button>
              <p>{count}</p>
              <button onClick={decrement}>-</button>
            </div>
          )}
        </CounterRenderProps>
      </fieldset>
    </div>
  );
};

export default Demo;
