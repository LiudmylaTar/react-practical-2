import TodoListItem from '../TodoListItem/TodoListItem';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const TodoList = ({ startTodos, onDeleted, onEdit }) => {
  return (
    <Grid>
      {startTodos.map((startTodo, index) => (
        <GridItem key={startTodo.id}>
          <TodoListItem
            initialData={startTodo}
            onDeleted={onDeleted}
            index={index}
            onEdit={onEdit}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
