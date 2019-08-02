import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodoItem extends Component {
    constructor() {
        super();
        this.state = {
            title : ""
        }
    }

    addHandler = () => {
        this.props.addTodoItem(this.state.title);
        this.setState({ title: "" })
    };

    changeTodo = (e) => {
        this.setState({ title : e.target.value });
    };

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="input-group">
                        <input id="msg" type="text" className="form-control" name="msg" 
                            placeholder="Input Your Todo Item!" value={this.state.title}
                            onChange={this.changeTodo} />
                        <span className="btn btn-primary input-group-addon" onClick={this.addHandler}>ADD</span>
                    </div>
                </div>
            </div>
        );
    }
}

InputTodoItem.propTypes = {
    addTodoItem : PropTypes.func.isRequired
};

export default InputTodoItem;