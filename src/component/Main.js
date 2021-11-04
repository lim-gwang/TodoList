import React from 'react';
import { useSelector } from 'react-redux';
import { todosSelector } from '../store/todos/selectors';
import TodoItem from './TodoItem';

function Main() {
  const todos = useSelector(todosSelector)
  
  const itemFilter = todos.map(todo=> (
    <TodoItem
      key={todo.id}
      id={todo.id}
      text={todo.text}
      done={todo.done}
    />
  ))

  return(
    <section className="main">
      <input id="toggle-all"className="toggle-all" type="checkbox"/>
      <label for="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {itemFilter}
      </ul>
    </section>
  )
}

export default Main;