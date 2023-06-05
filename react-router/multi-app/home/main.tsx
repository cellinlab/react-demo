import * as React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import HomeApp from "./App";

ReactDom.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HomeApp />
    </BrowserRouter>
  </React.StrictMode>
);
