import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './pages/Login'
import { Route,Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Home' element={<Home/>}/>

    </Routes>
    </>
  )
}

export default App
