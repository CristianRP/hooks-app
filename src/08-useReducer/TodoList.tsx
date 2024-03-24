import { TodoItem } from './TodoItem';

export type Todo = {
  id: string;
  description: string;
  done: boolean;
}

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onToogleTodo: (id: string) => void;
}

export const TodoList = ({ todos, onDeleteTodo, onToogleTodo }: TodoListProps) => {


  return (
    <ul className='list-inside list-decimal'>
      {
        todos.map(todo => (
          <TodoItem key={ todo.id } todo={ todo } onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToogleTodo } />
        ))
      }
    </ul>
  )
}
