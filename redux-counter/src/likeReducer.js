const initialState = {
  likes: 0,
};

export const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LIKES":
      return {
        ...state,
        likes: state.likes + action.value,
      };
    default:
      return state;
  }
}
