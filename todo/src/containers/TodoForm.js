import React, { Component } from 'react';
import { clearCompleted, addTodo } from '../store/actions';
import { connect } from 'react-redux';

class TodoForm extends Component {
  state = {
    inputText: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputText);
    this.setState({
      inputText: ''
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.props.clearCompleted();
  };

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input
          type='text'
          name='inputText'
          onChange={this.handleChange}
          value={this.state.inputText}
        />
        <button type='submit'>Add Todo</button>
        <button onClick={this.clearCompleted}>Clear Complete</button>
      </form>
    );
  }
}

const mapActionsToProps = {
  addTodo,
  clearCompleted
};

export default connect(
  null,
  mapActionsToProps
)(TodoForm);
