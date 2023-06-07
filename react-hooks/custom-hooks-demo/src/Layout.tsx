import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: "25%",
          background: "#f0f0f0",
        }}
      >
        <h1>自定义 Hooks</h1>
        <hr />
        <h2>响应式的 useState</h2>
        <ul>
          <li>
            <Link to="/">useLatest</Link>
          </li>
          <li>
            <Link to="/useMount">useMount 和 useUnmount</Link>
          </li>
          <li>
            <Link to="/useUnmountedRef">useUnmountedRef</Link>
          </li>
          <li>
            <Link to="/useSafeState">useSafeState</Link>
          </li>
          <li>
            <Link to="/useUpdate">useUpdate</Link>
          </li>
          <li>
            <Link to="/useCreation">useCreation</Link>
          </li>
          <li>
            <Link to="/useReactive">useReactive</Link>
          </li>
        </ul>
        <hr />
      </div>
      <div
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
