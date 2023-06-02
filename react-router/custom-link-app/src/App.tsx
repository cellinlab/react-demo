import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";

function App() {
  return (
    <>
      <h1>Custom Link App</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
