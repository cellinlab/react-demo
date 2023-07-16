import { createSelector } from "@reduxjs/toolkit";

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../constanants/TodoFilters";

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos;

      case SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);

      case SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);

      default:
        throw new Error("Unknown filter: " + visibilityFilter);
    }
  }
);

export const getCompletedTodoCount = createSelector(
  [getTodos],
  todos => todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)
);
