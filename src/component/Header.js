import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };

    };

    handleChange = e => {
        this.setState({
            text: e.target.value,
        });
    };

    handleKeyUp = e => {

        if (e.key !== 'Enter') return;

        if (!e.target.value) return;

        const value = this.state.text;

        this.props.addTodo(value);
    
        this.setState({
            text: '',
        });
    };

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onChange={this.handleChange}
                    onKeyUpCapture={this.handleKeyUp}
                    value={this.state.text}
                />
            </header>
        )
    }
}

export default Header;

