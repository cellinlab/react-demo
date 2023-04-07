import { useState, useEffect } from 'react';

const useKeyPress = ({ dom = document.body }) => {
  const [key, setKey] = useState(null);

  const handleKeyDown = (e) => {
    setKey(e.key);
  };

  useEffect(() => {
    dom.addEventListener('keydown', handleKeyDown);

    return () => {
      dom.removeEventListener('keydown', handleKeyDown);
    };
  }, [dom]);

  return key;
};

const Demo = () => {
  const key = useKeyPress({ dom: document.body });

  return (
    <div>
      <h1>useKeyPress</h1>
      <p>Press any key on the keyboard</p>
      <p>Key: {key || 'None'}</p>
    </div>
  );
};

export default Demo;
