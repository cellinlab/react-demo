import { useNavigate, useLocation } from "react-router-dom";

import useAuth from "./useAuth";

const Login = () => {
  const auth = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    auth.login("user", () => {
      console.log("Logged in");
      navigate(from, {
        replace: true,
      });
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};

export default Login;
