import React from 'react'

import {Trash, CheckCircle, Pencil} from "@phosphor-icons/react";

/* Componente `Todo` que exibe uma única tarefa */
const Todo = ({todo, removeTodo, completeTodo, startEditingTodo}) => {
  return (
    <div className='todo' style={{textDecoration: todo.completo ? "line-through" : ""}}>
          <div className="conteudo">

            {/* Exibe o texto da tarefa */}
            <p>{todo.texto}</p>

            {/* Exibe a categoria da tarefa entre parênteses */}
            <p className="categoria">
              ({todo.categoria})
            </p>
          </div>
          <div>

            {/* Botão que irá marcar uma tarefa como concluída */}
            <button className='complete' onClick={() => completeTodo(todo.id)}><CheckCircle size={20} /></button>

            {/* Botão que irá deletar uma tarefa */}
            <button className='delete' onClick={() => removeTodo(todo.id)}><Trash size={20} /></button>

            {/* Botão para iniciar a edição de uma tarefa */}
            <button className='edit' onClick={() => startEditingTodo(todo.id, todo.texto)}><Pencil size={20} /></button>

          </div>
        </div>
  )
}

export default Todo