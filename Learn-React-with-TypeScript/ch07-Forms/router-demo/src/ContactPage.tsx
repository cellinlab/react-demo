import { useState, FormEvent } from 'react';

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export default function ContactPage() {
  const [contact, setContact] = useState<Contact>({
    name: '',
    email: '',
    reason: '',
    notes: '',
  });
  const fieldStyle = 'flex flex-col mb-2';
  function handleSumit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(contact);
  }
  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">If you enter you details we will get back to you as soon as possible.</p>
      <form action="" onSubmit={handleSumit}>
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason for contact</label>
          <select
            id="reason"
            value={contact.reason}
            onChange={(e) => setContact({ ...contact, reason: e.target.value })}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            cols={30}
            rows={10}
            value={contact.notes}
            onChange={(e) => setContact({ ...contact, notes: e.target.value })}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="mt-2 h-10 px-6 font-semibold bg-black text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
