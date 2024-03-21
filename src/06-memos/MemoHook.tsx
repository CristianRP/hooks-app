import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = ( iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++ ) {
    console.log(iterationNumber, 'running..');
  }

  return `${ iterationNumber } proccessed`;
}


export const MemoHook = () => {

  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo( () => heavyStuff( counter ), [counter] );

  return (
    <>
      <h1 className='text-2xl'>Counter: <small>{counter}</small></h1>
      <hr />

      <h4>{ memorizedValue }</h4>

      <button
        className='m-2 p-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-500 active:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-200'
        onClick={ () => increment() }
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
