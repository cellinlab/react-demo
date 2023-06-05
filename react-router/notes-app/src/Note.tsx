import { useLoaderData, Form, redirect } from "react-router-dom";

import type { Note } from "./notes";
import { deleteNote, getNote } from "./notes";

export async function loader({ params }: any) {
  const note = await getNote(params.noteId);
  if (!note) {
    throw new Response("", { status: 404 });
  }
  return note;
}

export async function action({ params }: any) {
  await deleteNote(params.noteId);
  return redirect("/new");
}

const Note = () => {
  const note = useLoaderData() as Note;
  return (
    <div>
      <h2>{note.title}</h2>
      <div>{note.content}</div>
      <Form method="post" style={{ marginTop: "2rem" }}>
        <button type="submit">Delete</button>
      </Form>
    </div>
  );
};

export default Note;
