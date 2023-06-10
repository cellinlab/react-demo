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

import UseSelections from './pages/UseSelections';
import UseCountDownDemo from './pages/UseCountDownDemo';
import UseCssDemo from './pages/UseCssDemo';

import UseDebounceFnDemo from './pages/UseDebounceFnDemo';
import UseDebounceDemo from './pages/UseDebounceDemo';
import UseThrottleFnDemo from './pages/UseThrottleFnDemo';
import UseThrottleDemo from './pages/UseThrottleDemo';
import UseLockFnDemo from './pages/UseLockFnDemo';
import UseFullscreenDemo from './pages/UseFullscreenDemo';
import UseCopyDemo from './pages/UseCopyDemo';
import UseTextSelectionDemo from './pages/UseTextSelectionDemo';
import UseResponsiveDemo from './pages/UseResponsiveDemo';
import UseTrackedEffectDemo from './pages/UseTrackedEffectDemo';

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
        {/* -- custom business hooks */}
        <Route path="/useSelections" element={<UseSelections />} />
        <Route path="/useCountDown" element={<UseCountDownDemo />} />
        <Route path="/useCss" element={<UseCssDemo />} />
        {/* -- custom common hooks */}
        <Route path="/useDebounceFn" element={<UseDebounceFnDemo />} />
        <Route path="/useDebounce" element={<UseDebounceDemo />} />
        <Route path="/useThrottleFn" element={<UseThrottleFnDemo />} />
        <Route path="/useThrottle" element={<UseThrottleDemo />} />
        <Route path="/useLockFn" element={<UseLockFnDemo />} />
        <Route path="/useFullscreen" element={<UseFullscreenDemo />} />
        <Route path="/useCopy" element={<UseCopyDemo />} />
        <Route path="/useTextSelection" element={<UseTextSelectionDemo />} />
        <Route path="/useResponsive" element={<UseResponsiveDemo />} />
        <Route path="/useTrackedEffect" element={<UseTrackedEffectDemo />} />
      </Route>
    </Routes>
  );
};

export default App;
