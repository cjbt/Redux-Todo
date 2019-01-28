import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from '../actions/type';

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: [...state.todos, { completed: !state.todos.completed }]
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return;
  }
};
