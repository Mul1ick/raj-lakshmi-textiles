import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-surface text-on-surface">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Luxurious high-resolution close-up of Statuario marble with elegant gray veining on a pure white background with dramatic lighting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFdcE2M007vRFBuUYn4w0fUWT0qb0_5MvMWobK524PtSuK1yIW-br0BEQl3GzwLLQsiqlCcMhY4DKNs3f7xFJNZNlQqWY3xdVjuL2STpCVQ8VQ-Ao0eDdGx1nsgDgbDq0luVm2qH6kngK-pMQDJrtD0-qqJ7CAj48DyYQF1C8DEKbmi5SL6rPq3uP3QI-aAoSdEDolPACHCiGPKbMR6t-jNWnL6-Xv-lJ1pAhJpGA5aNQwMC1AAtqXwr3zCF3J8YXmoK3DgNILyjfW"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F7F5] via-[#F7F7F5]/40 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-12 lg:px-24">
          <div className="max-w-3xl">
            <span className="inline-block text-[#F5B938] font-bold tracking-[0.2em] text-xs mb-6 font-body">ESTABLISHED 1988 — RAJ LAKSHMI MARBLES</span>
            <h1 className="text-7xl md:text-8xl font-noto-serif font-black text-[#1C1C1E] leading-[0.95] tracking-tight mb-8">
              The Art of <br /><span className="text-[#bb0016]">Living Stone.</span>
            </h1>
            <p className="text-xl text-[#8A8A8F] font-body max-w-lg mb-10 leading-relaxed">
              Sourcing the world's most prestigious natural stones to create timeless architectural masterpieces. Hand-picked, curated, and crafted for perfection.
            </p>
            <div className="flex items-center space-x-8">
              <Link
                to="/catalog"
                className="bg-[#EF2029] text-white px-10 py-5 rounded-md font-body font-bold text-sm tracking-widest hover:scale-102 transition-transform duration-200 shadow-xl shadow-[#EF2029]/10"
              >
                DISCOVER THE COLLECTION
              </Link>
              <button className="flex items-center space-x-3 group">
                <span className="w-12 h-[1px] bg-[#1C1C1E] group-hover:w-16 transition-all"></span>
                <span className="text-[#1C1C1E] font-bold text-xs tracking-widest">VIEW GALLERY</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="py-32 bg-[#F7F7F5] relative overflow-hidden z-10">
        <div className="max-w-screen-2xl mx-auto px-12">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block text-[#bb0016] font-bold tracking-[0.2em] text-xs mb-4 font-body uppercase">
              The Raj Lakshmi Legacy
            </span>
            <h2 className="text-4xl md:text-5xl font-noto-serif font-bold text-[#1C1C1E] leading-tight mb-8">
              Where Decades of Experience Meet Modern Standards of Quality.
            </h2>
            <p className="text-lg text-[#8A8A8F] leading-relaxed max-w-2xl mx-auto">
              With over 36 years of industry expertise, we have built a legacy rooted in trust, precision, and excellence. We don’t just provide products; we deliver peace of mind through a proven track record of reliability.
            </p>
          </div>

          {/* Feature Grid - Glassmorphism Aesthetic */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group">
              <div className="w-14 h-14 rounded-full bg-[#f4f4f2] flex items-center justify-center mb-6 group-hover:bg-[#1C1C1E] group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined text-[28px]">verified</span>
              </div>
              <h3 className="text-xl font-bold font-noto-serif text-[#1C1C1E] mb-3">Uncompromising Quality</h3>
              <p className="text-sm text-[#8A8A8F] leading-relaxed">
                Our reputation is built on "top-notch" standards. We implement rigorous quality control measures to ensure that every product meets the highest benchmarks of durability and performance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group">
              <div className="w-14 h-14 rounded-full bg-[#f4f4f2] flex items-center justify-center mb-6 group-hover:bg-[#1C1C1E] group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined text-[28px]">account_balance</span>
              </div>
              <h3 className="text-xl font-bold font-noto-serif text-[#1C1C1E] mb-3">True Value for Money</h3>
              <p className="text-sm text-[#8A8A8F] leading-relaxed">
                Premium quality shouldn't come with an unreasonable price tag. Our streamlined processes and deep industry roots allow us to offer high-end solutions that maximize your investment.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group">
              <div className="w-14 h-14 rounded-full bg-[#f4f4f2] flex items-center justify-center mb-6 group-hover:bg-[#1C1C1E] group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined text-[28px]">history_edu</span>
              </div>
              <h3 className="text-xl font-bold font-noto-serif text-[#1C1C1E] mb-3">Decades of Mastery</h3>
              <p className="text-sm text-[#8A8A8F] leading-relaxed">
                Three and a half decades in the business means we’ve seen the industry evolve. We leverage this deep institutional knowledge to anticipate challenges and provide unmatched insights.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group">
              <div className="w-14 h-14 rounded-full bg-[#f4f4f2] flex items-center justify-center mb-6 group-hover:bg-[#1C1C1E] group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined text-[28px]">handshake</span>
              </div>
              <h3 className="text-xl font-bold font-noto-serif text-[#1C1C1E] mb-3">Client-Centric Excellence</h3>
              <p className="text-sm text-[#8A8A8F] leading-relaxed">
                We are known for our commitment to the end result. Our focus remains on delivering products that provide long-term utility, ensuring our value proposition extends far beyond the initial purchase.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Curator's Selection (Bento Grid) */}
      <section className="py-32 bg-[#F7F7F5]">
        <div className="max-w-screen-2xl mx-auto px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-noto-serif font-bold text-[#1C1C1E] mb-6">Curated Collections</h2>
              <p className="text-[#8A8A8F] text-lg max-w-md">Our signature selection represents the pinnacle of geological rarity and aesthetic purity.</p>
            </div>
            <div className="text-right">
              <span className="block text-6xl font-noto-serif text-[#e2e3e1] leading-none mb-2">01/04</span>
              <span className="text-xs font-bold tracking-widest text-[#F5B938]">WINTER RELEASE</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            <div className="md:col-span-8 relative group overflow-hidden rounded-xl bg-surface-container-low">
              <img
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                alt="Exquisite Calacatta Borghini marble slab featuring bold gold and grey veins on a creamy white surface in a luxury interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUC8v1u_zSVFgRSatlwSa1pvBmZYVPtZU6k0_5jBh4IyCFuLeeEbvvPwo-Khf2rBmbQ104dgSILEjvRC8Hxx5XbHQUCTmZf1Uqxz-hBxeQbW58r1wR7GpPUyGqLhn3gPMJdHzPdHnijEBGDGMDfU--nDW1zvFrY03IUU8m-Bbpk4zpMQuBjBpGYYoQpFeWJTTbub53-j64hIklkBF-vgdTmgXxQGH4cT1D7y8r1LQFSnUBtouLtXk2XC3rumdBh-77A5a7b6jNEFQp"
              />
              <div className="absolute bottom-10 left-10 text-white z-10">
                <span className="text-xs font-bold tracking-widest bg-[#bb0016] px-4 py-1 mb-4 inline-block">MOST COVETED</span>
                <h3 className="text-4xl font-noto-serif font-bold">Italian Statuario</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/60 to-transparent"></div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="relative group overflow-hidden rounded-xl bg-surface-container-low">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Rich deep green Brazilian quartzite with crystalline textures and light green emerald-like veins for luxury architectural use"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXZJJP9xI4336CqoPgbxJXopY5GiP4lrOaUDm6lTwm9rqtzM3nxxgYknSZ7evBY7aCIKuQRzxRB_Il5QtWwlxCLuOKVikpYSUUx_KMfTTkVUdbQTjSST_kfyRxYwBEWwLO5j9FJDXvc46tAflfmOPeAgewNVsv0U5shNi5sgY4H5JPlBr-y0xUJUMyPDv1ydLUEprvPbg8HGCG-KWE5A2RHPLHI4wTvn84vZnVwEAZq6Qr5mU5TB8mjb0fRUeNynpSSmzX0VjZtAcv"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-noto-serif font-bold">Emerald Quartzite</h4>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl bg-surface-container-low">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Dramatic black Nero Marquina marble with stark white lightning veins, polished to a high-gloss mirror finish"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASefmmr8DFQiE-Vmc9z2vmDwr96nW6-cck3Lae1LthL0G5Hv721QEcV6SwHKpgn9sclkpBEYxShtWaoEILpPGu0DmT7IcwiZjVJyXokKP0NFMvPVE4Ccv8-oQqXqw1YKaC0ip4mcggW-dqxPRe43IuBsuPLiAHXcBsONGCS6RdGe-MrL_Kdy3pg44ayQ5fkn6MuK-xl4CSUnK3K_-ce-kGAlDpobXRSTpt1rDMxTFrXGnXjWzTbUNGbRfa5MbiwzpzeZNhQzNnFAv4"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-noto-serif font-bold">Nero Marquina</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-40 overflow-hidden bg-[#1C1C1E]">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            alt="Extreme macro shot of natural stone texture with crystalline structures and metallic flecks under warm amber spotlight"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW9ganXFZsU-_Kj9KHvEL_YBI41TQPwjlkjyIv_Fr4d5iMWrjUL7NZCuXzbqV96Dg_Kl9Cj4XxlbqBzAFATk9we65N-6MafRY3yYmJ-5vwlb_ow_v5KH5H9O8R_5aNHqfTKToleb548Wne1nlvP6mlsBlj-L8NSUyTXtJINejAk2WKOvw8Ba9izu-gwQxVjBq6Fjx9X5K1eEbcNeR9yEuzGVpt1oupM4GIPq_2mWVCJV_aNX1-_8w-8S64uttrB1VeX12rxOpnPWw5"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Modern high-end marble showroom atelier with floating stairs and large slab displays in a minimal industrial space"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbRHcmhp91Ex2kf0ICRa6cbIInI4rDTdR6cW9SQ468JPxboskzZ12qJZ2ni5H4-Jj0aUJQBke8AiXJ6otkZVg4fz6uvKyWH5OantNK9SQmGazA2Y3QraDez98_YL9uuTBhQJmvnP0qO_7yBFpuwt-pAVbo3_MpAZeV9ObbXBQ1FdvIdTrmdkceUTof6peN_JKWzDnvF4pYOWVPKsAKsHk0g2XzM5y9sFpdNxoWa0ggpkIb11M4-Ncl-uF-y244PmQGxqTA_P0jcCP3"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 p-10 bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 max-w-xs shadow-2xl">
              <span className="material-symbols-outlined text-[#F5B938] text-4xl mb-4">architecture</span>
              <h5 className="text-[#F7F7F5] font-noto-serif text-xl mb-3">Custom Fabrication</h5>
              <p className="text-[#8A8A8F] text-sm leading-relaxed">Precision cutting and hand-finishing services at our state-of-the-art facility.</p>
            </div>
          </div>
          <div>
            <h6 className="text-[#F5B938] font-bold tracking-[0.3em] text-xs mb-8">THE CRAFT</h6>
            <h2 className="text-5xl md:text-6xl font-noto-serif font-bold text-[#F7F7F5] leading-tight mb-10">Beyond the Surface.</h2>
            <div className="space-y-12">
              {[
                { num: '01.', title: 'Global Sourcing', desc: 'Direct partnerships with quarries in Italy, Greece, and Turkey ensure exclusive access to the finest blocks.' },
                { num: '02.', title: 'Artisanal Curation', desc: 'Every slab is inspected for vein continuity, structural integrity, and aesthetic balance.' },
                { num: '03.', title: 'Lasting Legacy', desc: 'Our stones are chosen to endure, gaining character and value over generations.' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex space-x-6">
                  <span className="text-[#bb0016] text-2xl font-noto-serif italic pt-1">{num}</span>
                  <div>
                    <h4 className="text-[#F7F7F5] font-bold text-xl mb-3">{title}</h4>
                    <p className="text-[#8A8A8F] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-12">
          <div className="bg-[#F7F7F5] p-16 md:p-24 rounded-2xl flex flex-col md:flex-row gap-20 items-center justify-between">
            <div className="max-w-xl">
              <h2 className="text-5xl font-noto-serif font-bold text-[#1C1C1E] mb-8">Ready to define your space?</h2>
              <p className="text-[#8A8A8F] text-lg mb-10">Join our mailing list for private previews of new quarry shipments and designer collaborations.</p>
              <div className="flex space-x-4">
                <input
                  className="flex-1 bg-surface-container border-none focus:ring-0 text-on-surface font-body p-4 rounded-md"
                  placeholder="Email Address"
                  type="email"
                />
                <button className="bg-[#1C1C1E] text-[#F7F7F5] px-8 py-4 rounded-md font-bold text-sm tracking-widest hover:bg-[#bb0016] transition-colors">SUBSCRIBE</button>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square relative rounded-xl overflow-hidden rotate-3 shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Flat lay of marble sample book with various stone swatches, architectural drawings, and a brass ruler on an architect's desk"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzUdjCIUTx4ehZJxw-WjoVgJ8_DMXnAriKLbXkqDOXO9Nlyi106tOX6qo9BX-bcm_Foc4P2agW4pmOL2uzM6O4MhX-mtUtn4o1bxxaVGZx65QW951cjIJaGbgztrjviQYn3GlqBaF975COedVOOVpdKgp2DyrTLZ6Hs_9KiGV5p4KinWDkB-jgDJYxDnR8dKM6HrEUPL5yaEyHTQSP97Gak9IbcFR2y8lCmyY0zqu6w4-8PiJgdkicKHn7tFYNx2Dw7IdxCzLhbqb-"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
