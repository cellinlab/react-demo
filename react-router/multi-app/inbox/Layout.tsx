import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Welcome to the Inbox app!</h1>
      <nav>
        <ul>
          <li>
            {/* Using a normal link here will cause the browser to reload the
                document when following this link, which is exactly what we want
                when navigating to the "Home" app so we execute its entry
                point (see home/main.jsx). */}
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <Link to="/">Inbox</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default Layout;
