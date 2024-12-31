import React from 'react'
import {Todo} from '@/app/_types/todos/Todo'

type TodoItemProps = {
  todo: Todo, 
  handleCheck: (id: number) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, handleCheck }) => {
  return <>
    <li key={todo.id} className='font-light flex justify-between border-2 m-[5px] p-2'>
        <span>{todo.title}</span>
        <input type="checkbox" checked={todo.completed} onChange={() => handleCheck(todo.id)}/>
    </li>
  </>
}

export default TodoItem
