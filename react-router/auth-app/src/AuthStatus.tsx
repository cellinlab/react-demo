import useAuth from "./useAuth";

const AuthStatus = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout(() => {
      console.log("Logged out");
    });
  };

  return (
    <div>
      <p>Auth Status: {auth.user ? `Hello, ${auth.user}` : "visitor"}</p>
      {auth.user && (
        <div>
          <button onClick={handleLogout}>LogOut</button>
        </div>
      )}
    </div>
  );
};

export default AuthStatus;
