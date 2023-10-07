import { Route, Routes, Link } from 'react-router-dom'

import PerfModal from "./pages/PerfModal"
import DragMoalPage from "./pages/DragMoalPage"

import './App.css'

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "20%",
          borderRight: "1px solid #ccc",
          padding: "20px",
        }}
      >
        <h2>
          Antd v4 Demo
        </h2>
        <ul>
          <li>
            <Link to="/perfmodal">PerfModal</Link>
          </li>
          <li>
            <Link to="/dragmodal">DragMoal</Link>
          </li>
        </ul>
      </div>
      <div
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/perfmodal" element={<PerfModal />} />
          <Route path="/dragmodal" element={<DragMoalPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
