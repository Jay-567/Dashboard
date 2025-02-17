import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './sidebar'
import Home from './Home'

function App() {


  return (
    <div className='grid-container'>
    <Header/>
    <Sidebar/>
    <Home />
    </div>
  )
}

export default App

