import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";

import store from "./store";

const DemoInner = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>React Redux</h1>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      </div>
    </div>
  );
};

const Demo = () => {
  return (
    <Provider store={store}>
      <DemoInner />
    </Provider>
  );
};

export default Demo;
