import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root, { loader as rootLoader } from "./Root";
import NewNote, { action as newNoteAction } from "./NewNote";
import Note, { loader as noteLoader, action as noteAction } from "./Note";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "new",
        element: <NewNote />,
        action: newNoteAction,
      },
      {
        path: "note/:noteId",
        element: <Note />,
        loader: noteLoader,
        action: noteAction,
        errorElement: <div>Not found</div>,
      },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
