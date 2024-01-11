import { useState } from 'react'
import Background from './components/background'
import './App.css'
import Foreground from './components/foreground'

import { MdAddCircleOutline } from "react-icons/md";

function App() {


  return (
    <>
      <div className='realtive w-full h-screen bg-zinc-800'>
        <Background />
        <Foreground />

      </div>
    </>
  )
}

export default App
