import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import NoMatch from "./NoMatch";

const About = lazy(() => import("./About"));
const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <>
      <h1>Lazy Loading App</h1>
      <p>
        This example demonstrates how to lazily load both route elements and even entire portions of
        your route hierarchy on demand. To get the full effect of this demo, be sure to open your
        Network tab and watch the new bundles load dynamically as you navigate around.
      </p>

      <p>
        The "About" page is not loaded until you click on the link. When you do, a{" "}
        <code>&lt;React.Suspense fallback&gt;</code> renders while the code is loaded via a dynamic{" "}
        <code>import()</code> statement. Once the code loads, the fallback is replaced by the actual
        code for that page.
      </p>

      <p>
        The "Dashboard" page does the same thing, but takes it even one step further by{" "}
        <em>dynamically defining additional routes</em> once the page loads! Since React Router lets
        you declare your routes as
        <code>&lt;Route&gt;</code> elements, you can easily define more routes by placing an
        additional <code>&lt;Routes&gt;</code> element anywhere further down the element tree. Just
        be sure the parent route ends with a <code>*</code> like{" "}
        <code>&lt;Route path="dashboard/*"&gt;</code> in this case.
      </p>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="dashboard/*"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
