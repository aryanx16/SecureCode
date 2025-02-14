import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import {  Toaster } from 'react-hot-toast'

import Landing from './pages/Landing'

function App() {
  return (
    <>
      <BrowserRouter>
          <Toaster/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
