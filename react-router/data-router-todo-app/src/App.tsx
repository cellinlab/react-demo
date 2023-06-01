import { RouterProvider } from "react-router-dom";

import router from "./router";

import Fallback from "./Fallback";

function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}

export default App;
