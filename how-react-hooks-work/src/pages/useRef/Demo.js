import { useCallback, useEffect, useRef, useState } from "react";

/**
 * 1. 存储跨渲染的数据
 * 2. 存储 DOM 节点
 */
const Demo = () => {
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);

  const timer = useRef(null);
  const inputEl = useRef(null);

  useEffect(() => {
    console.log("timer.current", timer.current);
    console.log("count", count);
  });

  const handleStart = useCallback(() => {
    if (timer.current) {
      return;
    }
    timer.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 100);
  }, []);

  const handleStop = useCallback(() => {
    clearInterval(timer.current);
    timer.current = null;
  }, []);

  const handleFocus = () => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  };

  return (
    <div>
      <h1>useRef</h1>
      <p>Time: {time}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <input ref={inputEl} type="text" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default Demo;
