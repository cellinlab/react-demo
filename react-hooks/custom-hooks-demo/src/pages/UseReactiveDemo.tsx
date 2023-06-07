import { useReactive } from '../hooks'

const UseReactiveDemo = () => {
  const state = useReactive<any>({
    count: 0,
    name: 'cell',
    flag: true,
    arr: [],
    todos: ['eat', 'sleep', 'code'],
    addTodo(item: string) {
      this.todos.push(item)
    },
    get todoCount() {
      return this.todos.length
    }
  });
  return (
    <div>
      <h2>UseReactiveDemo</h2>
      <hr />
      <p>count: {state.count}</p>
      <button
        onClick={() => {
          state.count++
        }}
      >
        +1
      </button>
      <hr />
      <p>name: {state.name}</p>
      <button
        onClick={() => {
          state.name = `cell, time is ${new Date().toLocaleTimeString()}`
        }}
      >
        tell cell time
      </button>
      <hr />
      <p>flag: {state.flag ? 'true' : 'false'}</p>
      <button
        onClick={() => {
          state.flag = !state.flag
        }}
      >
        toggle flag
      </button>
      <hr />
      <p>arr: {state.arr.join(',')}</p>
      <button
        onClick={() => {
          state.arr.push(state.arr.length)
        }}
      >
        push arr length
      </button>
      <hr />
      <div>todos: 
        <ul>
          {state.todos.map((todo: string, index: number) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
      <p>todoCount: {state.todoCount}</p>
      <button
        onClick={() => {
          state.addTodo(`todo ${state.todoCount}`)
        }}
      >
        add todo
      </button>
    </div>
  )
}

export default UseReactiveDemo