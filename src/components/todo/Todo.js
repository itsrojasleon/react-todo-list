import React from 'react';
import useFormInput from '../../hooks/useFormInput';

function Todo(props) {
  const [isEditing, setIsEditing] = React.useState(false);

  const { value, handleChange, handleSubmit } = useFormInput(
    props.task,
    props.updateTask,
  );

  function handleRemove() {
    props.removeTodo(props.id);
  }
  function handleUpdate() {
    setIsEditing(!isEditing);
    props.updateTodo(props.id, value);
  }
  return (
    <React.Fragment>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={value} type="text" />
          <button onClick={handleUpdate}>Save</button>
        </form>
      ) : (
        <div>
          <button onClick={handleUpdate}>Edit</button>
          <button onClick={handleRemove}>X</button>
          <div>{props.task}</div>
        </div>
      )}
    </React.Fragment>
  );
}
export default Todo;
