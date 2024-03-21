import { memo } from 'react';

type ChildTypes = {
  value: number;
  increment: ( value: number ) => void
}

export const Child = memo(({ value, increment }: ChildTypes) => {

  console.log(' Render again :( ');
  

  return (
    <button
      className='m-2 p-2 bg-purple-800 text-white rounded-md'
      onClick={() => increment( value ) }
      >
      { value }
    </button>
  )
})

