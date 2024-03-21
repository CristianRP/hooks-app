import { useFetch } from '../hooks'
import { QuoteStatus } from './QuoteStatus'
import { Quote } from './Quote'
import { useState } from 'react'

export const Layout = () => {

  const [ reload, setReload ] = useState(false);
  const { isLoading, hasError, data } = useFetch<Quote[]>(`https://api.breakingbadquotes.xyz/v1/quotes/`, false, reload);
  
  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl font-bold'>BreakingBad Quotes</h1>
      <hr className='mt-2' />


      {
        !isLoading && hasError && <QuoteStatus message='Error' color='bg-red-600' />
      }

      {
        isLoading && !hasError && <QuoteStatus message='Loading...' />
      }

      {
        !isLoading && <Quote {...data[0]} />
      }

      <button
        className='m-2 p-2 bg-green-800 rounded-md text-white active:bg-green-700 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500'
        onClick={ () => setReload(!reload) }
        >
        Next Quote
      </button>
    </div>
  )
}
