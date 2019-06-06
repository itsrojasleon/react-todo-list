import React from 'react';
import useFormInput from '../../hooks/useFormInput';

function TodoForm(props) {
  // props.createTodo is a function that receives
  // the new todo
  const { value, handleChange, handleSubmit } = useFormInput(
    '',
    props.createTodo,
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="new todo"
      />
    </form>
  );
}
export default TodoForm;
