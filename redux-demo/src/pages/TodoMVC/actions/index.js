import * as actionTypes from '../constanants/ActionTypes';

export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  text
});

export const deleteTodo = id => ({
  type: actionTypes.DELETE_TODO,
  id
});

export const editTodo = (id, text) => ({
  type: actionTypes.EDIT_TODO,
  id,
  text
});

export const completeTodo = id => ({
  type: actionTypes.COMPLETE_TODO,
  id
});

export const completeAll = () => ({
  type: actionTypes.COMPLETE_ALL
});

export const clearCompleted = () => ({
  type: actionTypes.CLEAR_COMPLETED
});

export const setVisibilityFilter = filter => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  filter
});
