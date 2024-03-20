import { ChangeEvent, useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'cristianrp',
    email: 'cristianrp@gmail.com'
  })

  const { username, email } = formState;

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    });
  }

  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  useEffect(() => {
    // console.log('useEffect formstate chagned called!');
  }, [ formState ]);

  useEffect(() => {
    // console.log('useEffect email chagned called!');
  }, [ email ]);
  

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

      {
        username === 'cristianrp' && <Message />
      }
    </div>
  )
}
