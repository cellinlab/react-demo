import { useId } from "react";

const UseIdDemo = () => {
  const id = useId();
  const id2 = useId();
  return (
    <div>
      <h2>UseIdDemo</h2>
      <div id={id}>id: {id}</div>
      <div id={id2}>id2: {id2}</div>
    </div>
  );
};

export default UseIdDemo;
