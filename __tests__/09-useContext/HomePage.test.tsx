import React from 'react';
import { render, screen } from '@testing-library/react';

import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Tests on <HomePage /> component' , () => {

  const user = {
    id: new Date().getTime(),
    name: 'Cristian',
    email: 'cristian@gmail.com',
  }
  
  test('should show the component without the user', () => { 

    render(
      <UserContext.Provider value={{ user: {}, setUser: () => {} }}>
        <HomePage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML ).toBe('{}');
  });

  test('should show the component with the user', () => {
    render(
      <UserContext.Provider value={{ user, setUser: () => {} }}>
        <HomePage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML ).toBe(JSON.stringify(user, null, 3));
  });

});