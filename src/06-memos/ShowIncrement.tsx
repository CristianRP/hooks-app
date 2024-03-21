import { memo } from 'react';

export const ShowIncrement = memo(({ increment }: { increment: (step: number) => void }) => {

  console.log('I render again :(');
  

  return (
    <button
      className='m-2 p-2 bg-purple-800 text-white rounded-md'
      onClick={() => increment( 5 ) }
      >
      Increment
    </button>
  )
})
