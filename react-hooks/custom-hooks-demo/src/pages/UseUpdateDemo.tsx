import { useUpdate } from '../hooks'

const UseUpdateDemo = () => {
  const update = useUpdate()
  console.log('UseUpdateDemo render')
  return (
    <div>
      <h1>
      UseUpdateDemo
      </h1>
      <button onClick={() => {
        update()
      }}>update</button>
    </div>
  )
}

export default UseUpdateDemo