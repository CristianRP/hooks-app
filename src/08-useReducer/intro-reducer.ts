
type Action = {
  type?: string;
  payload?: Todo;
}

type Todo = {
  id: number;
  todo: string;
  done: boolean;
}

const initialState: Todo[] = [{
  id: 1,
  todo: 'Get soul stone',
  done: false,
}];

const todoReducer = ( state: Todo[] = initialState, action: Action = {} ): Todo[] => {

  if ( action.type === '[TODO] add todo' ) {
    if (action.payload) {
      return [ ...state, action.payload ]
    }
  }

  return state as Todo[];
}

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Get power stone',
  done: false,
}

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );

console.log({ state: todos });

