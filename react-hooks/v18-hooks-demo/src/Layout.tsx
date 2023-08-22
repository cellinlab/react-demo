import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
      }}
    >
      <nav
        style={{
          width: "200px",
          height: "100%",
          backgroundColor: "#ccc",
          padding: "10px",
        }}
      >
        <ul>
          <li>
            <Link to="/">useSyncExternalStore</Link>
          </li>
          <li>
            <Link to="/useTransition">useTransition</Link>
          </li>
          <li>
            <Link to="/useDeferredValue">useDeferredValue</Link>
          </li>
          <li>
            <Link to="/useInsertionEffect">useInsertionEffect</Link>
          </li>
          <li>
            <Link to="/useId">useId</Link>
          </li>
          <li>
            <Link to="/useStateArr">useStateArr</Link>
          </li>
        </ul>
      </nav>
      <main
        style={{
          flex: 1,
          padding: "10px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
