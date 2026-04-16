export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-[#8A8A8F] pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 w-full max-w-screen-2xl mx-auto">
        <div className="md:col-span-1">
          <span className="text-3xl font-black text-[#F7F7F5] mb-8 block font-noto-serif">Digital Atelier.</span>
          <p className="text-sm leading-relaxed mb-8">The curated destination for architectural stone and premium marble surfaces. Since 1988.</p>
          <div className="flex space-x-6">
            <a className="hover:text-[#F5B938] transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="hover:text-[#F5B938] transition-colors" href="#"><span className="material-symbols-outlined">camera</span></a>
            <a className="hover:text-[#F5B938] transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
          </div>
        </div>
        <div>
          <h5 className="text-[#F7F7F5] font-bold mb-8 tracking-widest text-xs">COLLECTIONS</h5>
          <ul className="space-y-4 text-sm">
            <li><a className="hover:text-[#F7F7F5] transition-colors" href="#">Italian Statuario</a></li>
            <li><a className="hover:text-[#F7F7F5] transition-colors" href="#">Exotic Quartzites</a></li>
            <li><a className="hover:text-[#F7F7F5] transition-colors" href="#">Classic Granites</a></li>
            <li><a className="hover:text-[#F7F7F5] transition-colors" href="#">Rare Onyx</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#F7F7F5] font-bold mb-8 tracking-widest text-xs">HERITAGE</h5>
          <ul className="space-y-4 text-sm">
            <li><a className="hover:text-[#F7F7F5] transition-colors" href="#">Sustainability</a></li>
            <li><a className="hover:text-[#F7F7F5] transition-colors" href="#">Our History</a></li>
            <li><a className="hover:text-[#F7F7F5] transition-colors" href="#">Press & Media</a></li>
            <li><a className="hover:text-[#F7F7F5] transition-colors" href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#F7F7F5] font-bold mb-8 tracking-widest text-xs">VISIT US</h5>
          <p className="text-sm leading-loose">
            402 Industrial Estate, <br />
            Marble District, <br />
            Rajasthan, 305801 <br />
            <span className="text-[#F5B938] mt-4 block">hello@digitalatelier.com</span>
          </p>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-12 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase font-bold">
        <p>© 2024 Digital Atelier Marble. All Rights Reserved. Crafted for Prestige.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a className="hover:text-[#F5B938] transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-[#F5B938] transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
