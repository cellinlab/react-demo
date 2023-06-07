import { useState } from "react";

import { useMount, useUnmount, useUnmountedRef } from "../hooks";

const Child = () => {
  const unmountedRef = useUnmountedRef();

  useMount(() => {
    console.log("child mount, unmountedRef is", unmountedRef);
  });

  useUnmount(() => {
    console.log("child unmount, unmountedRef is", unmountedRef);
  });

  return <div>Child</div>;
};

const UseUnmountedRefDemo = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>UseUnmountedRefDemo</h2>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Child />}
    </div>
  );
};

export default UseUnmountedRefDemo;
