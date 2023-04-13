import React, { useEffect, useState } from "react";

import Spinner from "../common/Spinner";
import getData from "../../utils/api";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = users[userIndex];

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getData("http://localhost:3001/users")
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  if (isLoading) {
    return (
      <p>
        <Spinner />
        Loading users...
      </p>
    );
  }

  return (
    <>
      <ul className="users items-list-nav">
        {users.map((u, i) => (
          <li key={u.id} className={i === userIndex ? "selected" : ""}>
            <button className="btn" onClick={() => setUserIndex(i)}>
              {u.name}
            </button>
          </li>
        ))}
      </ul>
      {user && (
        <div className="item user">
          <div className="item-header">
            <h2>{user.name}</h2>
          </div>
          <div className="user-details">
            <h3>{user.title}</h3>
            <p>{user.notes}</p>
          </div>
        </div>
      )}
    </>
  );
}
