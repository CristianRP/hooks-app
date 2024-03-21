import { useRef } from 'react'

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef);

  const onClick = () => {
    console.log(inputRef);
    if (inputRef.current) {
      inputRef.current.select();
    }
  }

  return (
    <div className='flex flex-col'>
      <h1 className='text-xl font-bold'>Focus Screen</h1>
      <hr className='m-2' />

      <input
        ref={ inputRef }
        type="text"
        placeholder='Name'
        className='form-input rounded-md'
        />
      
      <button className='m-2 p-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300'
        onClick={ onClick }
        >
        Set Focus
      </button>

    </div>
  )
}
