import React from 'react'
import {Routes, Route} from "react-router-dom"
import LoginPage from './components/pages/LoginPage'
import HomePage from './components/pages/HomePage'
import RegisterPage from './components/pages/RegisterPage'

function App() {
  return (

    <Routes>
    
      <Route path="/" element={<LoginPage/>}/>
      <Route path ="/home" element={<HomePage/>}/>
  <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
  )
}

export default App
