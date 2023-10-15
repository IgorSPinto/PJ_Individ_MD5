import React from 'react'

import {Trash, CheckCircle, Pencil} from "@phosphor-icons/react";

const Todo = ({todo, removeTodo, completeTodo, startEditingTodo}) => {
  return (
    <div className='todo' style={{textDecoration: todo.completo ? "line-through" : ""}}>
          <div className="conteudo">
            <p>{todo.texto}</p>
            <p className="categoria">
              ({todo.categoria})
            </p>
          </div>
          <div>
            {/* botão que irá marcar uma tarefa como concluída */}
            <button className='complete' onClick={() => completeTodo(todo.id)}><CheckCircle size={20} /></button>

            {/* botão que irá deletar uma tarefa */}
            <button className='delete' onClick={() => removeTodo(todo.id)}><Trash size={20} /></button>

            <button className='edit' onClick={() => startEditingTodo(todo.id, todo.texto)}><Pencil size={20} /></button>

          </div>
        </div>
  )
}

export default Todo