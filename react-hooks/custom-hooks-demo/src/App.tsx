import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import UseLatestDemo from "./pages/UseLatestDemo";
import UseMountDemo from "./pages/UseMountDemo";
import UseUnmountedRefDemo from "./pages/UseUnmountedRefDemo";
import UseSafeStateDemo from "./pages/UseSafeStateDemo";
import UseUpdateDemo from './pages/UseUpdateDemo';
import UseCreationDemo from './pages/UseCreationDemo';
import UseReactiveDemo from './pages/UseReactiveDemo';

import UseHoverDemo from './pages/UseHoverDemo';
import UseDocumentVisibilityDemo from './pages/UseDocumentVisibilityDemo';
import UseInViewportDemo from './pages/UseInViewportDemo';
import UseNetworkDemo from './pages/UseNetworkDemo';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*  -- custom reactive useState -- */}
        <Route path="/" element={<UseLatestDemo />} />
        <Route path="/useMount" element={<UseMountDemo />} />
        <Route path="/useUnmountedRef" element={<UseUnmountedRefDemo />} />
        <Route path="/useSafeState" element={<UseSafeStateDemo />} />
        <Route path="/useUpdate" element={<UseUpdateDemo />} />
        <Route path="/useCreation" element={<UseCreationDemo />} />
        <Route path="/useReactive" element={<UseReactiveDemo />} />
        {/* -- custom DOM hooks */}
        <Route path="/useHover" element={<UseHoverDemo />} />
        <Route path="/useDocumentVisibility" element={<UseDocumentVisibilityDemo />} />
        <Route path="/useInViewport" element={<UseInViewportDemo />} />
        <Route path="/useNetwork" element={<UseNetworkDemo />} />
      </Route>
    </Routes>
  );
};

export default App;
