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

const localCache: { [key: string]: DataType<unknown> } = {};

export const useFetch = <T extends object>( url: string, cache: boolean = true, reload: boolean = false ): FetchResponse<T> => {
  const [state, setState] = useState({
    data: {},
    isLoading: true,
    hasError: false,
    error: {},
  });

  useEffect(() => {

    const getFetch = async() => {
      if (cache && localCache[url]) {
        console.log('using-cache');
        setState({
          data: localCache[url] as DataType<T>,
          isLoading: false,
          hasError: false,
          error: {}
        });
        return;
      }

      setLoadingState();

      const resp = await fetch(url);


      await new Promise(resolve => setTimeout(resolve, 2000));
      
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

      setState({
        data,
        isLoading: false,
        hasError: false,
        error: {}
      });

      localCache[url] = data as DataType<T>;
    }

    getFetch();
  }, [url, cache, reload]);

  const setLoadingState = () => {
    setState({
      data: {},
      isLoading: true,
      hasError: false,
      error: {}
    });
  }

  return {
    data: state.data as DataType<T>,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
