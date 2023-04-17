import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export default UserContext;

export const UserSetContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <UserSetContext.Provider value={setUser}>{children}</UserSetContext.Provider>
    </UserContext.Provider>
  );
}

export function useUser() {
  const user = useContext(UserContext);
  const setUser = useContext(UserSetContext);

  if (!setUser) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return [user, setUser];
}
