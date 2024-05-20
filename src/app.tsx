import TodoInput from './components/todo-input'
import TodoList from './components/todo-list'
import TodoFooter from './components/todo-footer'
import TodoProvider from './components/todo-provider'
import Footer from "./components/copy-right"

export default function App() {
  return (
    <TodoProvider>
      <div className='container'>
        <div className="todoapp bg-light ">
          <TodoInput />
          <TodoList />
          <TodoFooter />
        </div>
        <Footer />
      </div>
    </TodoProvider>
  )
}
