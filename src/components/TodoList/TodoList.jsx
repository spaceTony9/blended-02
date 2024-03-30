import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos, deletedTodo }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          count={index + 1}
          key={todo.id}
          deletedTodo={deletedTodo}
        />
      ))}
    </Grid>
  );
};
