import React, { useState } from 'react';

const ToggleButton = ({ value, onChange }) => {
  const handleClick = () => {
    onChange(!value);
  };

  return (
    <button style={{ width: '60px' }} onClick={handleClick}>
      {value ? 'ON' : 'OFF'}
    </button>
  );
};

const Demo = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Toggle Button</h1>
      <ToggleButton value={show} onChange={setShow} />
      {show && <div>Content</div>}
    </div>
  );
};

export default Demo;
