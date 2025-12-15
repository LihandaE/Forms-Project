import React from 'react'
import ThirdPage from "./Components/ThirdPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
  
export default function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}




