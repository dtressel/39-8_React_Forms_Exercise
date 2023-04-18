import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';
import { v4 as uuid } from 'uuid';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = (boxObj) => {
    setBoxes(() => [...boxes, { ...boxObj, id: uuid() }]);
  }

  const boxesHtml = boxes.map((box) => {
    return (
      <Box 
        width={box.width} 
        height={box.height} 
        backgroundColor={box.color} 
        key={box.id}
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