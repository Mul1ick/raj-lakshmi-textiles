import { Link } from 'react-router-dom'
import statuarioMarble from '../assets/marbles/statuario.png'
import marbleQuarryAerial from '../assets/site/marble-quarry-aerial.jpg'

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
                From the Quarry <br />
                <span className="text-[#bb0016]">to Your Floor.</span>
              </h1>
              <p className="text-[#8A8A8F] text-xl leading-relaxed max-w-lg font-body">
                Perfection in every step. At Rajlaxmi Marbles, a customer is not just buying stone for today; they are investing in a masterpiece made to live in their heart and memories for decades.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Statuario marble — the signature white of Raj Lakshmi's curated collection"
                  src={statuarioMarble}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="bg-white py-32 border-y border-[#1C1C1E]/5">
          <div className="px-12 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4">
                <span className="material-symbols-outlined text-4xl text-[#bb0016] mb-8">diamond</span>
                <h2 className="text-4xl md:text-5xl font-noto-serif font-bold leading-tight">
                  About Us
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-7 text-[#8A8A8F] text-lg leading-relaxed">
                <p>
                  At Rajlaxmi Marbles, our journey began over four decades ago with a profound respect for natural stone. Based in Kishangarh, the heart of India's stone industry, our expertise has been forged through generations of hands-on sourcing, manufacturing, and selection.
                </p>
                <p>
                  We believe that a stone's true quality reveals itself over time. This deep understanding of stone anatomy allows us to bridge the gap between raw nature and finished architecture.
                </p>
                <p>
                  Today, we have evolved beyond being mere suppliers to become a comprehensive end-to-end partner. From global sourcing to masterclass fitting, we ensure that the elegance you select is the excellence we install.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image Break */}
        <section className="w-full h-[60vh] relative overflow-hidden">
          <img
            className="w-full h-full object-cover mix-blend-multiply opacity-90"
            alt="Aerial view of a marble quarry showing layers of extracted stone"
            src={marbleQuarryAerial}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#1C1C1E]/30 flex items-center justify-center">
             <span className="text-white font-bold tracking-[0.5em] text-sm uppercase">The Origin of Prestige</span>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-32 px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 md:p-12 rounded-2xl shadow-[0_10px_30px_rgba(28,28,30,0.03)]">
              <div className="w-14 h-14 bg-[#f4f4f2] rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-[#1C1C1E] text-2xl">flag</span>
              </div>
              <h2 className="text-3xl font-noto-serif font-bold text-[#1C1C1E] mb-6">Mission</h2>
              <p className="text-[#8A8A8F] leading-relaxed text-lg">
                To provide a seamless, end-to-end marble experience by integrating global sourcing, precision fabrication, and expert installation, ensuring that every stone selected is a masterpiece perfectly realized in our clients' spaces.
              </p>
            </div>
            <div className="bg-white p-10 md:p-12 rounded-2xl shadow-[0_10px_30px_rgba(28,28,30,0.03)]">
              <div className="w-14 h-14 bg-[#f4f4f2] rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-[#1C1C1E] text-2xl">visibility</span>
              </div>
              <h2 className="text-3xl font-noto-serif font-bold text-[#1C1C1E] mb-6">Vision</h2>
              <p className="text-[#8A8A8F] leading-relaxed text-lg">
                To be the global benchmark for excellence in the natural stone industry, recognized for providing a seamless and inspiring journey for every client, from first selection to final installation.
              </p>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-32 px-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-[#F5B938] font-bold tracking-[0.3em] text-xs uppercase mb-4 block font-body">Why Us?</span>
              <h2 className="text-5xl font-noto-serif font-bold text-[#1C1C1E]">The Rajlaxmi Advantage</h2>
            </div>
            <Link to="/enquiry" className="mt-6 md:mt-0 border-b-2 border-[#bb0016] text-[#1C1C1E] pb-1 text-sm font-bold tracking-widest uppercase hover:text-[#bb0016] transition-colors">
              Partner With Us
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: 'construction',
                title: 'True End-to-End Solutions',
                desc: 'We manage the entire lifecycle of your project, from expert global selection and precision fabrication to master-class installation. You deal with one partner; we take 100% accountability.'
              },
              {
                icon: 'history_edu',
                title: 'A 40-Year Legacy of Trust',
                desc: 'Four decades of experience combine multi-generational wisdom with modern professional standards, built on successfully delivered projects and a deep understanding of stone durability.'
              },
              {
                icon: 'travel_explore',
                title: 'Global Sourcing & Exclusive Curation',
                desc: "We do not just stock marble; we curate it. Our team hand-selects blocks for color consistency, structural integrity, and rarity from the world's most prestigious quarries."
              },
              {
                icon: 'domain',
                title: 'Institutional Scale & Reliability',
                desc: 'From bespoke luxury villas to large commercial developments, our infrastructure supports transparent pricing, strict delivery timelines, and uncompromising quality control.'
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
