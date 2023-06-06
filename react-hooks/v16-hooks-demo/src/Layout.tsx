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
            <Link to="/">useState</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect</Link>
          </li>
          <li>
            <Link to="/useContext">useContext</Link>
          </li>
          <li>
            <Link to="/useReducer">useReducer</Link>
          </li>
          <li>
            <Link to="/useMemo">useMemo</Link>
          </li>
          <li>
            <Link to="/useCallback">useCallback</Link>
          </li>
          <li>
            <Link to="/useRef">useRef</Link>
          </li>
          <li>
            <Link to="/useImperativeHandle">useImperativeHandle</Link>
          </li>
          <li>
            <Link to="/useLayoutEffect">useLayoutEffect</Link>
          </li>
          <li>
            <Link to="/useDebugValue">useDebugValue</Link>
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
