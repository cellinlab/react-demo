import { useState } from 'react'

import { useThrottleFn } from '../hooks'

const UseThrottleFnDemo = () => {
  const [count, setCount] = useState(0)
  const [ throttleCount, setThrottleCount ] = useState(0)

  const run = useThrottleFn(() => {
    setThrottleCount(count)
  }, { wait: 1000 })

  const handleClick = () => {
    setCount(count + 1)
    run()
  }

  return (
    <div>
      <h1>UseThrottleFnDemo</h1>
      <p>count: {count}</p>
      <p>throttleCount: {throttleCount}</p>
      <button onClick={handleClick}>add</button>
    </div>
  )
}

export default UseThrottleFnDemo