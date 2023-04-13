import React, { useEffect, useState } from "react";

import Spinner from "../common/Spinner";

export default function UserPicker() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const resp = await fetch("http://localhost:3001/users");
      const data = await resp.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  if (users.length === 0) {
    return <Spinner />;
  }

  return (
    <select>
      {users.map((u) => (
        <option key={u.id} value={u.id}>
          {u.name}
        </option>
      ))}
    </select>
  );
}
