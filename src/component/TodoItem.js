import React , {Component} from 'react';

class TodoItem extends Component {

    render() {
        return (
            <li className={this.props.item.done ? 'completed' : ''}>
                <div className="view">
                    <input 
                        className="toggle"
                        type="checkbox"
                        checked={this.props.item.done}
                        onChange={() => this.props.onToggle(this.props.id)}
                    />
                    <label>{this.props.item.text}</label>
                    <button
                        className="destroy"
                        onClick={() => this.props.delTodo(this.props.id)}
                    />
                </div>
                {/* <input className="edit" value="Create a TodoMVC template" /> */}
            </li>
        )
    }
}

export default TodoItem;