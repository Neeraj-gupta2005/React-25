import {React , useState} from 'react'
import MenuList from './MenuList'


const ListItem = ({item = []}) => {
    const [showChildren, setshowChildren] = useState({});

    function handleClick(label){
        setshowChildren({
            ...showChildren, [label]: !showChildren[label]
        })

    }

  return ( 
    <li>
        <div style={{display:"flex", alignItems:"center" , gap:"10px"}}>
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ? 
                    (showChildren[item.label] ? <span onClick = {()=> handleClick(item.label)}> - </span>:<span onClick = {()=> handleClick(item.label)}>+</span>)
                : null
            }
        </div>
        {
            item && item.children && item.children.length && showChildren[item.label] ?
            <MenuList list = {item.children}/> 
            : null
        }
    </li>
    )
}

export default ListItem