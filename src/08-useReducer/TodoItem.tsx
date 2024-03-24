import { Todo } from './TodoList'

type TodoItemProps = {
  todo: Todo,
  onDeleteTodo: ( id:string ) => void;
  onToggleTodo: ( id:string ) => void;
}

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }: TodoItemProps) => {
  return (
    <li className='flex justify-between border border-gray-500 p-2'>
      <div className='flex w-full justify-between' onClick={ () => onToggleTodo( todo.id ) }>
        <span className={`self-center w-3/5 ${ todo.done ? 'line-through' : '' }`}>{ todo.description }</span>
        <span className='self-center'>{ JSON.stringify(todo.done) }</span>
      </div>
      <button
        className='m-2 p-2 text-white rounded-md bg-orange-800 active:bg-orange-700 hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300'
        onClick={ () => onDeleteTodo( todo.id ) }
        >
          Delete
      </button>
    </li>
  )
}
