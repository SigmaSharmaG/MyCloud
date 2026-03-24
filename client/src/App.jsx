import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { Route,Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Vault from './pages/Vault'
import Price from './pages/Price'
import Contact from './pages/Contact'
import Feature from './pages/Feature'
import Security from './pages/Security'


function App() {

  return (
    <>
    
    <Routes>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Feature' element={<Feature/>}/>
      <Route path='/Vault' element={<Vault/>}/>
      <Route path='/Price' element={<Price/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Security' element={<Security/>}/>
    </Routes>
    </>
  )
}

export default App
