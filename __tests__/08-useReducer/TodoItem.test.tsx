import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Tests on <TodoItem /> component', () => {

  const todo = {
    id: new Date().toISOString(),
    description: 'Soul stone',
    done: false,
  }

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks() );

  test('should show the pending Todo', () => {

    render(<TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo={ onDeleteTodoMock } />)
    
    const liElement = screen.getByRole('listitem');
    expect( liElement.className ).toBe('flex justify-between border border-gray-500 p-2');

    const spanElement = screen.getByLabelText('span');
    
    expect( spanElement.className ).toBe('self-center w-3/5 ');
  });

  test('should show the done Todo', () => {

    todo.done = true;

    render(<TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo={ onDeleteTodoMock } />)

    const spanElement = screen.getByLabelText('span');
    
    expect( spanElement.className ).toBe('self-center w-3/5 line-through');
  });

  test('should call ToggleTodo when on click on span', () => {
    render(<TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo={ onDeleteTodoMock } />)

    const spanElement = screen.getByLabelText('span');
    fireEvent.click( spanElement );

    expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
  });

  test('should call onDeleteTodo when click on the button', () => {
    render(<TodoItem todo={ todo } onToggleTodo={ onToggleTodoMock } onDeleteTodo={ onDeleteTodoMock } />)

    const deleteButton = screen.getByText('Delete');
    fireEvent.click( deleteButton );
    
    expect( onDeleteTodoMock ).toHaveBeenLastCalledWith( todo.id );
  });
});
