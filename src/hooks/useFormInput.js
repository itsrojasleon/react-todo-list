import { useState } from 'react';

function useFormInput(callback) {
  const [value, setValue] = useState('');

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
