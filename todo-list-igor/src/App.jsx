import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([

    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  return (
   <div>
      Salve salve familia!
   </div>
  )
}

export default App