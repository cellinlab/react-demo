import { useState } from 'react';

import { useCopy } from '../hooks';

const UseCopyDemo = () => {
  const [value, setValue] = useState<string>("");
  const [copyText, copy] = useCopy();

  return (
    <div>
      <h2>UseCopyDemo</h2>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => copy(value)}>Copy</button>
        <p>
          {copyText ? `Copied: ${copyText}` : "Nothing copied"}
        </p>
      </div>
    </div>
  )
}

export default UseCopyDemo