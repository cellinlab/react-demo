import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Welcome to the Home app!</h1>
      <p>
        This example demonstrates how you can stitch two React Router apps together using the{" "}
        <code>`basename`</code> prop on <code>`BrowserRouter`</code> and <code>`StaticRouter`</code>
        .
      </p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* Use a normal <a> when linking to the "Inbox" app so the browser
                does a full document reload, which is what we want when exiting
                this app and entering another so we execute its entry point in
                inbox/main.jsx. */}
            <a href="/inbox">Inbox</a>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
