import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import NoMatch from "./NoMatch";

function App() {
  return (
    <>
      <h1>Custom Query Parsing App</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
