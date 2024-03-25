
import { todoReducer } from '../../src/08-useReducer/todoReducer';
 
describe('Test on todoReducer custom hook', () => {
  const initialState = [{
    id: new Date().toISOString(),
    description: 'Test todo',
    done: false,
  }]

  test('should return the init state', () => {
    const newState = todoReducer( initialState, { type: '' } );

    expect( newState ).toBe( initialState );
  });

  test('should add a todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: new Date().toISOString(),
        description: 'Test todo',
        done: true,
      }
    }

    const newState = todoReducer( initialState, action );
    expect( newState ).toHaveLength( 2 );
    expect( newState ).toContain( action.payload );
  });

  test('should remove a todo', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: {
        id: initialState[0].id
      }
    }

    const newState = todoReducer( initialState, action );

    expect( newState ).toHaveLength(0);
  });

  test('should toggle done on todo', () => {
    const action = {
      type: '[TODO] Update Done Todo',
      payload: {
        id: initialState[0].id
      }
    }

    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBeTruthy();
  });

});
