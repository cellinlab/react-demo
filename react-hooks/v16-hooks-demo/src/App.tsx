import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import UseStateDemo from "./UseStateDemo";
import UseEffectDemo from "./UseEffectDemo";
import UseContextDemo from "./UseContextDemo";
import UseReducerDemo from "./UseReducerDemo";
import UseMemoDemo from "./UseMemoDemo";
import UseCbDemo from "./UseCbDemo";
import UseRefDemo from "./UseRefDemo";
import UseImperativeHandleDemo from "./UseImperativeHandleDemo";
import UseLayoutEffectDemo from "./UseLayoutEffectDemo";
import UseDebugValueDemo from "./UseDebugValueDemo";

const App = () => {
  return (
    <div>
      <h1>V16 Hooks Demo</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<UseStateDemo />} />
          <Route path="/useEffect" element={<UseEffectDemo />} />
          <Route path="/useContext" element={<UseContextDemo />} />
          <Route path="/useReducer" element={<UseReducerDemo />} />
          <Route path="/useMemo" element={<UseMemoDemo />} />
          <Route path="/useCallback" element={<UseCbDemo />} />
          <Route path="/useRef" element={<UseRefDemo />} />
          <Route path="/useImperativeHandle" element={<UseImperativeHandleDemo />} />
          <Route path="/useLayoutEffect" element={<UseLayoutEffectDemo />} />
          <Route path="/useDebugValue" element={<UseDebugValueDemo />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
