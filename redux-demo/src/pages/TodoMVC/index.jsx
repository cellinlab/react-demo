import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import TodoMvcApp from "./components/TodoMvcApp";
import todosReducer from "./reducers";

const store = configureStore({
  reducer: todosReducer,
});

const TodoMVC = () => {
  return (
    <div>
      <h1>TodoMVC</h1>
      <hr />
      <Provider store={store}>
        <TodoMvcApp />
      </Provider>
    </div>
  );
};

export default TodoMVC;
