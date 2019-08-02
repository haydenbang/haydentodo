import { createStore } from 'redux';
import TodoItemReducer from './TodoItemReducer';

const TodoItemStore = createStore(TodoItemReducer);
export default TodoItemStore;