const Todo = ({ task, todoId, removeTodo }) => {

  const handleXClick = (evt) => {
    removeTodo(todoId);
  }

  return (
    <div>
      <span>{task}</span>
      <button onClick={handleXClick}>&#10006;</button>
    </div>
  )
}

export default Todo;