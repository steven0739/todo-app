import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { dummyStore } from './stores/dummyTodos';

ReactDOM.render(<App todoListStore={dummyStore} />, document.getElementById('root'));
registerServiceWorker();
