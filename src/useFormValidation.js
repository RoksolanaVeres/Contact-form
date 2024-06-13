import { useState } from "react";

export function useFormValidation() {
  const [invalidFields, setInvalidFields] = useState({});

  function validateField(fieldName, value, validationFunction, errorMessage) {
    const isValid = validationFunction(value);
    setInvalidFields((currentErrors) => ({
      ...currentErrors,
      [fieldName]: isValid ? undefined : errorMessage,
    }));
  }

  const formIsValid = Object.values(invalidFields).length !== 0 &&  Object.values(invalidFields).every((error) => error === undefined);

  return { invalidFields, validateField, formIsValid };
}
