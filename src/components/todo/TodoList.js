import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = React.useState([
    { task: 'hello' },
    { task: 'hey' },
  ]);

  function createTodo(newTodo) {
    setTodos([...todos, { task: newTodo }]);
  }
  return (
    <div>
      <TodoForm createTodo={createTodo} />
      {todos.map((t, i) => (
        <Todo key={i} task={t.task} />
      ))}
    </div>
  );
}
export default TodoList;
