import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} count={index + 1} key={todo.id} />
      ))}
    </Grid>
  );
};
