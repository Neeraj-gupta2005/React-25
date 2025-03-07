import { useState } from 'react'
import useTheme from './useTheme'
function App() {
  const [theme,setTheme] = useTheme('theme','light');

  function handleClick(){
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  console.log(theme);

  return (
    <>
      <div className='light-mode' data-theme = {theme}>
        <p>HELLO</p>
        <button onClick={()=>handleClick()}>Change Theme</button>
      </div>
    </>
  )
}

export default App
