import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PresentIllnessInformation from './Components/PresentIllnessInformation.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PresentIllnessInformation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

