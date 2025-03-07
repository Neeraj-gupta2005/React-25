import React, { useEffect, useState } from 'react'

function useTheme(key,defaultTheme) {
  const [value,setValue] = useState(()=>{
    let currentTheme;

    try{
        currentTheme = JSON.parse(localStorage.getItem(key) || defaultTheme);

    }catch(error){
        console.log(error);
        currentTheme = defaultTheme;
    }
    
    return currentTheme
})
console.log(value);

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value));
  },[key,value])

  return [value,setValue]
}

export default useTheme