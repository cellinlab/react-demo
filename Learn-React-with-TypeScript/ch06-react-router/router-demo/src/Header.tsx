import { Link } from 'react-router-dom';
import logo from './logo.svg';
import React from 'react';

export function Header() {
  return (
    <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
      <img src={logo} alt="Logo" className="inline-block h-20" />
      <h1 className="text-2xl">React Tools</h1>
      <nav>
        <Link to="products" className="text-white no-underline p-1">
          Products
        </Link>
      </nav>
    </header>
  );
}
