import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Clients from './pages/Clients'
import Enquiry from './pages/Enquiry'
import About from './pages/About'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
      <WhatsAppFloat />
      <Footer />
    </BrowserRouter>
  )
}