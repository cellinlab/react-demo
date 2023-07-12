import React from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

import Quick from "./pages/Quick";

function App() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          borderRight: "1px solid #ccc",
          padding: "1rem",
        }}
      >
        <h1>Reqct Query Demo</h1>
        <ul>
          <li>
            <button onClick={() => navigate("/quick")}>Quick Example</button>
          </li>
        </ul>
      </div>
      <div
        style={{
          marginLeft: "1rem",
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/quick" />} />
          <Route path="/quick" element={<Quick />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
