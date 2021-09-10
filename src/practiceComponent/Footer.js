import React from 'react'
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    const todoCheck = this.props.todos.findIndex(todo => todo.done) + 1;

    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>
                    {this.props.leftItems}
                </strong>
                item left
            </span>
            <ul className="filters">
                <li>
                    <Link exact="true" to="/" className="selected">All</Link>
                </li>
                <li>
                    <Link to="/active">Active</Link>
                </li>
                <li>
                    <Link to="/completed">Completed</Link>
                </li>
            </ul>
            { 
              todoCheck
              ? <button 
                className="clear-completed"
                onClick={this.props.comDel}
                >
                  Clear completed
                </button> 
              : ''
            }
        </footer>
    )
  }
}

export default Footer;