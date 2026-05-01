import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="bg-[#F7F7F5] text-[#1C1C1E] antialiased">
      <main className="pt-32 pb-24">
        
        {/* Hero Section */}
        <section className="px-12 max-w-screen-2xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-[#F5B938] font-bold tracking-[0.3em] text-xs uppercase mb-6 block font-body">Our Heritage</span>
              <h1 className="text-6xl lg:text-8xl font-bold font-noto-serif leading-[1.05] tracking-tight mb-8">
                The Poetry of <br />
                <span className="text-[#bb0016]">Earth, Curated.</span>
              </h1>
              <p className="text-[#8A8A8F] text-xl leading-relaxed max-w-lg font-body">
                Since 1988, Raj Lakshmi Marbles has traveled to the deepest quarries of the world to extract masterpieces. We are not just suppliers; we are curators of geological history.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Statuario marble — the signature white of Raj Lakshmi's curated collection"
                  src="https://akvinternationalstones.com/wp-content/uploads/2024/09/STATUARIO-CARRARA.png"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* The Manifesto / Story */}
        <section className="bg-white py-32 border-y border-[#1C1C1E]/5">
          <div className="px-12 max-w-screen-xl mx-auto text-center">
            <span className="material-symbols-outlined text-4xl text-[#bb0016] mb-8">diamond</span>
            <h2 className="text-4xl md:text-5xl font-noto-serif font-bold leading-tight max-w-4xl mx-auto mb-10">
              "We believe that premium quality should not be a privilege, but a standard built on a proven track record of reliability."
            </h2>
            <p className="text-[#8A8A8F] text-lg max-w-2xl mx-auto leading-relaxed">
              For over three and a half decades, we have seen the industry evolve. We leverage this deep institutional knowledge to anticipate challenges, source the rarest veins, and provide high-end solutions that maximize your architectural investment.
            </p>
          </div>
        </section>

        {/* Full Width Image Break */}
        <section className="w-full h-[60vh] relative overflow-hidden">
          <img
            className="w-full h-full object-cover mix-blend-multiply opacity-90"
            alt="Aerial view of a marble quarry showing layers of extracted stone"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcGWxN4P-HsDbXWVcei0nQO28gLwRslsifkO0h_C45ijEWdRICgWW_gg6WSSiUy5Nwf0BP1vGTIXZrVt9QMjL_9qPlcrFNgbJ78PRcl1PGHXn43FuvFrxzUDqfc9EkzJzIrcGa7og9xq5Ltmsxtbi9oqQRcZknxdKWIo2lo0ycOX3g4gDEUUWJNASMgJsxE8w-urAeWzfAb4F9wCc7936OE6lfyv1dAS6HFfs2E-Flc4mqZYlcemOfb_J5Ba8KIkbSih6wB5oJQhuW" // Placeholder from your existing assets
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#1C1C1E]/30 flex items-center justify-center">
             <span className="text-white font-bold tracking-[0.5em] text-sm uppercase">The Origin of Prestige</span>
          </div>
        </section>

        {/* Core Values (Glassmorphism inspired) */}
        <section className="py-32 px-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl font-noto-serif font-bold text-[#1C1C1E]">The Raj Lakshmi Ethos</h2>
            </div>
            <Link to="/enquiry" className="mt-6 md:mt-0 border-b-2 border-[#bb0016] text-[#1C1C1E] pb-1 text-sm font-bold tracking-widest uppercase hover:text-[#bb0016] transition-colors">
              Partner With Us
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'landscape',
                title: 'Global Sourcing',
                desc: 'Direct partnerships with exclusive quarries in Italy, Greece, and beyond ensure we hand-select only the finest blocks before they reach the market.'
              },
              {
                icon: 'architecture',
                title: 'Precision Craft',
                desc: 'Our state-of-the-art facility pairs decades of master stonemasonry with modern technology to guarantee exact cuts and bespoke finishes.'
              },
              {
                icon: 'handshake',
                title: 'Enduring Legacy',
                desc: 'We are committed to the end result. Our focus remains on delivering products that provide long-term utility and architectural permanence.'
              }
            ].map((value) => (
              <div key={value.title} className="bg-white p-10 rounded-2xl shadow-[0_10px_30px_rgba(28,28,30,0.03)] hover:-translate-y-2 transition-transform duration-500">
                <div className="w-14 h-14 bg-[#f4f4f2] rounded-full flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-[#1C1C1E] text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold font-noto-serif text-[#1C1C1E] mb-4">{value.title}</h3>
                <p className="text-[#8A8A8F] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}