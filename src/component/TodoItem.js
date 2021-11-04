import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../store/todos/actions'

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
            <button className="destroy"/>
        </div>
        <input className="edit" value="Create a TodoMVC template" />
    </li>
  )
}

export default TodoItem;