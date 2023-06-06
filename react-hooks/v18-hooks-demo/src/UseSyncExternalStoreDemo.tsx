import { useSyncExternalStore } from "react";
import { combineReducers, createStore } from "redux";

const reducer = (state: number = 1, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count: reducer,
});

const store = createStore(rootReducer, {
  count: 1,
});

const UseSyncExternalStoreDemo = () => {
  const state = useSyncExternalStore(store.subscribe, () => store.getState().count) as any;
  return (
    <div>
      <h1>UseSyncExternalStoreDemo</h1>
      <div>Count: {state}</div>
      <button onClick={() => store.dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => store.dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default UseSyncExternalStoreDemo;
