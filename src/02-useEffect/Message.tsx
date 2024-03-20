import { useEffect } from 'react'

export const Message = () => {
  useEffect(() => {
    // console.log('Message mounted');

    const onMouseMove = ({ x, y }:MouseEvent) => {
      const coords = { x, y };
      console.log("typeof" , typeof x);
      
      console.log(coords);
    }

    window.addEventListener('mousemove', onMouseMove);
  
    return () => {
      // console.log('MEssage unmounted');
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, [])
  

  return (
    <div>
      <h3>User already exists</h3>
    </div>
  )
}
