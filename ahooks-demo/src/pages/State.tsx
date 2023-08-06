import { useState, useEffect } from "react";
import { useSafeState } from "ahooks";

const SafeStateDemo = () => {
  const [value, setValue] = useSafeState<string>();

  useEffect(() => {
    setTimeout(() => {
      console.log("setValue after 5s");
      setValue("hello");
    }, 5000);
  }, []);

  const text = value || "loading...";

  return <div>{text}</div>;
};

const State = () => {
  const [isSafeShow, setIsSafeShow] = useSafeState(true);

  return (
    <div>
      <h2>State</h2>
      <hr />
      <h3>useSafeState</h3>
      <div>
        <button onClick={() => setIsSafeShow((isSafeShow) => !isSafeShow)}>Toggle</button>
        {isSafeShow && <SafeStateDemo />}
      </div>
    </div>
  );
};

export default State;
