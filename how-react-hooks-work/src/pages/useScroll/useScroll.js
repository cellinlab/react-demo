import { useEffect, useState } from "react";

const getPosition = () => {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};

const useScroll = () => {
  const [position, setPosition] = useState(getPosition());

  useEffect(() => {
    const handleScroll = () => {
      setPosition(getPosition());
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return position;
};

export default useScroll;
