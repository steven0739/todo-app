import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListView from './TodoListView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { commit: 50000 };
  }

  handleAddClick = () => {
    this.setState({ commit: this.state.commit + 1 })
  }

  handleResetClick = () => {
    this.setState({ commit: 0 })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ZHAOYU's workplace</h1>
        </header>
        <p className="App-intro">
          <h1>Commit: {this.state.commit}</h1>
          <button className="button" onClick={this.handleAddClick}>ADD</button>
          <button className="button" onClick={this.handleResetClick}>RESET</button>
        </p>

        <TodoListView todoListStore={this.props.todoListStore} />
      </div>
    );
  }
}

export default App;
