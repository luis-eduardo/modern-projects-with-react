import axios from 'axios';
import { 
  loadingStarted,
  loadingCompleted,
  loadingFailed 
} from './loadingSlice';
import { todosUpdated } from './todosSlice';

export const loadTodos = () => async (dispatch) => {
  dispatch(loadingStarted());
  try {
    const response = await axios.get('/api/todos');
    const todos = response.data;
    console.log(todos);
    dispatch(loadingCompleted(todos));  
  } catch (err) {
    dispatch(loadingFailed(err));
  }
}

export const createTodo = (newTodoText) => async (dispatch, getState) => {
  try {
    const response = await axios.post('/api/todos', {
      text: newTodoText
    });
    const newTodo = response.data;
    const updatedTodos = getState().todos.value.concat(newTodo);
    dispatch(todosUpdated(updatedTodos));
  } catch (err) {
    console.log(err);
  }
}

export const deleteTodo = (todoId) => async (dispatch, getState) => {
  try {
    await axios.delete(`/api/todos/${todoId}`);
    const updatedTodos = getState().todos.value.filter(t => t.id !== todoId);
    dispatch(todosUpdated(updatedTodos));
  } catch (err) {
    console.log(err);
  }
}

export const markTodoAsCompleted = (todoId) => async (dispatch, getState) => {
  try {    
    const response = await axios.put(`/api/todos/${todoId}`, {
      isCompleted: true
    });
    const completedTodo = response.data;
    const updatedTodos = getState().todos.value.map(todo => (
      todo.id === completedTodo.id
        ? completedTodo
        : todo
    ));
    dispatch(todosUpdated(updatedTodos));
  } catch (err) {
    console.log(err);
  }
}