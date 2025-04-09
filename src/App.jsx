import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import Blog from './Components/Blog'
import TrashToTreasure from './Components/TrashToTreasure'
import Resident from './Components/Resident'
import Business from './Components/Business'
import Preloader from './Components/Preloader'

function App() {
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      <div className="min-h-screen w-screen overflow-x-hidden">
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<ContactUs />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/TrashToTreasure" element={<TrashToTreasure />} />
              <Route path="/Services/Resident" element={<Resident />} />
              <Route path="/Services/Business" element={<Business />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </>
  )
}

export default App
