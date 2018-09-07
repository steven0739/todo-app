import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Todo, TodoListStore } from './stores/TodoListStore';

const todo1 = new Todo('First Task');
const todo2 = new Todo('Second Task');
const todo3 = new Todo('Third Task');

const todoListStore = new TodoListStore();
let todos = {};
todos[todo1.id] = todo1;
todos[todo2.id] = todo2;
todos[todo3.id] = todo3;
todoListStore.setTodos(todos);

ReactDOM.render(<App todoListStore={todoListStore} />, document.getElementById('root'));
registerServiceWorker();
