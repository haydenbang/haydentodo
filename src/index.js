import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import AppContainer from './components/AppContainer';
import { Provider } from 'react-redux';
import TodoItemStore from './redux/TodoItemStore';

ReactDOM.render(
    <Provider store={TodoItemStore}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root'));
