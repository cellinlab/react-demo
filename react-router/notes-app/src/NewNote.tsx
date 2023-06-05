import { Form, redirect } from "react-router-dom";

import type { Note } from "./notes";
import { createNote } from "./notes";

const NewNote = () => {
  return (
    <Form method="post">
      <p>
        <label>
          Title
          <br />
          <input type="text" name="title" />
        </label>
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <br />
        <textarea name="content" rows={10} cols={30} id="content" />
      </p>
      <p>
        <button type="submit">Save</button>
      </p>
    </Form>
  );
};

export async function action({ request }: any) {
  const formData = await request.formData();
  const note = (await createNote({
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  })) as Note;

  return redirect(`/note/${note.id}`);
}

export default NewNote;
