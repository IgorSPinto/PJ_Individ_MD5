import React from 'react'

const Todo = ({todo, removeTodo}) => {
  return (
    <div className='todo'>
          <div className="conteudo">
            <p>{todo.texto}</p>
            <p className="categoria">
              ({todo.categoria})
            </p>
          </div>
          <div>
            {/* botão que irá marcar uma tarefa como concluída */}
            <button className='complete'>Completar Tarefa</button>

            {/* botão que irá deletar uma tarefa */}
            <button className='delete' onClick={() => removeTodo(todo.id)}>Deletar Tarefa</button>
          </div>
        </div>
  )
}

export default Todo