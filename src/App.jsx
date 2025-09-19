import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Repair from './pages/Repair'
import FindOurLocation from './pages/FindOurLocation'
import NotFound from './components/NotFound'

function App() {
  console.log(window.innerWidth)
  return (
    <>
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>
        <main>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/repair' element={<Repair/>} />
            <Route path='/location' element={<FindOurLocation/>} />
          </Routes>
        </main>
        <footer>  
          <div>
            <h1 style={{color: ' #FF851B'}}>Quick Fix</h1>
            <h2 >Fast, reliable, and affordable phone & electronic repairs.</h2>
            <h2 >⚡ Trusted repairs | ✅ Quality guaranteed | 🌍 Eco-friendly solutions</h2>
          </div>
          <div>
            <h2 >Address: 123 Tech Street, London, UK 📍  </h2>
            <h2 >Phone: +44 20 7946 0123 📞  </h2>
            <h2 >Email: support@quickfixrepair.com ✉️  </h2>
          </div>
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
