import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        let todoItems = this.props.todolist.map((item)=> {
            return (
                <TodoItem key={item.id} {...item} deleteTodoItem={this.props.deleteTodoItem}
                          toggleItemDone={this.props.toggleItemDone} />
            )
        });

        return (
            <div className="row">
                <ul className="list-group">
                    {todoItems}
                </ul>
            </div>

        );
    }
}

TodoItemList.propTypes = {
    todolist : PropTypes.arrayOf(PropTypes.object),
    toggleItemDone : PropTypes.func.isRequired,
    deleteTodoItem : PropTypes.func.isRequired
};

export default TodoItemList;