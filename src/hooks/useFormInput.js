import { useState } from 'react';

function useFormInput(initialValue, callback) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    callback(value);
    setValue('');
  }

  return {
    value,
    handleChange,
    handleSubmit,
  };
}
export default useFormInput;
