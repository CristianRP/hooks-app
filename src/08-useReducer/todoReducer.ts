import { Todo } from './TodoList';

interface Payload {
  id?: Todo['id'];
  descripion?: Todo['description'];
  done?: Todo['done'];
}

export type Action = {
  type: string;
  payload?: Payload;
}

export const todoReducer = (initialState: Todo[], action: Action): Todo[] => {

  switch( action.type ) {
    case '[TODO] Add Todo':
      return [ ...initialState, action.payload! as Todo ];
    case '[TODO] Remove Todo':
      return initialState.filter(todo => todo.id !== action.payload!.id );
    case '[TODO] Update Done Todo':
      return initialState.map(todo => {
        if (todo.id === action.payload?.id) {
          return {
            ...todo,
            done: !todo.done,
          }
        }

        return todo;
      })
    default:
      return initialState;
  }

}
