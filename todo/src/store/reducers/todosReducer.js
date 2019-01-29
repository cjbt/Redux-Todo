import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from '../actions/type';

const initialState = {
  todos: []
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case CLEAR_COMPLETED:
      return {
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};

export default todosReducer;
