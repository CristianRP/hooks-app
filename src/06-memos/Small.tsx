import { memo } from 'react';


export const Small = memo(({ counter }: { counter: number }) => {

  console.log('render again :(');
  

  return (<small>{counter}</small>);
})
