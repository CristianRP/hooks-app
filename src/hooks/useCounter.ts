import { useState } from 'react'

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState( initialValue );

  const increment = ( step: number = 1 ) => setCounter( current => current + step);
  const decrement = () => {
    if (counter === 0) return;
 
    setCounter( counter - 1)
  };
  const reset = () => setCounter( initialValue );

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}
