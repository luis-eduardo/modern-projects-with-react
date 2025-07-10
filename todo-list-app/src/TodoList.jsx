import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todosAreLoading = useSelector(
    (state) => !state.loading.value.completed
  );
  const todos = useSelector((state) => state.todos.value);

  const competedTodos = todos.filter((t) => t.isCompleted);
  const incompleteTodos = todos.filter((t) => !t.isCompleted);

  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      {todosAreLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>Completed:</h3>
          {competedTodos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} />
          ))}
          <h3>Incomplete:</h3>
          {incompleteTodos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default TodoList;
