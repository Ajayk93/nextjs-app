"use client"
import TodoItem from './Todo';
import useFetchHook from '../hooks/useFetchHook';
import { Todo } from '@/app/_types/todos/Todo';

const TodosPage = () => {
    const {data, loading, error} = useFetchHook<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    
    const handlecheck = (id: number) => {
        console.log("id value", id);
    }

    return (
        <div className='mt-2 ml-5'>
            <h1 className='font-semibold'>Todos List</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && data.length > 0 && 
            <ul className='w-1/2 flex flex-col'>
                {data?.map(todo => (
                    <TodoItem todo={todo} key={todo.id} handleCheck={handlecheck}/>
                ))}
            </ul>
            }
        </div>
    );
};

export default TodosPage;