import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";

import { updateContact } from "../contacts";

export async function action({ params, request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.id, updates);
  return redirect(`/contacts/${params.id}`);
}

export default function EditContact() {
  const contact = useLoaderData();
  console.log("EditContact: contact = ", contact);

  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input type="text" name="first" defaultValue={contact.first} placeholder="First" />
        <input type="text" name="last" defaultValue={contact.last} placeholder="Last" />
      </p>
      <label>
        <span>Twitter</span>
        <input type="text" placeholder="@username" name="twitter" defaultValue={contact.twitter} />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          type="text"
          placeholder="https://example.com/avatar.jpg"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" defaultValue={contact.notes} rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
