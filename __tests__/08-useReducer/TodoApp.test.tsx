import React from 'react';
import { render, screen } from '@testing-library/react';

import { TodoApp } from '../../src/08-useReducer/TodoApp'
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('Tests on <TodoApp />', () => {

  jest.mocked(useTodo).mockReturnValue({
    todos: [
      { id: new Date().toISOString(), description: 'Todo #1', done: false },
      { id: new Date().toDateString(), description: 'Todo #2', done: true },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });
  
  test('should show the component', () => { 

    render(<TodoApp />);
    // screen.debug();
    expect( screen.getByText('Todo #1') ).toBeTruthy();
    expect( screen.getByText('Todo #2') ).toBeTruthy();
    expect( screen.getByRole('textbox') ).toBeTruthy();
  });

});
