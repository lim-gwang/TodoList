import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector } from '../store/todos/selectors';
import TodoItem from './TodoItem';
import { allToggleTodo } from '../store/todos/actions';

function Main() {
  const dispatch = useDispatch()

  const todos = useSelector(todosSelector)

  const allToggleSwitch = useSelector(allToggleTodo).payload;

  const itemFilter = todos.map(todo=> (
    <TodoItem
      key={todo.id}
      id={todo.id}
      text={todo.text}
      done={todo.done}
    />
  ));
  return(
    <section className="main">
      <input id="toggle-all" 
        className="toggle-all"
        type="checkbox"
        checked={allToggleSwitch}
        onChange={()=> dispatch(allToggleTodo())}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {itemFilter}
      </ul>
    </section>
  )
}

export default Main;