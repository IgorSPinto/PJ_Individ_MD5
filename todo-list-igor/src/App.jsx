import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([

    {
      id:1,
      texto: "criar funcionalidade x no sistema",
      categoria: "Trabalho",
      Completo: false,
    },
    {
      id:2,
      texto: "Ir pra academia",
      categoria: "Pessoal",
      Completo: false,
    },
    {
      id:3,
      texto: "Estudar React",
      categoria: "Estudos",
      Completo: false,
    }
  ])

  return <div className='app'>
    <h1>Lista de Tarefas</h1>
    <div className='todo-list'>

      {/* map de array que exibe todos os objetos da todo list */}
      {todos.map((todo) => (
        <Todo todo={todo}/>
      ))}
    </div>
  </div>
}

export default App
