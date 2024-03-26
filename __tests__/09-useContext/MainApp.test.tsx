import React from 'react';
import { render, screen } from '@testing-library/react';

import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Tests on <MainApp /> component', () => {
  test('should show the HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )

    expect( screen.getByText('HomePage') ).toBeTruthy();
  });

  test('should shwo the LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    )

    // screen.debug();
    expect( screen.getByText('LoginPage') ).toBeTruthy();
  });
});