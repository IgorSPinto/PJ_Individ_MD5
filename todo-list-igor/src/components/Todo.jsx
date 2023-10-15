import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
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
            <button className='complete' onClick={() => completeTodo(todo.id)}>Completar Tarefa</button>

            {/* botão que irá deletar uma tarefa */}
            <button className='delete' onClick={() => removeTodo(todo.id)}>Deletar Tarefa</button>
          </div>
        </div>
  )
}

export default Todo