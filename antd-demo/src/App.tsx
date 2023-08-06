import { Link, Routes, Route, Navigate } from "react-router-dom";
import { Divider } from "antd";

import Universal from "./pages/Universal";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <div
        style={{
          width: 200,
          height: "100%",
          borderRight: "1px solid #f0f0f0",
        }}
      >
        <h2>Ant Design</h2>
        <ul>
          <li>
            <Link to="/universal">universal</Link>
          </li>
          <li>
            <Link to="/layout">layout</Link>
          </li>
        </ul>
      </div>
      <div
        style={{
          flex: 1,
          padding: 24,
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/universal" />} />
          <Route path="/universal" element={<Universal />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
