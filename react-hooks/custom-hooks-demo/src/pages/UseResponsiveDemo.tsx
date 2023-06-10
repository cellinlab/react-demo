import { useResonsive } from '../hooks'

const UseResponsiveDemo = () => {
  const info = useResonsive()
  return (
    <div>
      <h2>UseResponsiveDemo</h2>
      <p>
        {JSON.stringify(info)}
      </p>
      <div>
        {Object.keys(info).map((key) => (
          <div key={key}>
            {key}: {info[key] ? 'true' : 'false'}
          </div>
        ))}
      </div>
    </div>
  )
}

export default UseResponsiveDemo