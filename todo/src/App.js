import React, { Component } from 'react';
import './App.css';
import TodoList from './containers/TodoList';
import TodoForm from './containers/TodoForm';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
