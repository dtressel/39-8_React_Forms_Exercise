import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = (boxObj) => {
    setBoxes(() => [...boxes, boxObj]);
  }

  const boxesHtml = boxes.map((box, index) => {
    return (
      <Box 
        width={box.width} 
        height={box.height} 
        backgroundColor={box.color}
        key={index}
      />
    )
  })

  return (
    <>
      <NewBoxForm addBox={addBox} />
      <div className='BoxList-box-wrapper' >
        {boxesHtml}
      </div>
    </>
  )
}

export default BoxList;