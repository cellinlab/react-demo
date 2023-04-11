import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PeopleContainer from "./PeopleContainer";
import About from "./About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/people/*" element={<PeopleContainer />} />
        <Route path="/about/*" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
