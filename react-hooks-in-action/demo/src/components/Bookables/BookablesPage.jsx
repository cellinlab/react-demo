import { Routes, Route } from "react-router-dom";

import BookablesView from "./BookablesView";
import BookableEdit from "./BookableEdit";
import BookableNew from "./BookableNew";

export default function BookablesPage() {
  return (
    <Routes>
      <Route path="/:id" element={<BookablesView />} />
      <Route path="/" element={<BookablesView />} />
      <Route path="/:id/edit" element={<BookableEdit />} />
      <Route path="/new" element={<BookableNew />} />
    </Routes>
  );
}
