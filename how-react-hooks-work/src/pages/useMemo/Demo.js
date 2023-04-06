import React, { useState, useMemo } from 'react';

const Demo = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');

  const handleIncrement = () => {
    console.log('handleIncrement');
    setCount(count + 1);
  }

  const handleColorChange = () => {
    console.log('handleColorChange');
    setColor(color === 'red' ? 'blue' : 'red');
  }

  const double = (() => {
    console.log('doubleFn');
    return count * 2;
  })();
  const useMemoTriple = useMemo(() => {
    console.log('useMemoTriple');
    return count * 3;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleIncrement}>Increment</button>
      <p style={{ color }}>Change color</p>
      <button onClick={handleColorChange}>Change color</button>
      <p>doubleFn: {double}</p>
      <p>useMemoTriple: {useMemoTriple}</p>
    </div>
  );
};

export default Demo;
