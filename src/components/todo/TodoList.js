import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function generateKey() {
  return Math.floor(Math.random() * (5192 + 1));
}

function mapping(todos, id, newValue) {
  return todos.map(t => {
    if (t.id === id) {
      if (newValue) {
        return { ...t, task: newValue };
      } else {
        return { ...t, completed: !t.completed };
      }
    } else {
      return t;
    }
  });
}

function TodoList() {
  const [todos, setTodos] = React.useState([]);

  function createTodo(newTodo) {
    setTodos([
      ...todos,
      { task: newTodo, id: generateKey(), completed: false },
    ]);
  }
  function removeTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }
  function updateTodo(id, newTodo) {
    setTodos(mapping(todos, id, newTodo));
  }

  function toggleCompleted(id) {
    setTodos(mapping(todos, id));
  }
  return (
    <div className="TodoList">
      <h1>
        Todo List! <span>A simple React Todo List</span>
      </h1>
      <TodoForm createTodo={createTodo} />
      <ul>
        {todos.map(t => (
          <Todo
            key={t.key}
            id={t.id}
            task={t.task}
            completed={t.completed}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
