import { useState } from 'react'
import { useDebounce } from '../hooks'

const UseDebounceDemo = () => {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(0)

  const debouncedValue = useDebounce(value, { wait: 500 })

  const handleChange = () => {
    setCount(count + 1)
    setValue(`value-${count}`)
  };

  return (
    <div>
      <h2>UseDebounceDemo</h2>
      <button
        onClick={handleChange}
      >
        change value
      </button>
      <p>
        value: {value}
      </p>
      <p>
        debouncedValue: {debouncedValue}
      </p>
      <p>
        count: {count}
      </p>
    </div>
  )
}

export default UseDebounceDemo