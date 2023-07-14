import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload)
    },
    toggleComplete: (state, action) => {
      console.log(action.payload)
      state.todoList = state.todoList.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
        return todo
      })
    }
  }
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions

export default todoSlice.reducer;
