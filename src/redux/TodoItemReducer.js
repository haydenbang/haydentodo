import { ACTION_TYPE, INITIAL_TODO_ITEM_LIST } from '../Constant';
import produce from 'immer';

const initialState = INITIAL_TODO_ITEM_LIST;

const TodoItemReducer = (state=initialState, action) => {

    let index, newTodoItemList;

    switch(action.type) {
        // Add Item
        case ACTION_TYPE.ADD_TODO_ITEM :
            newTodoItemList = produce(state.todolist, (draft)=> {
                draft.push({ id:new Date().getTime(),
                    title:action.payload.title, done:false});
            });
            return { todolist: newTodoItemList };

        //delete Item
        case ACTION_TYPE.DELETE_TODO_ITEM :
            index = state.todolist.findIndex((item)=>item.id === action.payload.id);
            newTodoItemList = produce(state.todolist, (draft)=> {
                draft.splice(index,1);
            });
            return { todolist: newTodoItemList };

        //toggle Item
        case ACTION_TYPE.TOGGLE_ITEM_DONE :
            index = state.todolist.findIndex((item)=>item.id === action.payload.id);
            newTodoItemList = produce(state.todolist, (draft)=> {
                draft[index].done = !draft[index].done;
            });
            return { todolist: newTodoItemList };
        default : 
            return state;
    }
};

export default TodoItemReducer;