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
    <form className="TodoForm" onSubmit={handleSubmit}>
      <label>New todo</label>
      <input value={value} onChange={handleChange} type="text" placeholder="" />
      <button>Add</button>
    </form>
  );
}
export default TodoForm;
