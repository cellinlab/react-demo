import { FieldError, useForm } from 'react-hook-form';

import { ValidationError } from './ValidationError';

import { NewPostData } from './type';

type Props = {
  onSave: (newPost: NewPostData) => void;
};

export function NewPostForm({ onSave }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<NewPostData>();

  const fieldStyle = 'flex flex-col mb-2';
  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? `border-red-500` : '';
  }

  return (
    <form noValidate className="border-b py-4" onSubmit={handleSubmit(onSave)}>
      <div className={fieldStyle}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          {...register('title', {
            required: 'Title is required',
          })}
          className={getEditorStyle(errors.title)}
        />
        <ValidationError fieldError={errors.title} />
      </div>
      <div className={fieldStyle}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          {...register('description', {
            required: 'Description is required',
          })}
          className={getEditorStyle(errors.description)}
        />
        <ValidationError fieldError={errors.description} />
      </div>
      <div className={fieldStyle}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 h-10 px-6 font-semibold bg-black text-white"
        >
          Save
        </button>
        {
          // Show a success message after the form is submitted
          isSubmitSuccessful && (
            <div role="alert" className="text-green-500 text-xs mt-1">
              Post saved successfully
            </div>
          )
        }
      </div>
    </form>
  );
}
