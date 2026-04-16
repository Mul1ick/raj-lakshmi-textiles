import { useState } from 'react'

const PALETTES = ['Calacatta Gold', 'Statuario', 'Nero Marquina', 'Carrara']

export default function Enquiry() {
  const [selected, setSelected] = useState('Calacatta Gold')

  return (
    <div className="bg-[#F7F7F5] text-on-surface antialiased">
      <main className="pt-32 pb-24">
        <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 pt-8">
            <span className="text-tertiary font-semibold tracking-widest text-xs uppercase mb-4 block">Consultation</span>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#1C1C1E] leading-tight mb-8 font-noto-serif">
              Shape Your Vision <br />in Stone.
            </h1>
            <p className="text-secondary text-lg leading-relaxed mb-12 max-w-md">
              Our curators and master stonemasons are ready to assist in selecting the perfect slab for your architectural masterpiece. Professional guidance for global logistics and bespoke finishing.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-primary">palette</span>
                </div>
                <div>
                  <h3 className="text-[#1C1C1E] font-bold text-xl mb-1">Material Curation</h3>
                  <p className="text-secondary text-sm">Access to exclusive quarries in Carrara, Tuscany, and beyond.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-primary">architecture</span>
                </div>
                <div>
                  <h3 className="text-[#1C1C1E] font-bold text-xl mb-1">Technical Advisory</h3>
                  <p className="text-secondary text-sm">Detailed load-bearing and chemical resistance consultations.</p>
                </div>
              </div>
            </div>
            <div className="mt-16 rounded-xl overflow-hidden grayscale contrast-125 opacity-90">
              <img
                className="w-full h-64 object-cover"
                alt="Close-up of a massive white marble block in a brightly lit Italian quarry atelier"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTLSdieRLrDuhpwPK70Ilj0m8eFBv3a7UWk3LbczDm5h5aRB7o6mC-6XeYAOMjGtngkduDdyVfHIWRfDBCDKELd6nWZJ4USaepCn8bT95aeROHQ_EOw67hi1GUhzdVMQ5lFTkM5iPE2b0Yd-ve1AACl0inQ7a7DigEkI_C5hhAa-jsFUdXnzewrqnMNx5sxvVwSsXgBRgrj14hhkyyc0bU-oRwRI3LFQN7Tsvl-ObTifkQeBwclJnIUi_UXZDWLvPUihIgkQtlBqCH"
              />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white p-12 lg:p-16 rounded-xl shadow-[0_20px_40px_rgba(28,28,30,0.04)]">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#8A8A8F] uppercase tracking-wider">Full Name</label>
                  <input
                    className="w-full bg-surface-container-low border-0 border-b border-transparent focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface placeholder:text-secondary/40"
                    placeholder="Julianne Moore"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#8A8A8F] uppercase tracking-wider">Email Address</label>
                  <input
                    className="w-full bg-surface-container-low border-0 border-b border-transparent focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface placeholder:text-secondary/40"
                    placeholder="j.moore@studio.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#8A8A8F] uppercase tracking-wider">Project Type</label>
                  <select className="w-full bg-surface-container-low border-0 border-b border-transparent focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface">
                    <option>Residential Interior</option>
                    <option>Commercial Lobby</option>
                    <option>Bespoke Furniture</option>
                    <option>Exterior Facade</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#8A8A8F] uppercase tracking-wider">Estimated Timeline</label>
                  <select className="w-full bg-surface-container-low border-0 border-b border-transparent focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface">
                    <option>Immediate (1-3 months)</option>
                    <option>Planning (3-6 months)</option>
                    <option>Future (6+ months)</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-[#8A8A8F] uppercase tracking-wider">Preferred Material Palette</label>
                <div className="flex flex-wrap gap-3 pt-2">
                  {PALETTES.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setSelected(p)}
                      className={`px-5 py-2 text-xs font-medium rounded-full transition-colors ${
                        selected === p
                          ? 'bg-primary text-white'
                          : 'bg-surface-container-high text-secondary hover:bg-surface-container-highest'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-[#8A8A8F] uppercase tracking-wider">Project Details</label>
                <textarea
                  className="w-full bg-surface-container-low border-0 border-b border-transparent focus:border-primary focus:ring-0 transition-all px-0 py-3 text-on-surface placeholder:text-secondary/40 resize-none"
                  placeholder="Describe the architectural intent and specific requirements..."
                  rows={4}
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#EF2029] text-white px-12 py-5 rounded-md text-sm font-bold tracking-widest uppercase hover:scale-102 transition-transform duration-200"
                >
                  Submit Enquiry
                </button>
                <p className="mt-6 text-xs text-secondary leading-relaxed max-w-sm">
                  By submitting, you agree to our heritage standards and data privacy protocols. A consultant will contact you within 24 business hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
