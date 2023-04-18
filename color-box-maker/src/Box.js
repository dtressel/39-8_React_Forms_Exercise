import './Box.css';

const Box = ({ backgroundColor, width, height }) => {
  return (
    <div 
      style={{ backgroundColor, width: `${width}px`, height: `${height}px` }} 
      className='Box-box'
    ></div>
  )
}

export default Box;