import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'

const SideBarChart = ({addNewChart}) => {

    const [seed, setSeed] = useState(0)

    useEffect(() => {
        let randomNum = Math.floor(Math.random() * 100)
        
        setSeed(randomNum)
    }, [])

    const createChart = () => {
        const roomName = window.prompt('Enter Chart Name: ');

        if (roomName) {
            //Do some database stuff
        }

    }

  return !addNewChart ? (
    <div className='sideBarChart'>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sideBarChartInfo">
        <h2>Room Name</h2>
        <p>Last message typed</p>
      </div>
    </div>
  ):(
    <div onClick={createChart} className="sideBarChart">
        <h2>Add New Chart</h2>
    </div>
  )
}

export default SideBarChart
