import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import UseLatestDemo from "./pages/UseLatestDemo";
import UseMountDemo from "./pages/UseMountDemo";
import UseUnmountedRefDemo from "./pages/UseUnmountedRefDemo";
import UseSafeStateDemo from "./pages/UseSafeStateDemo";
import UseUpdateDemo from './pages/UseUpdateDemo';
import UseCreationDemo from './pages/UseCreationDemo';
import UseReactiveDemo from './pages/UseReactiveDemo';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<UseLatestDemo />} />
        <Route path="/useMount" element={<UseMountDemo />} />
        <Route path="/useUnmountedRef" element={<UseUnmountedRefDemo />} />
        <Route path="/useSafeState" element={<UseSafeStateDemo />} />
        <Route path="/useUpdate" element={<UseUpdateDemo />} />
        <Route path="/useCreation" element={<UseCreationDemo />} />
        <Route path="/useReactive" element={<UseReactiveDemo />} />
      </Route>
    </Routes>
  );
};

export default App;
