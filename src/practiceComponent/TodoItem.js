import React from 'react';

class TodoItem extends React.Component {
  render() {
    const {done} = this.props;
    const { onToggle} = this.props;

    return (
        <li className={done? 'completed' : ''}>
              <div className="view">
                  <input 
                    className="toggle"
                    type="checkbox"
                    checked={done}
                    onChange={() => onToggle(this.props.id)}
                  />
                  <label>{this.props.text}</label>
                  <button 
                    className="destroy"
                    onClick={() => this.props.delTodo(this.props.id)}
                  />
              </div>
              <input className="edit" defaultValue="Create a TodoMVC template" />
        </li>
    )
  }
}

export default TodoItem;