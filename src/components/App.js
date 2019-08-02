import React, { Component } from 'react';
import InputTodoItem from './InputTodoItem';
import TodoItemList from './TodoItemList';
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="well">
                    <div className="title">** HAYDEN_ToDo_List **</div>
                </div>
                <div className="panel panel-default panel-borderless">
                    <div className="panel-body">
                        <InputTodoItem addTodoItem={this.props.addTodoItem}/>
                        <TodoItemList todolist={this.props.todolist}
                                      toggleItemDone={this.props.toggleItemDone}
                                      deleteTodoItem={this.props.deleteTodoItem}/>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    todolist : PropTypes.arrayOf(PropTypes.object),
    addTodoItem : PropTypes.func.isRequired,
    toggleItemDone : PropTypes.func.isRequired,
    deleteTodoItem : PropTypes.func.isRequired
};

export default App;