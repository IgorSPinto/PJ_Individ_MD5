import { useState } from 'react'
import './App.css'

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
        <div className='todo'>
          <div className="conteudo">
            <p>{todo.texto}</p>
            <p className="categoria">
              ({todo.categoria})
            </p>
          </div>
          <div>
            {/* botão que irá marcar uma tarefa como concluída */}
            <button>Completar Tarefa</button>

            {/* botão que irá deletar uma tarefa */}
            <button>Deletar Tarefa</button>
          </div>
        </div>
      ))}
    </div>
  </div>
}

export default App
