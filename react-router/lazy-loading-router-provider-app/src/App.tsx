import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import NoMatch from "./NoMatch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        // Single route in lazy file
        lazy: () => import("./About"),
      },
      {
        path: "dashboard",
        async lazy() {
          // Multiple routes in lazy file
          const { DashboardLayout } = await import("./Dashboard");
          return {
            Component: DashboardLayout,
          };
        },
        children: [
          {
            index: true,
            async lazy() {
              const { DashboardIndex } = await import("./Dashboard");
              return {
                Component: DashboardIndex,
              };
            },
          },
          {
            path: "messages",
            async lazy() {
              const { DashboardMessages, DashboardMessagesLoader } = await import("./Dashboard");
              return {
                Component: DashboardMessages,
                loader: DashboardMessagesLoader,
              };
            },
          },
        ],
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading ...</p>} />;
}

export default App;
