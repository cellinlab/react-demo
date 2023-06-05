import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const [historyIndex, setHistoryIndex] = useState(window.history.state?.idx);
  const location = useLocation();

  useEffect(() => {
    setHistoryIndex(window.history.state?.idx);
  }, [location]);

  useEffect(() => {
    document.title = location.pathname;
  }, [location]);

  return (
    <>
      <h1>Navigation Blocking Example</h1>
      <nav>
        <Link to="/">Index</Link>&nbsp;&nbsp;
        <Link to="/One">One</Link>&nbsp;&nbsp;
        <Link to="/Two">Two</Link>&nbsp;&nbsp;
        <Link to="/Three">Three(Form with blocker)</Link>&nbsp;&nbsp;
        <Link to="/Four">Four</Link>&nbsp;&nbsp;
        <Link to="/Five">Five</Link>&nbsp;&nbsp;
      </nav>
      <p>
        Current location (index): {location.pathname} ({historyIndex})
      </p>
      <Outlet />
    </>
  );
};

export default Layout;
