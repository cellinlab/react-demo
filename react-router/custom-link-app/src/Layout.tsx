import { Outlet } from "react-router-dom";

import CustomLink from "./CustomLink";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="/nothing-here">Nothing Here</CustomLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
