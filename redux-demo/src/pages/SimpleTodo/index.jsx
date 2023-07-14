import { useState } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";

import store from "./store";
import { addTodo, removeTodo, toggleComplete } from "./todoSlice";

const TodoApp = () => {
  const [todo, setTodo] = useState("");

  const { todoList } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: Math.random().toString(36).substr(2, 9),
        content: todo,
        completed: false,
      })
    );
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleComplete(todo.id))}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.content}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SimpleTodo = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Simple Todo</h1>
        <TodoApp />
      </div>
    </Provider>
  );
};

export default SimpleTodo;
