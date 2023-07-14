import { useEffect, useState } from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

const { incremented, decremented } = counterSlice.actions;

const RtkExample = () => {
  const [count, setCount] = useState(store.getState().counter.value);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().counter.value);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>RTK Example</h1>
      <div>
        <span>Count: </span>
        <span>{count}</span>
        <button onClick={() => store.dispatch(decremented())}>-</button>
        <button onClick={() => store.dispatch(incremented())}>+</button>
      </div>
    </div>
  );
};

export default RtkExample;
