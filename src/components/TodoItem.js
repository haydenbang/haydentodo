import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor() {
        super()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.id !== this.props.id || nextProps.done !== this.props.done;
    }

    deleteHandler = () => {
        this.props.deleteTodoItem(this.props.id);
    };

    toggleHandler = () => {
        this.props.toggleItemDone(this.props.id);
    };

    render() {
        let itemClassName = "list-group-item";
        if (this.props.done) itemClassName +=" list-group-item-success";
        return (
            <li className={itemClassName}>
                <span className={this.props.done ? "todo-done pointer": "pointer"}
                    onClick={this.toggleHandler}>
                    {this.props.title} { this.props.done ? "(DONE)" : "" }
                </span>
                <span className="pull-right badge pointer" 
                    onClick={this.deleteHandler}>DEL</span>
            </li>
        );
    }
}

TodoItem.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    done : PropTypes.bool.isRequired,
    toggleItemDone : PropTypes.func.isRequired,
    deleteTodoItem : PropTypes.func.isRequired
};

export default TodoItem;