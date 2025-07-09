import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "./todosSlice";

const NewTodoForm = () => {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>

      <button
        onClick={() => {
          dispatch(createTodo(inputText));
          setInputText("");
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

export default NewTodoForm;
