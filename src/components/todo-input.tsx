import { useState } from 'react'
import { useTodos } from './todo-provider'

export default function TodoInput() {
  const [text, setText] = useState('')
  const { dispatch } = useTodos()

  function handleAdd() {
    const title = text.trim()
    if (title) {
      dispatch({ type: 'add', title })
      setText('')
    }
  }

  return (
    <header className="header">
      <h1 className='display-1 text-center text-danger font-weight-light w-100 '>todos</h1>
      <input
        className="new-todo "
        autoFocus
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') handleAdd()
        }}
      />
    </header>
  )
}
