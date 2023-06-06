import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import UseSyncExternalStoreDemo from "./UseSyncExternalStoreDemo";
import UseTransitionDemo from "./UseTransitionDemo";
import UseDeferredValueDemo from "./UseDeferredValueDemo";
import UseInsertionEffectDemo from "./UseInsertionEffectDemo";
import UseIdDemo from "./UseIdDemo";

const App = () => {
  return (
    <div>
      <h1>V18 Hooks Demo</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<UseSyncExternalStoreDemo />} />
          <Route path="/useTransition" element={<UseTransitionDemo />} />
          <Route path="/useDeferredValue" element={<UseDeferredValueDemo />} />
          <Route path="/useInsertionEffect" element={<UseInsertionEffectDemo />} />
          <Route path="/useId" element={<UseIdDemo />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
