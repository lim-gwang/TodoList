import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { filterTodo, clearCompleted } from '../store/todos/actions'
function Footer() {
  const dispatch = useDispatch()
  const todos = useSelector(state => (
    state.todos.items
  ))

  const todoChecked = todos.filter(todo => !todo.done).length;

  const dispatchFilter = filterType => dispatch(filterTodo(filterType))
  
  return(
    <footer className="footer">
      <span className="todo-count">
          <strong>
            {todoChecked}
          </strong>
          item left
      </span>
      <ul className="filters">
          <li>
              <a href="#/all" onClick={() => dispatchFilter('all')}>All</a>
          </li>
          <li>
              <a href="#/active" onClick={() => dispatchFilter('active')}>Active</a>
          </li>
          <li>
              <a href="#/completed" onClick={() => dispatchFilter('completed')}>Completed</a>
          </li>
      </ul>
      <button 
        className="clear-completed"
        onClick={() => dispatch(clearCompleted())}
      >
        Clear completed
      </button>
    </footer>
  )
}

export default Footer;