import React , {Component} from 'react';
import TodoItem from './TodoItem';

class Main extends Component {

    render() {
        return (
            <section className="main">
                <input 
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                    onChange={this.props.allCheckToggle}
                />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {
                        this.props.todos.map(item => {
                            return (
                                <TodoItem
                                    key={item.id}
                                    id={item.id} 
                                    item={item} 
                                    onToggle={this.props.onToggle}
                                    delTodo={this.props.delTodo}
                                />
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default Main;