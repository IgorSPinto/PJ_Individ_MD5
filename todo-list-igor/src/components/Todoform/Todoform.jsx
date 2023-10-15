import { useState } from 'react'

import {ListPlus} from "@phosphor-icons/react";

/* Componente `Todoform` para adicionar novas tarefas */
const Todoform = ({ addTodo }) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    /* Manipulador de envio do formulário */
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category) return

        /* Chama a função `addTodo` passando o texto e a categoria como argumentos */
        addTodo(value, category)

        /* Limpa os campos de entrada após a adição da tarefa */
        setValue("")
        setCategory("")
        
    }
  return (
    <div className='todo-form'>
        <h2><ListPlus size={22} /> Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Digite o titulo da tarefa' value={value} onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria de Tarefa</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default Todoform