import React from 'react'
import './App.css'
import SideBar from './SideBar'
import Chat from './Chat'

function App() {

  return (
    <div className='app'>

      <div className="appBody">
        {/* SideBar */}
        <SideBar />
        {/* Chat */}
        <Chat />
      </div>
    </div>
  )
}

export default App
