import { useForm } from '../hooks/useForm';

interface Login {
  username: string,
  email: string,
  password: string
}

export const SimpleFormWithHook = () => {

  const { formState, onInputChange, username, onResetForm } = useForm<Login>({
    username: '',
    email: '',
    password: ''
  })

  const { email, password } = formState;
  

  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl'>Simple Form</h1>

      <hr />

      <input
        type="text"
        className=''
        placeholder='Username'
        name="username"
        value={ username }
        onChange={ onInputChange }
        />
      
      <input 
        type="email"
        placeholder='email@googl.com'
        name="email"
        value={ email }
        onChange={ onInputChange }
        />

      <input 
        type="password"
        placeholder=''
        name="password"
        value={ password }
        onChange={ onInputChange }
        />

      <button
        className='bg-blue-700 p-2 text-white max-w-lg m-2 self-center rounded-md hover:bg-blue-500 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-400'
        onClick={ () => onResetForm() }
        >
        Reset
      </button>
    </div>
  )
}
