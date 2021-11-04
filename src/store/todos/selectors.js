export const todosSelector = state => state.todos.items.filter(todo => {
  const { filterType } = state.todos

  switch (filterType) {
    case 'all':
      return true

    case 'active':
      return !todo.done

    case 'completed':
      return todo.done

    default:
      return true
  }
})