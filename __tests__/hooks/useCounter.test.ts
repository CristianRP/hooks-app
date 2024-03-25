import { renderHook } from '@testing-library/react'

import { useCounter } from '../../src/hooks/';
import { act } from 'react-dom/test-utils';

describe('Tests on useCounter hook', () => {
  
  test('should return the default values', () => { 
    const { result } = renderHook( () => useCounter() )
    const { counter, decrement, increment, reset } = result.current;

    expect( counter ).toBe(10);
    expect( decrement ).toEqual(expect.any(Function));
    expect( increment ).toEqual(expect.any(Function));
    expect( reset ).toEqual(expect.any(Function));
  });

  test('should return the counter value as 100', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { counter } = result.current;

    expect( counter ).toBe(100);
  });

  test('should increment the counter', () => {
    const { result } = renderHook( () => useCounter(100) )
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect( result.current.counter ).toBe(103);
  });

  test('should decrement the counter', () => {
    const { result } = renderHook( () => useCounter(100) )
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    expect( result.current.counter ).toBe(99);
  });

  test('should reset the counter', () => {
    const { result } = renderHook( () => useCounter(100) )
    const { increment, reset } = result.current;

    act(() => {
      increment(2);
      reset();
    });

    expect( result.current.counter ).toBe(100);
  });

});
