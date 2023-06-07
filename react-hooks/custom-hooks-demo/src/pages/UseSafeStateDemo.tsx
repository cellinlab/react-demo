import { useState } from 'react';

import { useSafeState } from '../hooks'

const Child = () => {
  const [count, setCount] = useSafeState(0)

  const simulateAsync = () => {
    setTimeout(() => {
      setCount(c => c + 1)
    }, 1000)
  }

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => simulateAsync()}>+1 async</button>
    </div>
  )
};

const UseSafeStateDemo = () => {
  const [show, setShow] = useState(true)
  return (
    <div>
      <h2>UseSafeStateDemo</h2>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Child />}
    </div>
  )
}

export default UseSafeStateDemo