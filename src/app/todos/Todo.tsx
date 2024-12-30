import React from 'react'
import {Todo} from '@/app/_types/todos/Todo'

const TodoItem: React.FC<Todo> = (todo) => {
  return <>
    <li key={todo.id} className='font-light flex justify-between border-2 m-[5px] p-2'>
        <span>{todo.title}</span>
        <input type="checkbox" checked={todo.completed} readOnly />
    </li>
  </>
}

export default TodoItem
