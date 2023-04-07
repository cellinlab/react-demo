import { createStore } from 'redux';

const modalReducer = (state = { hiding: {} }, action) => {
  switch (action.type) {
    case 'SHOW_MODAL': {
      const { modalId, args } = action.payload;
      return {
        ...state,
        [modalId]: {
          ...args,
        } || true,
        hiding: {
          ...state.hiding,
          [modalId]: false,
        },
      };
    }
    case 'HIDE_MODAL': {
      const { modalId, force } = action.payload;
      return force ? {
        ...state,
        [modalId]: false,
        hiding: {
          [modalId]: false,
        },
      } : {
        ...state,
        hiding: {
          [modalId]: true,
        },
      };
    }
    default:
      return state;
  }
};

const store = createStore(modalReducer);

export default store;
