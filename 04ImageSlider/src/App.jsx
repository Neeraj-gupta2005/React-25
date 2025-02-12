import { useState,useEffect } from "react";
import './index.css';
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa';

function App() {
  const [url, seturl] = useState([])
  const [current, setcurrent] = useState(0);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);

  async function fetchImages(){
    try{
      setloading(true);
      const response = await fetch('https://picsum.photos/v2/list?page=1&limit=6');
      const data = await response.json();

      if(data){
        console.log(data);
        seturl(data);
        setloading(false);
      }
    }
    catch(e){
      seterror(e);
      setloading(false);
    }
  }
  
  useEffect(() => {
    fetchImages();
  }, [])
  
  if(loading){
    return <div>wait data is loading !</div>
  }

  if(error !== null){
    return <div>error occurred !</div>
  }

  function handlePrev(index){
    setcurrent(((index - 1) + url.length) % url.length);
  }

  function handleNext(index){
    setcurrent((index + 1) % url.length);
  }


  return (
    <>
      <div className="container">
        <button className="left">
          <FaArrowCircleLeft
          onClick={() => handlePrev()}
          size={20}
          />
        </button>
          <div className="image-box">
            {
              url.map((item,index)=>(
                <img 
                key={index}
                src={item.download_url} 
                alt="image"
                className={index === current ? "showImage" : "hideImage"}
                />
              ))
            }
          </div>
        <button className="right">
          <FaArrowCircleRight
          onClick={() => handleNext()}
          size={20}
          />
        </button>
      </div>
    </>
  )
}

export default App
