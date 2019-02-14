import React from 'react';
import './todo.css';

const Todo = props => {
  return (
    <div>
      <h2
        onClick={() => props.toggleTodo(props.todo.id)}
        className={props.todo.completed ? 'strike-through' : null}
      >
        {props.todo.task}
      </h2>
    </div>
  );
};

export default Todo;
