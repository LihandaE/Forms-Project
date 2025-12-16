import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageOne from './Components/PageOne.jsx'
import SecondPage from './Components/SecondPage.jsx'
import ThirdPage from './Components/ThirdPage.jsx'
import ReviewPage from './Components/ReviewPage.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/page-two" element={<SecondPage />} />
          <Route path="/page-three" element={<ThirdPage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

