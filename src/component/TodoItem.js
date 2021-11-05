import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleTodo, delTodo } from '../store/todos/actions'

function TodoItem({id, text, done }) {
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(toggleTodo(id))
  }

  return(
    <li className={done ? 'completed' : ''}>
        <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={done}
              onChange={handleChange}
            />
            <label>{text}</label>
            <button 
              className="destroy"
              onClick={() => dispatch(delTodo(id))}
            />
        </div>
        <input className="edit" defaultValue="Create a TodoMVC template" />
    </li>
  )
}

export default TodoItem;