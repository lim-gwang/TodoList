import { 
  ADD_TODO, 
  FILTER_TODO, 
  TOGGLE_TODO, 
  ALL_TOGGLE_TODO,
  CLEAR_COMPLETED,
  DEL_TODO } from './action-types'

let id = 2;

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: id++,
    text,
    done: false,
  }
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id,
})

export const allToggleTodo = () => ({
  type: ALL_TOGGLE_TODO,
})

export const filterTodo = filterType => ({
  type: FILTER_TODO,
  payload: filterType,
})

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
})

export const delTodo = id => ({
  type: DEL_TODO,
  payload: id,
})
