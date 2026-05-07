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
import MobilePage from './pages/MobilePage'
import useIsMobile from './hooks/useIsMobile'
import './index.css'

function AppRoutes() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <Routes>
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="*" element={<MobilePage />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/enquiry" element={<Enquiry />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <WhatsAppFloat />
      <Footer />
    </BrowserRouter>
  )
}
