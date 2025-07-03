import { useState } from 'react'
import Home from "./routes/Home.jsx"
import About from "./routes/About.jsx"
import Contact from "./routes/Contact.jsx"
import Service from "./routes/Service.jsx"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  )
}
export default App
