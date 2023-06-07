import { useMemo, useState } from 'react'

import { useCreation } from '../hooks'

const UseCreationDemo = () => {
  const [flag, setFlag] = useState(true);
  const [count, setCount] = useState(0);

  const getNowData = () => {
    return Math.random() + count;
  };

  const nowData__ = useCreation(() => getNowData(), []);

  const nowData_= useCreation(() => getNowData(), [flag]);

  const nowData = useCreation(() => getNowData(), [flag, count]);

  const memoizedData = useMemo(() => getNowData(), [flag]);

  return (
    <div>
      <h2>
        useCreation Demo
      </h2>
      <div>
        <p>
          normal: {getNowData()}
        </p>
        <p>
          useCreation deps []: {nowData__}
        </p>
        <p>
          useCreation deps [flag]: {nowData_}
        </p>
        <p>
          useCreation deps [flag, count]: {nowData}
        </p>
        <p>
          useMemo deps [flag]: {memoizedData}
        </p>
        <button onClick={() => setFlag(!flag)}>change flag</button>
        <button onClick={() => setCount(count + 1)}>change count</button>
      </div>
    </div>
  )
}

export default UseCreationDemo