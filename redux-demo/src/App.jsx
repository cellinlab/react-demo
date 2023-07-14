import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import BasicExample from "./pages/BasicExample";
import RtkExample from "./pages/RtkExample";
import SimpleTodo from "./pages/SimpleTodo";

const App = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "200px",
          borderRight: "1px solid #ccc",
        }}
      >
        <ul>
          <li>
            <NavLink to="/basic-example">BasicExample</NavLink>
          </li>
          <li>
            <NavLink to="/rtk-example">RtkExample</NavLink>
          </li>
          <li>
            <NavLink to="/simple-todo">SimpleTodo</NavLink>
          </li>
        </ul>
      </div>
      <div
        style={{
          flex: 1,
          padding: "10px",
          overflow: "auto",
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/basic-example" />} />
          <Route path="/basic-example" element={<BasicExample />} />
          <Route path="/rtk-example" element={<RtkExample />} />
          <Route path="/simple-todo" element={<SimpleTodo />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
