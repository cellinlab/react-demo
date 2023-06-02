import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import Fallback from "./Fallback";
import RootErrorBoundary from "./RootErrorBoundary";
import Project from "./Project";
import { ProjectBoundary, projectLoader } from "./Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Outlet />,
        errorElement: <RootErrorBoundary />,
        children: [
          {
            path: "projects/:projectId",
            element: <Project />,
            errorElement: <ProjectBoundary />,
            loader: projectLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}

export default App;
