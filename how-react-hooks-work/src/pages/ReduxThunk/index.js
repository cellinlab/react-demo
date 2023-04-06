import React, { useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';

import { fetchUsers } from './actions';
import store from './store';

const UserList = () => {
  const dispatch = useDispatch();
  const {
    users,
    error,
  } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>User List</h1>
      {error && <div>{error}</div>}
      {users && users.length > 0 &&
        users.map((user) => (
          <div key={user.id}>
            <span>{user.name}</span>
          </div>
        ))}
    </div>
  );
};

const Demo = () => {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
};

export default Demo;
