import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

export function Header() {
  return (
    <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
      <img src={logo} alt="Logo" className="inline-block h-20" />
      <h1 className="text-2xl">React Tools</h1>
      <nav>
        <NavLink
          to="products"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Products
        </NavLink>
      </nav>
    </header>
  );
}
