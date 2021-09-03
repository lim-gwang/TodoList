import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

let uniqId = 2;

class TodoApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggleAll : {
                checked : false,
            },
            todos: [
                { id: 0, text: 'React', done: false },
                { id: 1, text: 'Vue', done: true },
                
            ]
        };

    };
    
    addTodo = text => {
        this.setState({
            todos: [
                ...this.state.todos,
                { id: uniqId++, text, done: false }
            ],
        });
    };
    
    onToggle = (id) => {

        // const target = e.target;

        // if (target.className !== 'toggle') return;

        const todoIndex = this.state.todos.findIndex(todo => todo.id === id);
        const selectd = this.state.todos[todoIndex];

        this.setState({
            todos : [
                ...this.state.todos.slice(0, todoIndex),
                {
                    ...selectd,
                    done: !selectd.done,
                },
                ...this.state.todos.slice(todoIndex + 1, this.state.todos.length)
            ]
        });

    };


    delTodo= (id) => { 

        const todoState = this.state.todos;

        const todoDelState = todoState.filter(use => use.id !== id);
        
        this.setState({
            todos: todoDelState,
        });
    };

    allCheckToggle = () => {
        const check = this.state.toggleAll.checked;
        
            this.setState(this.state.todos.forEach(todo => {
                if (!check) {
                    todo['done'] = true;
                } else {
                    todo['done'] =false;
                }
            }));
        

        this.setState({
            toggleAll : {
                checked: !check,
            }
        });

    }

    render() {
        return (
            <section className="todoapp">
                <Header addTodo={this.addTodo} />
                <Main
                    allCheckToggle={this.allCheckToggle}
                    delTodo={this.delTodo}
                    todos={this.state.todos}
                    onToggle={this.onToggle}
                />
                <Footer />
            </section>
        )
    }
}


export default TodoApp;
