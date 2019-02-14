import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from './type';

export const addTodo = task => ({
  type: ADD_TODO,
  payload: {
    task,
    id: Date.now(),
    completed: false
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
});
