import React from 'react'
import './SideBar.css'
import { Avatar, IconButton } from '@mui/material'
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import SideBarChart from './SideBarChart'

const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className="sideBarHeader">
        <Avatar src='./src/assets/avatar.jpg'/>
        <div className="sideBarHeaderRight">
            <IconButton><DonutLarge /></IconButton>
            <IconButton><Chat /></IconButton>
            <IconButton><MoreVert /></IconButton>
        </div>
      </div>
      <div className="sideBarSearch">
        <div className="sideBarSearchContainer">
            <SearchOutlined />
            <input type="text" placeholder='Search or start new chat' />
        </div>
      </div>
      <div className="sideBarChats">
        <SideBarChart addNewChart />
        <SideBarChart />
        <SideBarChart />
        <SideBarChart /> 
      </div>

    </div>
  )
}

export default SideBar
