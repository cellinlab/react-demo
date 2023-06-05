import * as React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import IndexApp from "./App";

ReactDom.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* "Mount" this app under the /inbox URL pathname. All routes and links
        are relative to this name. */}
    <BrowserRouter basename="/inbox">
      <IndexApp />
    </BrowserRouter>
  </React.StrictMode>
);
