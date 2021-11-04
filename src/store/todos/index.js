import { ADD_TODO, FILTER_TODO, TOGGLE_TODO } from './action-types'

const defaultState = {
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
      
    default:
      return state
  }
}

export default reducer