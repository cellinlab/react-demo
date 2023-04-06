export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

const fetchUsersRequest = () => {
  return {
    type: 'FETCH_USERS_REQUEST',
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: 'FETCH_USERS_FAILURE',
    payload: error,
  };
};
