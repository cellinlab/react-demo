import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-wrapper">
        <div className="header-nav">
          <Link to="/">Home</Link>
        </div>
        <div className="header-nav">
          <Link to="/counter">Counter</Link>
        </div>
        <div className="header-nav">
          <Link to="/user-list">User List</Link>
        </div>
        <div className="header-nav">
          <Link to="/window-size">Window Size</Link>
        </div>
        <div className="header-nav">
          <Link to="/use-callback">Use Callback</Link>
        </div>
        <div className="header-nav">
          <Link to="/use-memo">Use Memo</Link>
        </div>
        <div className="header-nav">
          <Link to="/use-ref">Use Ref</Link>
        </div>
        <div className="header-nav">
          <Link to="/use-context">Use Context</Link>
        </div>
        <div className="header-nav">
          <Link to="/use-singleton">Use Singleton</Link>
        </div>
        <div className="header-nav">
          <Link to="/use-counter">Use Counter</Link>
        </div>
        <div className="header-nav">
          <Link to="/use-async">Use Async</Link>
        </div>
        <div className="header-nav">
          <Link to="/use-scroll">Use Scroll</Link>
        </div>
        <div className="header-nav">
          <Link to="/article-list">Article List</Link>
        </div>
        <div className="header-nav">
          <Link to="/hello-redux">Hello Redux</Link>
        </div>
        <div className="header-nav">
          <Link to="/react-redux">React Redux</Link>
        </div>
        <div className="header-nav">
          <Link to="/redux-thunk">Redux Thunk</Link>
        </div>
      </div>
      <hr />
      <div className="header-wrapper">
        <div className="header-nav">
          <Link to="/minimize-state">Minimize State</Link>
        </div>
        <div className="header-nav">
          <Link to="/controlled-component">Controlled Component</Link>
        </div>
        <div className="header-nav">
          <Link to="/api-client">API Client</Link>
        </div>
        <div className="header-nav">
          <Link to="/render-props">Render Props</Link>
        </div>
        <div className="header-nav">
          <Link to="/list-with-more">List With More</Link>
        </div>
        <div className="header-nav">
          <Link to="/custom-event">Custom Event</Link>
        </div>
        <div className="header-nav">
          <Link to="/use-key-press">Use Key Press</Link>
        </div>
        <div className="header-nav">
          <Link to="/use-form">Use Form</Link>
        </div>
        <div className="header-nav">
          <Link to="/use-modal">Use Modal</Link>
        </div>
        <div className="header-nav">
          <Link to="/toy-router">Toy Router</Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
