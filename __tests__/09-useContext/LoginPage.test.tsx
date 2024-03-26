import React from 'react';

import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Tests on <LoginPage /> component', () => {
  
  test('should show the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: {}, setUser: () => {} }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML ).toBe('{}');
  });

  test('should call setUser on button Click', () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: {}, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const setUserButton = screen.getByText('Set User');
    fireEvent.click( setUserButton );

    expect( setUserMock ).toHaveBeenCalled();
    expect( setUserMock ).toHaveBeenCalledWith({
      id: 123,
      name: 'Cristian Ramirez',
      email: 'cristian@gmail.com',
    });
  });

});