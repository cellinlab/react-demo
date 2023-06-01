import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">DashBoard</Link>
        <Link to="/nothing">Nothing</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
