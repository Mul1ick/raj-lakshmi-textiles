import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-[#8A8A8F] pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 w-full max-w-screen-2xl mx-auto">
        <div className="md:col-span-1">
          <Link
            to="/"
            className="inline-flex bg-[#F7F7F5] p-3 rounded-md mb-8"
            aria-label="Raj Lakshmi Marbles home"
          >
            <img
              src="/logo.png"
              alt="Raj Lakshmi Marbles"
              className="h-16 w-auto"
            />
          </Link>
          <p className="text-sm leading-relaxed mb-8">
            Kishangarh-based natural stone specialists with four decades of sourcing, fabrication, and installation experience.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="border border-white/10 px-3 py-2 text-[10px] font-bold tracking-widest uppercase text-[#F7F7F5]">Global Sourcing</span>
            <span className="border border-white/10 px-3 py-2 text-[10px] font-bold tracking-widest uppercase text-[#F7F7F5]">Precision Fabrication</span>
            <span className="border border-white/10 px-3 py-2 text-[10px] font-bold tracking-widest uppercase text-[#F7F7F5]">Expert Installation</span>
          </div>
        </div>
        <div>
          <h5 className="text-[#F7F7F5] font-bold mb-8 tracking-widest text-xs">EXPLORE</h5>
          <ul className="space-y-4 text-sm">
            <li><Link className="hover:text-[#F7F7F5] transition-colors" to="/">Home</Link></li>
            <li><Link className="hover:text-[#F7F7F5] transition-colors" to="/about">About Raj Lakshmi</Link></li>
            <li><Link className="hover:text-[#F7F7F5] transition-colors" to="/catalog">Marble Catalogue</Link></li>
            <li><Link className="hover:text-[#F7F7F5] transition-colors" to="/clients">Client Work</Link></li>
            <li><Link className="hover:text-[#F7F7F5] transition-colors" to="/enquiry">Enquiry</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#F7F7F5] font-bold mb-8 tracking-widest text-xs">SOLUTIONS</h5>
          <ul className="space-y-4 text-sm">
            <li>Block and slab selection</li>
            <li>Imported and Indian marble curation</li>
            <li>Custom cutting and finishing</li>
            <li>Residential and commercial projects</li>
            <li>End-to-end fitting support</li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#F7F7F5] font-bold mb-8 tracking-widest text-xs">CONTACT</h5>
          <p className="text-sm leading-loose mb-6">
            Kishangarh, Rajasthan <br />
            Heart of India's stone industry
          </p>
          <Link
            to="/enquiry"
            className="inline-flex items-center gap-3 bg-[#bb0016] text-white px-5 py-3 rounded-md text-xs font-bold tracking-widest uppercase hover:bg-[#EF2029] transition-colors"
          >
            Send Enquiry
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-12 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase font-bold">
        <p>© {new Date().getFullYear()} Raj Lakshmi Marbles. All Rights Reserved. Crafted for Prestige.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link className="hover:text-[#F5B938] transition-colors" to="/catalog">Catalogue</Link>
          <Link className="hover:text-[#F5B938] transition-colors" to="/enquiry">Start a Project</Link>
        </div>
      </div>
    </footer>
  )
}
