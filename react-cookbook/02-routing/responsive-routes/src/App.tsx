import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import PeopleContainer from "./PeopleContainer";
import About from "./About";
import Important from "./Import";

function App() {
  return (
    <Router>
      <div>
        <NavLink to="/people">People</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/import">Import</NavLink>
      </div>
      <Routes>
        <Route path="/people/*" element={<PeopleContainer />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/import" element={<Important />} />
      </Routes>
    </Router>
  );
}

export default App;
