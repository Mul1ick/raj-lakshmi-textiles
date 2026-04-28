import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Clients from './pages/Clients'
import Enquiry from './pages/Enquiry'
import About from './pages/About' // 1. Import the About page
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* 2. Add the Route */}
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
