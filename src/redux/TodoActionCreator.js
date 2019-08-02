import { ACTION_TYPE } from '../Constant';

const TodoActionCreator = {
    addTodoItem(title) {
        return {
            type: ACTION_TYPE.ADD_TODO_ITEM, payload: { title: title }
        }
    },
    deleteTodoItem(id) {
        return {
            type: ACTION_TYPE.DELETE_TODO_ITEM, payload: { id: id }
        }
    },
    toggleItemDone(id) {
        return {
            type: ACTION_TYPE.TOGGLE_ITEM_DONE, payload : { id: id }
        }
    }
};

export default TodoActionCreator;