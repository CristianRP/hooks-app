import { useState } from 'react'

export const CounterApp = () => {

  const [ state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl mb-6'>Counter 1: { counter1 }</h1>
      <h1 className='text-3xl mb-6'>Counter 2: { counter2 }</h1>
      <h1 className='text-3xl mb-6'>Counter 3: { counter3 }</h1>

      <hr />

      <button
        className='button text-3xl bg-sky-400 rounded-md p-2 cursor-pointer mt-4 flex self-center'
        onClick={() => setState({ ...state, counter1: counter1 + 1 })}>
          +1
      </button>
    </div>
  )
}
