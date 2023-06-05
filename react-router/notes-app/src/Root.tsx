import { useLoaderData, Link, Outlet } from "react-router-dom";

import type { Notes } from "./notes";
import { getNotes } from "./notes";

export async function loader() {
  return getNotes();
}
const Root = () => {
  const notes = useLoaderData() as Notes;

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ padding: "0 2rem", borderRight: "solid 1px #ccc" }}>
        <h1>Notes!</h1>
        <p>
          <Link to="new">Create Note</Link>
        </p>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <Link to={`/note/${note.id}`}>{note.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1, padding: "0 2rem" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
