import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  json,
} from "react-router-dom";

import Layout from "./Layout";
import ImportantForm from "./ImportantForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<h2>Index</h2>} />
      <Route path="one" element={<h2>One</h2>} />
      <Route path="two" element={<h2>Two</h2>} />
      <Route
        path="three"
        action={() => json({ ok: true })}
        element={
          <>
            <h2>Three</h2>
            <ImportantForm />
          </>
        }
      />
      <Route path="four" element={<h2>Four</h2>} />
      <Route path="five" element={<h2>Five</h2>} />
    </Route>
  )
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
