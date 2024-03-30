import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  function addTodos(text) {
    setTodos(prevTodos => [...prevTodos, { id: nanoid(), text }]);
  }
  console.log(todos);
  // return <Text textAlign="center">There are no any todos ...</Text>;
  return (
    <>
      <Form onSubmit={addTodos} />
      <TodoList todos={todos} />
    </>
  );
};
