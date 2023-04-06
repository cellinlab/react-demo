import React, { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? 'Loading' : 'Fetch Users'}
      </button>
      {
        error && <p style={{ color: 'red' }}>{error.message}</p>
      }
      <ul>
        {
          users.map(user => (
            <li key={user.id}>
              {user.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default UserList;
