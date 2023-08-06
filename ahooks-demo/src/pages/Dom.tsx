import { useRef } from "react";

import { useSize, useScroll } from "ahooks";

const SizeDemo = () => {
  const dom = document.querySelector("body");
  const size = useSize(dom);

  return (
    <div>
      <div>
        Size: {size.width}px / {size.height}px
      </div>
      <div>Try to resize the preview window</div>
    </div>
  );
};

const ScrollDemo = () => {
  const ref = useRef(null);
  const scroll = useScroll(ref);

  return (
    <>
      <div>
        <div>
          Scroll position (custom ref): {scroll.left}px / {scroll.top}px
        </div>
        <div
          ref={ref}
          style={{
            height: 100,
            width: 200,
            border: "1px solid #eee",
            overflow: "auto",
          }}
        >
          <div style={{ height: 200, width: 2000 }}>Try to scroll me</div>
        </div>
      </div>
    </>
  );
};

const Dom = () => {
  return (
    <div>
      <h2>Dom</h2>
      <hr />
      <h3>useSize</h3>
      <SizeDemo />
      <hr />
      <h3>useScroll</h3>
      <ScrollDemo />
    </div>
  );
};

export default Dom;
