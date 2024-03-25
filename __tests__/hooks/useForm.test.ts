import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks';
import { ChangeEvent } from 'react';

describe('Tests on useForm hook', () => {

  const initialForm = {
    name: 'Cristian',
    email: 'cristian@gmail.com',
  }

  test('should return the default values', () => {
    const { result } = renderHook( () => useForm(initialForm) );

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    })
  });

  test('should change the name in the form ', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const { onInputChange } = result.current;
    const newName = 'Jose';
    const event = { target: { name: 'name', value: newName } } as ChangeEvent<HTMLInputElement>;

    act(() => onInputChange(event))

    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);

  });

  test('should reset the name in the form ', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const { onInputChange, onResetForm } = result.current;
    const newName = 'Jose';
    const event = { target: { name: 'name', value: newName } } as ChangeEvent<HTMLInputElement>;

    act(() => {
      onInputChange(event);
      onResetForm();
    });

    expect(result.current.name).toBe( initialForm.name );
    expect(result.current.formState.name).toBe( initialForm.name );

  });
});