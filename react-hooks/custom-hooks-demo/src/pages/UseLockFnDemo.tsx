import { useState } from 'react'
import { useLockFn } from '../hooks'

const fn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 1000)
  })
}

const UseLockFnDemo = () => {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  

  const lockFn = useLockFn(async () => {
    setLoading(true)

    console.log('start')
    const res = await fn()
    console.log(res)

    setLoading(false)
    setCount(count + 1)
  })

  return (
    <div>
      <h2>UseLockFnDemo</h2>
      <p>count: {count}</p>
      <p>loading: {loading ? 'true' : 'false'}</p>
      <button onClick={lockFn}>lockFn</button>
    </div>
  )
}

export default UseLockFnDemo