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
        <div className="Todo">
          <form className="TodoEditForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} value={value} type="text" />
            <button onClick={handleUpdate}>Save</button>
          </form>
        </div>
      ) : (
        <div className="Todo">
          <li
            onClick={handleToggle}
            className={props.completed ? 'TodoTask completed' : 'TodoTask'}
          >
            {props.task}
          </li>
          <div className="TodoButtons">
            <button onClick={handleUpdate}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={handleRemove}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default Todo;
