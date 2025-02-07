import React, { useEffect, useState } from 'react'

const BgGen = () => {

    const [type,setType] = useState("hex");
    const [color, setcolor] = useState("#000000");
    useEffect(()=>{
        type === "hex" ? RandomHex() : RandomRGB();
    },[type])
    function randomNumber(n){
        return Math.floor(Math.random() * n);
    }
    function handleChange(){
        type === "hex" ? RandomHex():RandomRGB();
    }
    function RandomHex(){
        let arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        let hex = "#";

        for(let i = 0 ; i < 6; i++){
            hex += arr[randomNumber(arr.length)];
        }
        setcolor(hex);
    }
    function RandomRGB(){

        let one = randomNumber(255);
        let two = randomNumber(255);
        let three = randomNumber(255);

        let rgb = `rgb(${one},${two},${three})`;
        setcolor(rgb);
    }
  return (
    <div style={{
        width:"100vw",
        height:"100vh",
        backgroundColor:color,
        display:"flex",
        justifyContent:"start",
        flexDirection:"column",
        alignItems:"center",
        paddingTop:"10px",
        color:"white"
    }}
    className='container'>
        <div>
            <button onClick={() => setType("hex")}>Random HEX color</button>
            <button onClick={() => setType("rgb")}>Random RGB color</button>
            <button onClick={() => handleChange()}>Generate Random Color</button>
        </div>

        <h1 className='heading' >{type}</h1>
        <h1 className='heading' >{color}</h1>
    </div>
  )
}

export default BgGen