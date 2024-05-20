import { useTodos } from './todo-provider'
import TodoFilters from './todo-filters'
import { ActionType } from '../types'

export default function TodoFooter() {
  const { todos, dispatch } = useTodos()
  const remaining = todos.filter((todo) => !todo.completed).length

  return (
    todos.length > 0 && (
      <footer className="footer">
        <TodoCount remaining={remaining} />
        <TodoFilters />
        {todos.length > remaining && <ClearButton dispatch={dispatch} />}
      </footer>
    )
  )
}

function TodoCount({ remaining }: { remaining: number }) {
  return (
    <span className="todo-count">
      <strong>{remaining}</strong>
      <span>{remaining === 1 ? ' item' : ' items'} left</span>
    </span>
  )
}

function ClearButton({ dispatch }: { dispatch: React.Dispatch<ActionType> }) {
  return (
    <button className="clear-completed border-0 bg-none" onClick={() => dispatch({ type: 'clear' })}>
      Clear completed
    </button>
  )
}
