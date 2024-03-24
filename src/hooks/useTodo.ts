import { useEffect, useReducer } from 'react';
import { Todo } from '../08-useReducer/TodoList';
import { Action, todoReducer } from '../08-useReducer/todoReducer';

type DispatchAction = (action: Action) => void;

const initialState: Todo[] = []

const init = () => {
  return JSON.parse( localStorage.getItem('todos')! ) || [];
}

export const useTodo = () => {

  const [ todos, dispatch ]:[ Todo[], DispatchAction ] = useReducer( todoReducer , initialState, init );

  const handleNewTodo = ( todo: Todo ) => {
    dispatch({
      type: '[TODO] Add Todo',
      payload: todo
    })
  }

  const handleDeleteTodo = ( id:string ) => {
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
        id
      }
    })
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos || []));
  },[todos]);

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
  }
}

