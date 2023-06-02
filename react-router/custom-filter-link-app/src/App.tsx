import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import SneakerGrid from "./SneakerGrid";
import Sneakerview from "./Sneakerview";
import NoMatch from "./NoMatch";

function App() {
  return (
    <>
      <h1>Custom Filter Link App</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SneakerGrid />} />
          <Route path="/sneakers/:id" element={<Sneakerview />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
