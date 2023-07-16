import { SET_VISIBILITY_FILTER } from "../constanants/ActionTypes";
import { SHOW_ALL } from "../constanants/TodoFilters";

export default function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}