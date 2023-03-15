import { useNavigate } from 'react-router-dom';
import { useForm, FieldError } from 'react-hook-form';

import { ValidationError } from './ValidationError';

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });
  const navigate = useNavigate();
  const fieldStyle = 'flex flex-col mb-2';
  function onSubmit(contact: Contact) {
    console.log(contact);
    navigate(`/thank-you/${contact.name}`);
  }
  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? 'border-red-500' : '';
  }

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">If you enter you details we will get back to you as soon as possible.</p>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: 'Please enter your name',
            })}
            className={getEditorStyle(errors.name)}
          />
          <ValidationError fieldError={errors.reason} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            required
            pattern="\S+@\S+\.\S+"
            {...register('email', {
              required: 'Please enter your email',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email',
              },
            })}
            className={getEditorStyle(errors.email)}
          />
          <ValidationError fieldError={errors.email} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason for contact</label>
          <select
            id="reason"
            required
            {...register('reason', {
              required: 'Please select a reason',
            })}
            className={getEditorStyle(errors.reason)}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          <ValidationError fieldError={errors.reason} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Notes</label>
          <textarea id="notes" cols={30} rows={2} {...register('notes')}></textarea>
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
