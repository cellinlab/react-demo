import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Error Boundaries App</h1>
      <nav>
        <Link to="/projects/authorized">Authorized Project</Link>
        &nbsp;|&nbsp;
        <Link to="/projects/unauthorized">Unauthorized Project</Link>
        &nbsp;|&nbsp;
        <Link to="/projects/broken">Broken Project</Link>
      </nav>
      <br />
      <p>
        This example shows the flexibility of <code>&lt;Route errorElement&gt;</code>
      </p>
      <ul>
        <li>
          Clicking the "Authorized Project" link will take you to the happy path where we
          successfully load and render the details for a project.
        </li>
        <li>
          Clicking the "Unauthorized Project" link will simulate a case where the user does not have
          access to the given project, so our loader can throw a 401 response that is handed
          in-context by a <code>&lt;ProjectErrorBoundary&gt;</code>.
        </li>
        <li>
          Clicking the "Broken Project" link will return some malformed data causing a render error.
          This is beyond what <code>&lt;ProjectErrorBoundary&gt;</code> can handle, so it re-throws
          the error and it gets handled by <code>&lt;RootErrorBoundary&gt;</code> instead.
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
