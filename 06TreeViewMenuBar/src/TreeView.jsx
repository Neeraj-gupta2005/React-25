import React from 'react'
import MenuList from './MenuList';
import menus from './data.js';

const TreeView = () => {
  return (
    <div className='tree-view-container'>
        <MenuList list={menus} />
    </div>
  )
}

export default TreeView