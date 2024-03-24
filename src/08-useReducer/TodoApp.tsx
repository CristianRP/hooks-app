import { useEffect, useReducer } from 'react'
import { Action, todoReducer } from './todoReducer';
import { Todo, TodoList } from './TodoList';
import { TodoAddForm } from './TodoAddForm';

const initialState: Todo[] = []

type DispatchAction = (action: Action) => void;

const init = () => {
  return JSON.parse( localStorage.getItem('todos')! ) || [];
}

export const TodoApp = () => {

  const [ todos, dispatch ]:[ Todo[], DispatchAction ] = useReducer( todoReducer , initialState, init );

  const handlerTodo = (newTodo: Todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: newTodo
    }

    dispatch(action);
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos || []));
  },[todos]);

  const handleDeleteTodo = ( id:string ) => {
    console.log(id);
    dispatch({
      type: '[TODO] Remove Todo',
      payload: {
        id
      }
    })
  }

  const handleToggleTodo = ( id:string ) => {
    dispatch({
      type: '[TODO] Update Done Todo',
      payload: {
        id,
      }
    })
  }

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
          <TodoAddForm onNewTodo={ handlerTodo } />
        </div>
      </div>

    </div>
  )
}

