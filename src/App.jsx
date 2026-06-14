import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ResultPage from  './pages/ResultPage'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/result" element={<ResultPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App