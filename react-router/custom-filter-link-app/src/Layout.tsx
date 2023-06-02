import { Link, Outlet } from "react-router-dom";

import BrandLink from "./BrandLink";

import { brands } from "./snkrs";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          {brands.map((brand) => (
            <li key={brand}>
              <BrandLink brand={brand}>{brand}</BrandLink>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
