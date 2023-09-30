import React, { useEffect, useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material'

const Chat = () => {

    const [seed, setSeed] = useState(0)
    const [Input, setInput] = useState('')

    useEffect(() => {
        let randomNum = Math.floor(Math.random() * 100)
        
        setSeed(randomNum)
    }, [])

    const sendInput = e => {
        e.preventDefault()

        console.log('dfghj')
        setInput('')
        
    }

  return (
    <div className='chat'>
      
      <div className="chatHeader">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chatHeaderInfo">
            <h3>Room Name</h3>
            <p>Last seen at ...</p>
        </div>
        <div className="chatHeaderRight">
            <IconButton><SearchOutlined /></IconButton>
            <IconButton><AttachFile /></IconButton>
            <IconButton><MoreVert /></IconButton>
        </div>
      </div>
      <div className="chatBody">
        <div className={`chatMessage ${true && 'ownerMessage' }`}>
            <p>
                <span className="chatName">Moses Musoke</span>
                Hey friends
                <span className="chatTimestamp">3:52pm</span>
            </p>
        </div>
      </div>
      <div className="chatFooter">

        <InsertEmoticon />
        <form>
            <input value={Input} onChange={e => setInput(e.target.value)} type="text" placeholder='Type a message' />
            <button onClick={sendInput} type='submit' >Send</button>
        </form>
        <Mic />
      </div>
    </div>
  )
}

export default Chat
