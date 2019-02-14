import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { toggleTodo } from '../store/actions';

const TodoList = props => {
  console.log(props);
  return (
    <div>
      {props.todos.map(todo => (
        <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

const mapActionsToProps = {
  toggleTodo
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodoList);
