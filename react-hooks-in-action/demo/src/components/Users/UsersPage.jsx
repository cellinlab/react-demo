import { useContext, useState } from "react";

import UsersList from "./UserList";
import UserDetails from "./UserDetail";

import UserContext from "./UserContext";

export default function UsersPage() {
  const [user, setUser] = useState(null);

  const loggedInUser = useContext(UserContext);

  const currentUser = user || loggedInUser;

  return (
    <main className="users-page">
      <UsersList user={currentUser} setUser={setUser} />
      <UserDetails user={currentUser} />
    </main>
  );
}
