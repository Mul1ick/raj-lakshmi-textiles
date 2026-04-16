import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-[#1C1C1E] border-b-2 border-[#F5B938] pb-1 font-body text-sm tracking-wide'
      : 'text-[#8A8A8F] hover:text-[#1C1C1E] transition-colors duration-300 font-body text-sm tracking-wide'

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F7F7F5]/80 backdrop-blur-md transition-transform duration-200 ease-in-out">
      <div className="flex justify-between items-center px-12 py-6 w-full max-w-screen-2xl mx-auto">
        <Link className="text-2xl font-bold font-noto-serif text-[#1C1C1E] tracking-tight" to="/">
          Digital Atelier Marble
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          <NavLink className={linkClass} to="/">Collections</NavLink>
          <NavLink className={linkClass} to="/catalog">Catalog</NavLink>
          <NavLink className={linkClass} to="/clients">Clients</NavLink>
          <NavLink className={linkClass} to="/enquiry">Enquiry</NavLink>
        </div>
        <div className="flex items-center space-x-8">
          <button className="material-symbols-outlined text-[#1C1C1E]">search</button>
          <Link
            to="/enquiry"
            className="bg-[#bb0016] text-white px-6 py-2.5 rounded-md font-body text-sm font-semibold tracking-wide hover:scale-105 transition-transform duration-200"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
