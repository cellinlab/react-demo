import { useNetwork } from '../hooks'

const UseNetworkDemo = () => {
  const network = useNetwork();
  return (
    <div>
      <h2>
        UseNetworkDemo
      </h2>
      <div>
        <p>online: {network.online ? 'true' : 'false'}</p>
        <p>rtt: {network.rtt}</p>
        <p>type: {network.type}</p>
        <p>saveData: {network.saveData ? 'true' : 'false'}</p>
        <p>downlink: {network.downlink}</p>
        <p>effectiveType: {network.effectiveType}</p>
      </div>
    </div>
  )
}

export default UseNetworkDemo