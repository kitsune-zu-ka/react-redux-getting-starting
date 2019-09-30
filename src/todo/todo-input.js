import React, { Component } from 'react';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    handleClick() {
        const inputValue = this.state.inputValue;
        this.props.addTodo(inputValue);
    }

    render() {
        return (
            <div className={ "TodoInput" }>
                <input
                    placeholder={ "新規TODOを入力してください" }
                    onChange={ (e) => this.handleChange(e) }
                />
                <button onClick={ this.handleClick }>登録</button>
            </div>
        );
    }
}

export default TodoInput;