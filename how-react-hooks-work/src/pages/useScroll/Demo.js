import { useCallback } from "react";
import useScroll from "./useScroll"

const Demo = () => {
  const { y } = useScroll();

  const goTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <h1>useScroll</h1>
      <p>Scroll down to see the button</p>
      <p>Scroll position: {y}px</p>
      <button
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          display: y > 100 ? "block" : "none"
        }}
        onClick={goTop}>
        Go Top
      </button>
    </div>
  );
};

export default Demo;
