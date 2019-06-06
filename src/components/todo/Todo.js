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
  function handleToggle() {
    props.toggleCompleted(props.id);
  }
  return (
    <React.Fragment>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={value} type="text" />
          <button onClick={handleUpdate}>Save</button>
        </form>
      ) : (
        <ul>
          <button onClick={handleUpdate}>Edit</button>
          <button onClick={handleRemove}>X</button>
          <li
            onClick={handleToggle}
            className={props.completed ? 'completed' : ''}
          >
            {props.task}
          </li>
        </ul>
      )}
    </React.Fragment>
  );
}
export default Todo;
