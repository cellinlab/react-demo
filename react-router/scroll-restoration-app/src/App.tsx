import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import LongPage, { getArrayLoader } from "./LongPage";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <h2>Home</h2>,
      },
      {
        path: "restore-by-key",
        loader: getArrayLoader,
        element: <LongPage />,
      },
      {
        path: "restore-by-pathname",
        loader: getArrayLoader,
        element: <LongPage />,
        handle: { scrollMode: "pathname" },
      },
      {
        path: "link-to-hash",
        loader: getArrayLoader,
        element: <LongPage />,
      },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

const App = () => {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};

export default App;
