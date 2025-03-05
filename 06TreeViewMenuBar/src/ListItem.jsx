import React from 'react'
import MenuList from './MenuList'

const ListItem = ({item = []}) => {
  return (
    item && item.children && item.children.length > 0 ?
    <li>
        <p>{item.label}</p>
        <MenuList list = {item.children}/>

    </li>
    : 
    <p>{item.label}</p>
  )
}

export default ListItem