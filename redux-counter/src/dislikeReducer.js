const initialState = {
  dislikes: 0,
};

export const dislikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DISLIKES":
      return {
        ...state,
        dislikes: state.dislikes + action.value,
      };
    default:
      return state;
  }
}
