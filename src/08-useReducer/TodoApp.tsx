import { TodoList } from './TodoList';
import { TodoAddForm } from './TodoAddForm';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {

  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl font-bold mb-2'>TodoAPP (10), <small>Pending: 2</small></h1>
      <hr />

      <div className='flex justify-between p-4'>
        <div className='w-96'>
          <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToogleTodo={ handleToggleTodo } />
        </div>

        <div className='ml-2'>
          <h4>Add TODO</h4>
          <hr />
          <TodoAddForm onNewTodo={ handleNewTodo } />
        </div>
      </div>

    </div>
  )
}

