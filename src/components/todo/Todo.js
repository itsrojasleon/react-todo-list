import React from 'react';

function Todo(props) {
  return (
    <div>
      <button>Edit</button>
      <button>X</button>
      <div>{props.task}</div>
    </div>
  );
}
export default Todo;
