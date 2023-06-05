import React from "react";
import { createStore } from "redux";

const initialState = {
  count: 0,
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

// action
const increment = () => ({ type: "increment" });

const Child = (props: any) => {
  const { count } = props;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Child</h2>
      <p>Count: {count}</p>
    </div>
  );
};

const Parent = () => {
  const [state, setState] = React.useState(store.getState());

  React.useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleClick = () => {
    store.dispatch(increment());
  };

  return (
    <div>
      <h2>Parent</h2>
      <Child count={state.count} />
      <p>
        <strong>Count: {state.count}</strong>
      </p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

const ReduxDemo = () => {
  return (
    <div>
      <h2>ReduxDemo</h2>
      <Parent />
    </div>
  );
};

export default ReduxDemo;
