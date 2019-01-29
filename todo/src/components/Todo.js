import React from 'react';

const Todo = props => {
  return (
    <div>
      <h2 onClick={() => props.toggleTodo(props.todo.id)}>{props.todo.task}</h2>
    </div>
  );
};

export default Todo;
