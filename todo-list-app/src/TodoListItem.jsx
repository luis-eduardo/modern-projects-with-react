import { useDispatch } from "react-redux";
import { markTodoAsCompleted, deleteTodo } from "./thunks";

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted ? (
        <button onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete Item
        </button>
      ) : (
        <button onClick={() => dispatch(markTodoAsCompleted(todo.id))}>
          Complete Item
        </button>
      )}
    </div>
  );
};

export default TodoListItem;
