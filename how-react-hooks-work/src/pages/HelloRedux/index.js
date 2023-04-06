import { createStore } from 'redux';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
  console.log('state changed');
});

const Demo = () => {
  const { count } = store.getState();
  return (
    <div>
      <h1>Redux</h1>
      <p>Count: {count}</p>
      <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export default Demo;
