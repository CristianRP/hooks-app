import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  const onIncrement = useCallback((step = 1) => {
    setCounter( value => value + step )
  }, [])

  // const onIncrement = () => {
  //   setCounter(counter + 1);
  // }

  return (
    <>
      <h1>useCallback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ onIncrement } />
    </>
  )
}
