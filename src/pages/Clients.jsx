import luxuryMarbleHotelLobby from '../assets/site/luxury-marble-hotel-lobby.jpg'
import neroMarquinaMarbleStaircase from '../assets/site/nero-marquina-marble-staircase.jpg'
import whiteMarbleSpaBathroom from '../assets/site/white-marble-spa-bathroom.jpg'
import ahluwaliaContractsLogo from '../assets/clients/ahluwalia-contracts.svg'
import zaraLogo from '../assets/clients/zara.svg'
import dlfLogo from '../assets/clients/dlf.svg'
import maxLogo from '../assets/clients/max.svg'
import leMeridienLogo from '../assets/clients/le-meridien.svg'
import marriottLogo from '../assets/clients/marriott.svg'

const clientLogos = [
  { name: 'Ahluwalia Contracts', logo: ahluwaliaContractsLogo },
  { name: 'Zara', logo: zaraLogo },
  { name: 'DLF', logo: dlfLogo },
  { name: 'MAX', logo: maxLogo },
  { name: 'Le Meridien', logo: leMeridienLogo },
  { name: 'Marriott', logo: marriottLogo },
]

const carouselLogos = [...clientLogos, ...clientLogos]

export default function Clients() {
  return (
    <div className="bg-[#F7F7F5] text-on-surface">
      <main className="pt-32 pb-24 overflow-hidden">
        <section className="px-12 max-w-screen-2xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="text-tertiary font-label text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Trusted By</span>
              <h1 className="text-6xl md:text-8xl font-headline font-black text-on-surface tracking-tighter leading-none mb-8">
                Client <br />Partners
              </h1>
              <p className="text-xl text-secondary font-body max-w-xl leading-relaxed">
                Raj Lakshmi Marbles supports residential, commercial, hospitality, retail, and infrastructure projects with dependable stone selection, fabrication, and fitting.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-96 overflow-hidden rounded-xl bg-[#1C1C1E] shadow-2xl">
                <img
                  className="w-full h-full object-cover opacity-80"
                  alt="Luxury hotel lobby with book-matched marble walls"
                  src={luxuryMarbleHotelLobby}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/70 to-transparent"></div>
                <div className="absolute left-8 bottom-8 right-8">
                  <span className="text-[#F5B938] text-xs font-bold tracking-[0.25em] uppercase">Commercial Scale</span>
                  <p className="text-white text-2xl font-noto-serif font-bold mt-3">Stone solutions for brands, builders, hotels, and landmark spaces.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-[#1C1C1E]/5 py-20 mb-32">
          <div className="px-12 max-w-screen-2xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#bb0016] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Selected Clients</span>
              <h2 className="text-4xl md:text-5xl font-noto-serif font-bold text-[#1C1C1E]">Names We Have Served</h2>
            </div>
            <p className="text-[#8A8A8F] max-w-md text-sm leading-relaxed">
              A cleaner client showcase with local logo assets and a smooth continuous carousel.
            </p>
          </div>

          <div className="client-carousel relative">
            <div className="client-logo-track flex gap-6">
              {carouselLogos.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="client-logo-card flex-none w-64 h-32 rounded-lg border border-[#1C1C1E]/10 bg-[#F7F7F5] p-6 flex items-center justify-center shadow-[0_10px_30px_rgba(28,28,30,0.04)]"
                >
                  <img className="max-h-20 max-w-full object-contain mix-blend-multiply" src={client.logo} alt={`${client.name} logo`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Hospitality',
                desc: 'Lobby, suite, spa, and public-area stonework where finish consistency and timelines matter.',
                image: luxuryMarbleHotelLobby,
              },
              {
                title: 'Retail & Commercial',
                desc: 'Durable marble surfaces for high-footfall spaces, brand environments, offices, and showrooms.',
                image: neroMarquinaMarbleStaircase,
              },
              {
                title: 'Premium Interiors',
                desc: 'Material selection, cutting, and fitting for residences, villas, and bespoke design-led spaces.',
                image: whiteMarbleSpaBathroom,
              },
            ].map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-xl bg-white border border-[#1C1C1E]/5">
                <div className="aspect-[4/3] overflow-hidden bg-surface-container-low">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={item.image} alt={`${item.title} marble project`} />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-noto-serif font-bold text-[#1C1C1E] mb-3">{item.title}</h3>
                  <p className="text-[#8A8A8F] leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
