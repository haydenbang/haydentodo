import App from './App';
import TodoActionCreator from '../redux/TodoActionCreator';
import { connect } from 'react-redux';

const mapState = (state)=> {
    return {
        todolist : state.todolist
    }   
};

const mapDispatch = (dispatch)=> {
    return {
        addTodoItem : (title)=> dispatch(TodoActionCreator.addTodoItem(title)),
        deleteTodoItem : (id)=> dispatch(TodoActionCreator.deleteTodoItem(id)),
        toggleItemDone : (id)=> dispatch(TodoActionCreator.toggleItemDone(id)),
    }
};

const AppContainer = connect(mapState, mapDispatch)(App);
export default AppContainer;