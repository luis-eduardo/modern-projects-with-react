import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [
      {
        text: 'Go to the Store',
        isCompleted: false
      },
      {
        text: 'New Todo',
        isCompleted: false,
      }
    ],
  },
  reducers: {
    createTodo: (state, action) => {
      const text = action.payload;
      state.value = [...state.value, {
        text,
        isCompleted: false,
      }];
    },
    markTodoAsCompleted: (state, action) => {
      const text = action.payload;
      const todo = state.value.find(t => t.text === text);
      todo.isCompleted = true;
    },
    deleteTodo: (state, action) => {
      const text = action.payload;
      state.value = state.value.filter(t => t.text !== text);
    },
  }
});

export const { createTodo, markTodoAsCompleted, deleteTodo } = todosSlice.actions;
export default todosSlice;