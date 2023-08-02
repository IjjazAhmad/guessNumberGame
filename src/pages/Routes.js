import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Start from "./Start"
import Play from "./Play"

export default function CustomRoutes() {
  return (
    <BrowserRouter>
    <main>
    <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/play' element={<Play/>}/>
    </Routes>
    </main>
    </BrowserRouter>
  )
}
