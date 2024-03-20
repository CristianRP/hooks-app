import { useCounter } from '../hooks/useCounter'

export const CounterWithHook = () => {

  const { counter, increment, decrement, reset } = useCounter(5);

  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl mb-5'>Counter with Custom Hook: { counter }</h1>

      <hr className='mb-5' />

      <div className="flex self-center">
        <button className='text-xl bg-blue-500 rounded-md cursor-pointer text-white p-2 m-3 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300'
          onClick={ () => increment(5) }>+1</button>
        <button className='text-xl bg-blue-500 rounded-md cursor-pointer text-white p-2 m-3 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300'
          onClick={ reset }>Reset</button>
        <button className='text-xl bg-blue-500 rounded-md cursor-pointer text-white p-2 m-3 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300'
          onClick={ decrement }>-1</button>
      </div>
    </div>
  )
}
