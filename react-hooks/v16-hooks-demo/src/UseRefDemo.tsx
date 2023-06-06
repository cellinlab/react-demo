import { useRef, useState } from "react";

const UseRefDemo = () => {
  const scrollRef = useRef<any>(null);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);

  const onScroll = () => {
    if (scrollRef?.current) {
      setClientHeight(scrollRef.current.clientHeight);
      setScrollHeight(scrollRef.current.scrollHeight);
      setScrollTop(scrollRef.current.scrollTop);
    }
  };
  return (
    <div>
      <h2>UseRefDemo</h2>
      <div>
        <span>clientHeight: {clientHeight}</span>
        <br />
        <span>scrollHeight: {scrollHeight}</span>
        <br />
        <span>scrollTop: {scrollTop}</span>
      </div>
      <div
        ref={scrollRef}
        style={{
          height: "200px",
          width: "300px",
          overflow: "auto",
          border: "1px solid black",
        }}
        onScroll={onScroll}
      >
        <div style={{ height: "1500px", width: "100%" }}></div>
      </div>
    </div>
  );
};

export default UseRefDemo;
