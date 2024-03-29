import { generateId } from '../../../heplers';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
} from '../constanants/ActionTypes';

const initialState = [
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: generateId(),
          text: action.text,
          completed: false,
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case EDIT_TODO:
      return state.map(todo => todo.id === action.id ? { ...todo, text: action.text } : todo);
    case COMPLETE_TODO:
      return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({ ...todo, completed: !areAllMarked }));
    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);
    default:
      return state;
  }
}