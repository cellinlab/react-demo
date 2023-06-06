import { useDebugValue, useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  useDebugValue(width > 1000 ? "large" : "small");

  return width;
};

const UseDebugValueDemo = () => {
  const width = useWindowWidth();

  return (
    <div>
      <h2>UseDebugValueDemo</h2>
      <div>width: {width}</div>
    </div>
  );
};

export default UseDebugValueDemo;
