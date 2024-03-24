import { Todo } from './TodoList';
import { useForm } from '../hooks';
import { FormEvent } from 'react';

type TodoAddFormProps = {
  onNewTodo: (todo: Todo) => void
}

export const TodoAddForm = ( { onNewTodo }:TodoAddFormProps ) => {

  const { description, onInputChange, onResetForm } = useForm<Todo>({
    id: '',
    description: '',
    done: false,
  });

  const newTodo = {
    id: new Date().toISOString(),
    description,
    done: false,
  }

  const onSendForm = (event: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    event.preventDefault();
    if ( description.length <= 1 ) return;

    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <>
      <form onSubmit={ onSendForm }>
        <input 
          type="text"
          placeholder="What's on your list?"
          className='form-input rounded-md w-full'
          name="description"
          value={ description }
          onChange={ onInputChange }
          />
        <button
          type='submit'
          className='mt-2 mb-2 p-2 w-full text-white rounded-md bg-orange-800 active:bg-orange-700 hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300'
          >
          Add
        </button>
      </form>
    </>
  )
}
