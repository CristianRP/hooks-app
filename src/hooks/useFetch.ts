import { useEffect, useState } from 'react'

export type DataType<T> = {
  [K in keyof T]: T[K] extends (string | object | number | T[K])[] ? (string | object | number | T[K])[] : T[K];
}

type FetchResponse<T> = {
  data: DataType<T>;
  isLoading: boolean;
  hasError: boolean;
  error?: {
    code: number;
    message: string;
  }
}

export const useFetch = <T extends object>( url: string ): FetchResponse<T> => {
  const [state, setState] = useState({
    data: {},
    isLoading: true,
    hasError: false,
    error: {},
  });

  useEffect(() => {

    const getFetch = async() => {
      const resp = await fetch(url);


      console.log('parent-resp', resp);
      
      if ( !resp.ok ) {
        setState({
          data: {},
          isLoading: false,
          hasError: true,
          error: {
            code: resp.status,
            message: resp.statusText
          }
        });
        return;
      }

      const data = await resp.json();
      console.log(data);
      

      setState({
        data,
        isLoading: false,
        hasError: false,
        error: {}
      });
    }

    getFetch();
  }, [url]);

  return {
    data: state.data as DataType<T>,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
