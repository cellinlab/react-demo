import React, {useEffect,useState} from 'react'

const UseStateArr = () => {
  const [arr, setArr] = useState([])

  useEffect(() => {
    console.log('arr changed', arr)
  }, [arr])

  return (
    <div>
      <p>
        arr length: {arr.length} <br />
        arr : {JSON.stringify(arr)}
      </p>
      <button
        onClick={() => {
          setArr([])
        }}
      >
        newArr
      </button>
      <button
        onClick={() => {
          setArr([...arr, arr.length])
        }}
      >
        add ele
      </button>
    </div>
  )
}

export default UseStateArr