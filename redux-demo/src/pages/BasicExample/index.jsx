import { useState, useEffect } from "react";
import { createStore } from "redux";

// Reducer
const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Actions
const increment = () => {
  return {
    type: "counter/incremented",
  };
};

const decrement = () => {
  return {
    type: "counter/decremented",
  };
};

// View
const BasicExample = () => {
  const [count, setCount] = useState(store.getState().value);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().value);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>Basic Example</h1>
      <div>
        <span>Count: </span>
        <span>{count}</span>
        <button onClick={() => store.dispatch(decrement())}>-</button>
        <button onClick={() => store.dispatch(increment())}>+</button>
      </div>
    </div>
  );
};

export default BasicExample;
