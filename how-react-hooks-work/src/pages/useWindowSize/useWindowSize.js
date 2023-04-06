import { useState, useEffect } from 'react';

const getSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    size: window.innerWidth > 600 ? 'large' : 'small'
  };
}
const useWindowSize = () => {
  const initSize = getSize();
  const [size, setSize] = useState(initSize.size);
  const [width, setWidth] = useState(initSize.width);
  const [height, setHeight] = useState(initSize.height);

  useEffect(() => {
    const handleResize = () => {
      const { width, height, size } = getSize();
      setWidth(width);
      setHeight(height);
      setSize(size);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [size, width, height];
};

export default useWindowSize;
