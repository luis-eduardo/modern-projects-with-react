import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.value);

  const competedTodos = todos.filter((t) => t.isCompleted);
  const incompleteTodos = todos.filter((t) => !t.isComplete);

  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      <h3>Completed:</h3>
      {competedTodos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
      <h3>Incomplete:</h3>
      {incompleteTodos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoList;
