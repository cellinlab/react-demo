import { useState } from "react";

import { useMount, useUnmount } from "../hooks";

const Child = () => {
  useMount(() => {
    console.log("child mount");
  });

  useUnmount(() => {
    console.log("child unmount");
  });
  return <div>Child</div>;
};

const UseMountDemo = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>UseMountDemo</h2>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Child />}
    </div>
  );
};

export default UseMountDemo;
