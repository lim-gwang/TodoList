import { 
  ADD_TODO, 
  FILTER_TODO, 
  TOGGLE_TODO, 
  ALL_TOGGLE_TODO,
  CLEAR_COMPLETED,
  DEL_TODO } from './action-types'

export const defaultState = {
  filterType: 'all',
  items: [
    { id: 1, text: 'React', done: false },
  ],
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        ...action.payload,
      }

      return {
        ...state,
        items: [
          ...state.items,
          newTodo,
        ]
      }

    case TOGGLE_TODO:
      const id = action.payload

      const items = state.items.map(todo => {
        if (todo.id !== id) {
          return todo
        }

        return {
          ...todo,
          done: !todo.done,
        }
      })

      return {
        ...state,
        items,
      }

    case FILTER_TODO:
      const filterType = action.payload

      return {
        ...state,
        filterType,
      }

    case ALL_TOGGLE_TODO:
      const findChecked = state.items.find(item => item.done === false);
      const todoItems = state.items.map(todo => {
        if (findChecked) {
          return {
            ...todo,
            done: true,
          }
        } else {
          return {
            ...todo,
            done: false,
          }
        }
      })
      return {
        ...state,
        items : todoItems,
      }
    case CLEAR_COMPLETED:
      const checkedTodos = state.items.filter(todo => !todo.done);
      return {
        ...state,
        items: checkedTodos,
      }
    case DEL_TODO:
      const delTodo = state.items.filter(todo => todo.id !== action.payload);
      return {
        ...state,
        items: delTodo,
      }
    default:
      return state
  }
}

export default reducer