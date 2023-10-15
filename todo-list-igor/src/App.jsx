import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Todoform from "./components/Todoform";

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

  const addTodo = (texto, categoria) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      texto,
      categoria,
      completo: false
    }]

    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {/* map de array que exibe todos os objetos da todo list */}
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <Todoform addTodo={addTodo}/>
    </div>
  );
}

export default App;
