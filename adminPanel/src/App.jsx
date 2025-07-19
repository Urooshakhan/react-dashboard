import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './home'
import Login from'./assets/login'
function App() {
  return (
  <div className='grid-container'>
       <Login />; 
    {/* <Header/> */}
    {/* <Sidebar/> */}
    {/* <Home/> */}
  </div>
  )
}
export default App
