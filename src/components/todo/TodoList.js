import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function generateKey() {
  return Math.floor(Math.random() * (5192 + 1));
}

function TodoList() {
  const [todos, setTodos] = React.useState([]);

  function createTodo(newTodo) {
    setTodos([...todos, { task: newTodo, key: generateKey() }]);
  }
  return (
    <div>
      <TodoForm createTodo={createTodo} />
      {todos.map(t => (
        <Todo key={t.key} task={t.task} />
      ))}
    </div>
  );
}
export default TodoList;
