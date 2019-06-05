import React from 'react';

function Todo(props) {
  function handleRemove() {
    props.removeTodo(props.id);
  }
  return (
    <div>
      <button>Edit</button>
      <button onClick={handleRemove}>X</button>
      <div>{props.task}</div>
    </div>
  );
}
export default Todo;
