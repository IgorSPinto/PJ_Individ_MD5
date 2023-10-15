import { useState } from "react";
import "./App.css";

import Todo from "./components/Todo";
import Todoform from "./components/Todoform";
import Search from "./components/Search";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      texto: "criar funcionalidade x no sistema",
      categoria: "Trabalho",
      completo: false,
    },
    {
      id: 2,
      texto: "Ir pra academia",
      categoria: "Pessoal",
      completo: false,
    },
    {
      id: 3,
      texto: "Estudar React",
      categoria: "Estudos",
      completo: false,
    },
  ]);

  const [search, setSearch] = useState("")

  const addTodo = (texto, categoria) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      texto,
      categoria,
      completo: false
    }]

    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.completo = !todo.completo : todo)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">

        <Search search={search} setSearch={setSearch}/>

        <Todoform addTodo={addTodo}/>

        {/* map de array que exibe todos os objetos da todo list */}
        {todos.filter((todo) => todo.texto.toLowerCase().includes(search.toLowerCase()))
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
