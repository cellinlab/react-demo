import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import Spinner from "../common/Spinner";

import { useUser } from "./UserContext";
import getData from "../../utils/api";

export default function UserPicker() {
  const [user, setUser] = useUser();

  const {
    data: users = [],
    status,
    error,
  } = useQuery(["users"], () => getData("http://localhost:3001/users"));

  useEffect(() => {
    setUser(users[0]);
  }, [users, setUser]);

  function handleSelect(e) {
    const selectedId = parseInt(e.target.value, 10);
    const selectedUser = users.find((u) => u.id === selectedId);

    setUser(selectedUser);
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <select className="user-picker" onChange={handleSelect} value={user ? user.id : ""}>
      {users.map((u) => (
        <option key={u.id} value={u.id}>
          {u.name}
        </option>
      ))}
    </select>
  );
}
