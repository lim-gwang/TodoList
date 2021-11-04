import { createStore, combineReducers } from 'redux'
import todos from './todos'

export default createStore(combineReducers({
  todos,
}))