import { useState, useCallback } from "react";

const useForm = (initialValues = {}, validators) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const setFieldValue = useCallback(
    (field, value) => {
      setValues((prevValues) => ({
        ...prevValues,
        [field]: value,
      }));
      if (validators && validators[field]) {
        const error = validators[field](value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: error || null,
        }));
      }
    },
    [validators]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  return {
    values,
    errors,
    setFieldValue,
    reset,
  };
};

export default useForm;
