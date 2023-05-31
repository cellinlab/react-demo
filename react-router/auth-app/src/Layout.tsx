import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <p>Layout</p>
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
