import React from 'react'
import ListItem from './ListItem';

const MenuList = ({list = []}) => {
  return (
    <ul>
        {
        list && list.length ?
        list.map((menuItem)=><ListItem key={menuItem.lable} item={menuItem} />)
        : null
        }
    </ul>
  )
}

export default MenuList