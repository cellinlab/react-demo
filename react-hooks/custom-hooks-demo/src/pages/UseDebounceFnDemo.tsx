import { useDebounceFn } from '../hooks'

const UseDebounceFnDemo = () => {
  const run = useDebounceFn(() => {
    console.log('run')
  }, {
    wait: 500
  });

  return (
    <div>
      <h2>UseDebounceFnDemo</h2>
      <button onClick={run}>run</button>
      <p>
        only run when click button after 500ms
      </p>
    </div>
  )
}

export default UseDebounceFnDemo