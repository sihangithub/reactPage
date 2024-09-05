import { useState } from 'react'
import './App.css'
import './Navbar.css'
import Navbar from './COMPONENT/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
      
      <BrowserRouter >
        <Navbar />
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Services' element={<Services />}></Route>
            </Routes>
      </BrowserRouter>
  )
}

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './PAGES/Home'
import Services from './PAGES/Services'

export default App
