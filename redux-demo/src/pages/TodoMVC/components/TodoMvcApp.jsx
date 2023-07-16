import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted,
  setVisibilityFilter,
} from "../actions";
import { getVisibleTodos, getCompletedTodoCount } from "../selectors";
import * as filterTypes from "../constanants/TodoFilters";

const TodoMvcApp = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector(getVisibleTodos);
  const completedCount = useSelector(getCompletedTodoCount);
  const filter = useSelector((state) => state.visibilityFilter);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }

    dispatch(addTodo(text));
    setText("");
  };

  const handleChangeComplete = (id) => {
    dispatch(completeTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleChangeFilter = (filter) => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Add #{todos.length + 1}</button>
      <button onClick={() => dispatch(completeAll())}>Complete All</button>
      <button onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
      <p>Filter by: </p>
      <div>
        <select value={filter} onChange={(e) => handleChangeFilter(e.target.value)}>
          <option value={filterTypes.SHOW_ALL}>All</option>
          <option value={filterTypes.SHOW_ACTIVE}>Active</option>
          <option value={filterTypes.SHOW_COMPLETED}>Completed</option>
        </select>
      </div>
      <p>
        {completedCount} / {todos.length} completed
      </p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleChangeComplete(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoMvcApp;
