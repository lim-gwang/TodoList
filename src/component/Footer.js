import React from 'react';
import { useDispatch } from 'react-redux'
import { filterTodo } from '../store/todos/actions'

function Footer() {
  const dispatch = useDispatch()

  const dispatchFilter = filterType => dispatch(filterTodo(filterType))

  return(
    <footer className="footer">
      <span className="todo-count">
          <strong>
              2
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
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Footer;