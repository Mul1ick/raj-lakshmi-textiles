import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Automatically close the mobile menu when the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Prevent background scrolling when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  // Desktop link styling
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-[#1C1C1E] border-b-2 border-[#F5B938] pb-1 font-body text-sm tracking-wide'
      : 'text-[#8A8A8F] hover:text-[#1C1C1E] transition-colors duration-300 font-body text-sm tracking-wide'

  // Mobile link styling (larger, bolder typography)
  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? 'text-[#1C1C1E] font-noto-serif text-4xl font-bold tracking-wide'
      : 'text-[#8A8A8F] hover:text-[#1C1C1E] transition-colors duration-300 font-noto-serif text-4xl tracking-wide'

  return (
    // {/* Conditionally make the nav header transparent when the menu is open to prevent double-blurring */}
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ease-in-out ${isMobileMenuOpen ? 'bg-transparent' : 'bg-[#F7F7F5]/80 backdrop-blur-md'}`}>
      
      {/* Top Bar Container */}
      <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-screen-2xl mx-auto relative z-50">
        
        {/* Logo */}
        <Link className="flex items-center z-50" to="/">
          <img 
            src="/logo-black-red.png" 
            alt="Raj Lakshmi Marbles" 
            className="h-12 md:h-14 w-auto hover:opacity-80 transition-opacity duration-300" 
          />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          <NavLink className={linkClass} to="/">Collections</NavLink>
          <NavLink className={linkClass} to="/about">About</NavLink> {/* Added here */}
          <NavLink className={linkClass} to="/catalog">Catalog</NavLink>
          <NavLink className={linkClass} to="/clients">Clients</NavLink>
          <NavLink className={linkClass} to="/enquiry">Enquiry</NavLink>
        </div>
        
        {/* Right Side Icons & CTA */}
        <div className="flex items-center space-x-6 md:space-x-8 z-50">
          <button className="material-symbols-outlined text-[#1C1C1E]">search</button>
          
          <Link
            to="/enquiry"
            className="hidden md:block bg-[#bb0016] text-white px-6 py-2.5 rounded-md font-body text-sm font-semibold tracking-wide hover:scale-105 transition-transform duration-200"
          >
            Enquire Now
          </Link>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden material-symbols-outlined text-[#1C1C1E] text-3xl focus:outline-none"
          >
            {isMobileMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 h-screen w-full bg-[#F7F7F5]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-10 pt-16 transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <NavLink className={mobileLinkClass} to="/">Collections</NavLink>
        <NavLink className={mobileLinkClass} to="/about">About</NavLink> {/* Added here */}
        <NavLink className={mobileLinkClass} to="/catalog">Catalog</NavLink>
        <NavLink className={mobileLinkClass} to="/clients">Clients</NavLink>
        <NavLink className={mobileLinkClass} to="/enquiry">Enquiry</NavLink>
        
        <Link
          to="/enquiry"
          className="bg-[#bb0016] text-white px-10 py-4 mt-8 rounded-md font-body text-sm font-bold tracking-widest uppercase hover:scale-105 transition-transform duration-200 shadow-xl shadow-[#bb0016]/20"
        >
          Book Consultation
        </Link>
      </div>

    </nav>
  )
}
