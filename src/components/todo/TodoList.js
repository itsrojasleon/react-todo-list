import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function generateKey() {
  return Math.floor(Math.random() * (5192 + 1));
}

function TodoList() {
  const [todos, setTodos] = React.useState([]);

  function createTodo(newTodo) {
    setTodos([...todos, { task: newTodo, id: generateKey() }]);
  }
  function removeTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }
  return (
    <div>
      <TodoForm createTodo={createTodo} />
      {todos.map(t => (
        <Todo key={t.key} id={t.id} task={t.task} removeTodo={removeTodo} />
      ))}
    </div>
  );
}
export default TodoList;
