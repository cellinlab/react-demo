import { combineReducers } from 'redux';

const initialState = {
  users: [],
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        users: action.payload,
        error: null,
      };
    case 'FETCH_USERS_FAILURE':
      return {
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
