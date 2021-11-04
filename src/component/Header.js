import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todos/actions'

function Header() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const changeHandler = e => {
    setValue(e.target.value)
  }

  const keyDownHandler = e => {
    if (e.key !== 'Enter') {
      return
    }

    if (value.trim() === '') {
      return
    }

    dispatch(addTodo(value.trim()))
  }

  return(
    <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
          value={value}
        />
    </header>
  )
}

export default Header;