import { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { task, id: uuid() }]);
  }

  const removeTodo = (id) => {
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  return ( 
    <>
      <NewTodoForm addTodo={addTodo} />
      <div>
        {todos.map(({ task, id }) => <Todo task={task} 
                                           key={id} 
                                           todoId={id} 
                                           removeTodo={removeTodo} />)}
      </div>
    </>
  )
}

export default TodoList;