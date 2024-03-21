import { useState } from 'react';
import { useCounter } from '../hooks'

import { Small } from './Small';

export const Memorize = () => {

  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1 className='text-xl'>Counter: <Small counter={counter}></Small></h1>

      <button
        className='m-2 p-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-500 active:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-200'
        onClick={ () => increment(1) }
        >
        +1
      </button>

      <button
        className='m-2 p-2 bg-white text-yellow-600 rounded-md ring-1 ring-yellow-600 hover:text-white hover:bg-yellow-500 active:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-200'
        onClick={ () => setShow(!show) }
      >
        Show/Hide { JSON.stringify(show) }
      </button>
    </>
  )
}
