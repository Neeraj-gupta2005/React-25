import { useState } from 'react'
import QRCode from 'react-qr-code'
function App() {
  const [qrcodeValue, setqrcodeValue] = useState('');
  const [inputValue, setinputValue] = useState('');

  function handleClick(){
    setqrcodeValue(inputValue);
  }

  return (
    <>
      <div>
        <h1>Qr Code Generator</h1>
        <div>
          <input type="text" onChange={(e) => setinputValue(e.target.value)} placeholder='Enter the value' />
          <button disabled={inputValue === "" || inputValue.trim() === ""} onClick={()=>handleClick()}>Generate</button>
        </div>

        <div>
          <QRCode name='qrcode' value={qrcodeValue} />
        </div>
      </div>
    </>
  )
}

export default App
