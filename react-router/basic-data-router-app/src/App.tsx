import { createBrowserRouter, RouterProvider, useLoaderData } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { message: "Hello, World!" };
    },
    Component: () => {
      const data = useLoaderData() as { message: string };
      return (
        <div>
          <h1>Home</h1>
          <div>{data.message}</div>
        </div>
      );
    },
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
