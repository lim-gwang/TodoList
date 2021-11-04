import { ADD_TODO, FILTER_TODO, TOGGLE_TODO } from './action-types'

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

export const filterTodo = filterType => ({
  type: FILTER_TODO,
  payload: filterType,
})

