import { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext );

  console.log(user);
  

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>{ JSON.stringify(user, null, 3) }</pre>

      <button
        className='bg-blue-500 rounded-md p-2 text-white mt-2'
        onClick={() => setUser({
          id: 123,
          name: 'Cristian Ramirez',
          email: 'cristian@gmail.com',
        })}>
        Set User
      </button>
    </>
  )
}
