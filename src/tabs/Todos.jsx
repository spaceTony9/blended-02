import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  });

  function addTodos(text) {
    setTodos(prevTodos => [...prevTodos, { id: nanoid(), text }]);
  }

  function deletedTodo(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  console.log(todos);
  // return <Text textAlign="center">There are no any todos ...</Text>;
  return (
    <>
      <Form onSubmit={addTodos} />
      {todos.length ? (
        <TodoList todos={todos} deletedTodo={deletedTodo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
