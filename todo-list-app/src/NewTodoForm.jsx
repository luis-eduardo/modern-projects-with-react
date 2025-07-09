import { useState } from "react";

const NewTodoForm = ({ onCreateClicked }) => {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>

      <button
        onClick={() => {
          onCreateClicked(inputText);
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

export default NewTodoForm;
