import {useState} from 'react'
import { useTrackedEffect } from '../hooks'

const UseTrackedEffectDemo = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useTrackedEffect((changes, previousDeps, currentDeps, type_changes) => {
    console.log('changes', changes)
    console.log('previousDeps', previousDeps)
    console.log('currentDeps', currentDeps)
    console.log('type_changes', type_changes)
  }, [count, count2], ['count', 'count2'])

  return (
    <div>
      <h2>UseTrackedEffectDemo</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>count: {count}</button>
        <button onClick={() => setCount2(count2 + 1)}>count2: {count2}</button>
      </div>
    </div>
  )
}

export default UseTrackedEffectDemo