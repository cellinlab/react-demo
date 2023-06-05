import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import PropsCbDemo from "./PropsCbDemo";
import ContextDemo from "./ContextDemo";
import EventBusDemo from "./EventBusDemo";
import RefDemo from "./RefDemo";
import ReduxDemo from "./ReduxDemo";

const App = () => {
  return (
    <div>
      <h1>React Component Communicatioin</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PropsCbDemo />} />
          <Route path="/context" element={<ContextDemo />} />
          <Route path="/event-bus" element={<EventBusDemo />} />
          <Route path="/ref" element={<RefDemo />} />
          <Route path="/redux" element={<ReduxDemo />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
