import { useState } from "react";
import './NewBoxForm.css';
import { v4 as uuid } from 'uuid';

const colorArray = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 
  'maroon', 'fuchsia', 'lime', 'navy', 'teal', 'aqua', 'olive'];

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: 200,
    height: 100,
    color: 'red'
  }
  
  const [formData, setFormData] = useState(INITIAL_STATE);
  
  const handleChange = (evt) => {
    const{ name, value } = evt.target;
    setFormData(() => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  }

  return (
    <div className='NewBoxForm-wrapper'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='width'>Width</label>
          <input 
            id='width' 
            type='range' 
            min='50' 
            max='600' 
            step='50' 
            name='width' 
            value={formData.width} 
            onChange={handleChange}
          />
          <span>{formData.width}px</span>
        </div>
        <div>
          <label htmlFor='height'>Height</label>
          <input 
            id='height' 
            type='range' 
            min='50' 
            max='600' 
            step='50' 
            name='height' 
            value={formData.height} 
            onChange={handleChange} 
          />
          <span>{formData.height}px</span>
        </div>
        <div>
          <label htmlFor='color'>Color</label>
          <select id='color' name='color' onChange={handleChange} value={formData.color} >
            {colorArray.map(color => <option value={color} key={uuid()}>{color}</option>)}
          </select>
        </div>
        <div>
          <button type='submit'>Add New Box</button>
        </div>
      </form>
    </div>
  )
}

export default NewBoxForm;