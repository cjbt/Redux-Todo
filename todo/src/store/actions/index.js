import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from './type';

export const addTodo = task => ({
  type: ADD_TODO,
  payload: {
    task,
    id: Date.now(),
    completed: false
  }
});

export const toggleTodo = () => ({
  type: TOGGLE_TODO
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
});
