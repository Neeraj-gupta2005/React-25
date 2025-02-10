import {FaStar} from 'react-icons/fa';
import './index.css' 
import { useState } from 'react';


function App({noOfStar = 5}) {

  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);

  function handleMouseClick(index){
    setRate(index);
  }

  function handleMouseHover(index){
    setHover(index);
  }

  function handleMouseLeave(){
    setHover(0);
  }
  return (
    <>
    {
      [...Array(noOfStar)].map((_,index) => {
        index += 1;
        return <FaStar
        key={index}
        size={50}
        className={index <= (hover || rate) ? 'set' : 'unset'}
        onClick={() => handleMouseClick(index)}
        onMouseMove={() => handleMouseHover(index)}
        onMouseLeave={() => handleMouseLeave()}
        />
      })
      
    }
    </>
  )
}

export default App
