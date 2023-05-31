import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Login from "./Login";
import Public from "./Public";
import Protected from "./Protected";
import RequireAuth from "./RequireAuth";
import AuthStatus from "./AuthStatus";

import { AuthProvider } from "./store";

function App() {
  return (
    <>
      <AuthProvider>
        <p>Home</p>
        <AuthStatus />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Public />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <Protected />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
