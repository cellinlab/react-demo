import { combineReducers } from "redux";

import { likeReducer } from "./likeReducer";
import { dislikeReducer } from "./dislikeReducer";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COUNT":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  counter: counterReducer,
  like: likeReducer,
  dislike: dislikeReducer,
});

export default reducer;
