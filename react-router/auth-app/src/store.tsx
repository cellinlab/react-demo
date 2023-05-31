import { createContext, useState } from "react";

interface AuthContextType {
  user: any;
  login: (user: string, cb: VoidFunction) => void;
  logout: (cb: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const login = (user: string, cb: VoidFunction) => {
    setUser(user);
    cb();
  };

  const logout = (cb: VoidFunction) => {
    setUser(null);
    cb();
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export default AuthContext;

export { AuthProvider };
