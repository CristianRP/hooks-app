import React from 'react';
import { render, screen } from '@testing-library/react';

import { Layout } from '../../src/05-useLayoutEffect/Layout';
import { useFetch } from '../../src/hooks';

jest.mock('../../src/hooks/useFetch');

describe('Tests on <Layout /> Componet', () => {

  beforeAll(() => {
    jest.mocked(useFetch).mockReturnValue({
      data: {},
      isLoading: true,
      hasError: false
    })
  })

  test('should match snapshot', () => {
    const { container } = render(<Layout />);

    expect( container ).toMatchSnapshot();
  });
  
  test('should show the component by default', () => {
    render(<Layout />);

    expect( screen.getByText('Loading...') );
    expect( screen.getByText('BreakingBad Quotes') );

    const nextButton = screen.getByRole<HTMLButtonElement>('button', { name: 'Next Quote' });

    console.log(nextButton.disabled);
    
    expect( nextButton.disabled ).toBeTruthy();
  });

  test('should show a Quote', () => {
    jest.mocked(useFetch).mockReturnValue({
      data: [{
        author: 'Cristian',
        quote: 'Test Quote'
      }],
      isLoading: false,
      hasError: false
    })

    render(<Layout />);

    expect( screen.getByText('Test Quote') ).toBeTruthy();
    expect( screen.getAllByText('Cristian') ).toBeTruthy();

    const nextButton = screen.getByRole<HTMLButtonElement>('button', { name: 'Next Quote' });
    expect( nextButton.disabled ).toBeFalsy();

  });

});