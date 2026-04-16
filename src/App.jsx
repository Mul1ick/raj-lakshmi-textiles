import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Clients from './pages/Clients'
import Enquiry from './pages/Enquiry'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
