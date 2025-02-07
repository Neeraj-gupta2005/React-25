import './style.css';
import data from './data';
import { use, useState } from 'react';

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const [btnText,setBtnText] = useState("Enable MultiSelection");

    function handleText(){
        enableMultiSelection === false ? 
        setBtnText("Enable SingleSelection") : setBtnText("Enable MultiSelection") ;
    }
    function handleClick(id) {
        setSelected(id == selected ? null : id);
    }

    function handleMulti(id) {
        let copyMulti = [...multiple];

        let indexOfId = copyMulti.indexOf(id);
        if (indexOfId === -1) {
            copyMulti.push(id);
        } else {
            copyMulti.splice(indexOfId, 1);
        }
        setMultiple(copyMulti);
    }
    return <>
        <div className="container">
            <button 
            onClick={() => {
                handleText();
                setEnableMultiSelection(!enableMultiSelection);
            }} className='btn'>
                {btnText}
            </button>
            <div className='box'>
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id} className='data-box'>
                            <div onClick={enableMultiSelection ? () => handleMulti(item.id) : () => handleClick(item.id)
                            } className='upper-section'>
                                <div className='question'>{item.question}</div>
                                <div className='plus-icon'>+</div>
                            </div>


                            {enableMultiSelection
                                ? (multiple.indexOf(item.id) !== -1 && <div className='answer'>{item.answer}</div>)
                                : (selected === item.id && <div className='answer'>{item.answer}</div>)
                            }

                        </div>
                    ))
                ) : (
                    <div>Data has not been found</div>
                )}
            </div>
        </div>
    </>
}