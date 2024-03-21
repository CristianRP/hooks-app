import { useCallback, useState } from 'react';
import { Child } from './Child';

export const Parent = () => {

  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  const increment = useCallback(
    ( num:number ) => {
      setValue( val => val + num )
    }, []
  )

  return (
    <div>
      <h1 className='text-3xl'>Parent</h1>
      <p className='text-2xl'>Total: { value }</p>

      <hr className='m-2' />

      {
        numbers.map( n => (
          <Child key={n} value={ n } increment={ increment } />
        ))
      }
    </div>
  )
}

