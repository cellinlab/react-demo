import { useCallback, useState, useRef, useMemo } from "react";

import useForm from "./useForm";

const ControlledComponent = () => {
  const [value, setValue] = useState('');

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [],
  );

  return (
    <input
      value={value}
      onChange={handleChange}
    />
  );
};

const UnControlledComponent = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

const UseFormDemo = () => {
  const validators = useMemo(
    () => ({
      username: (value) => {
        if (!value) {
          return 'Username is required';
        }
        if (value.length < 3) {
          return 'Username must be at least 3 characters';
        }
        return null;
      },
    }),
    [],
  );

  const { values, errors, setFieldValue, reset } = useForm({}, validators);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(values);
    },
    [values],
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={values.username || ''}
        onChange={(e) => setFieldValue('username', e.target.value)}
      />
      {values.username && <div>{values.username}</div>}
      {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      <button type="submit">Submit</button>
      <button type="button" onClick={reset}>Reset</button>
    </form>
  );
};

const Demo = () => {
  return (
    <div>
      <h1>useForm</h1>
      <hr />
      <span>Controlled Component</span>
      <ControlledComponent />
      <hr />
      <span>UnControlled Component</span>
      <UnControlledComponent />
      <hr />
      <span>useForm</span>
      <UseFormDemo />
    </div>
  );
};

export default Demo;
