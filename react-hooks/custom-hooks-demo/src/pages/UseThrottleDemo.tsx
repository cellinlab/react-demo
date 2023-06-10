import {useState} from 'react'

import { useThrottle } from '../hooks'

const UseThrottleDemo = () => {
  const [count, setCount] = useState(0)

  const throttleCount = useThrottle(count, { wait: 1000 })

  return (
    <div>
      <h1>useThrottle</h1>
      <p>count: {count}</p>
      <p>throttleCount: {throttleCount}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  )
}

export default UseThrottleDemo