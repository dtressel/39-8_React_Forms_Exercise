import { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
  const [inputData, setInputData] = useState('');

  const handleChange = (evt) => {
    setInputData(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(inputData);
    setInputData('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputData} onChange={handleChange}/>
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodoForm;