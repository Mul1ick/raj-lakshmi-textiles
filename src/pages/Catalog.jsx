import { Link } from 'react-router-dom'

export default function Catalog() {
  return (
    <div className="bg-surface text-on-surface">
      <main className="pt-32 pb-24">
        {/* Hero */}
        <header className="px-12 max-w-screen-2xl mx-auto mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-tertiary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Curated Selection</span>
            <h1 className="text-6xl md:text-8xl font-bold text-[#1C1C1E] leading-[0.9] tracking-tighter font-noto-serif">
              Earth's <br /><span className="text-[#EF2029]">Masterpieces</span>
            </h1>
          </div>
          <div className="max-w-sm">
            <p className="text-[#8A8A8F] leading-relaxed">
              Our catalog features the rarest extractions from the heart of Carrara to the peaks of the Anatolian plateau. Each slab is a unique temporal record.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-outline-variant"></span>
              <span className="text-xs font-bold text-[#1C1C1E] tracking-widest">EST. 1984</span>
            </div>
          </div>
        </header>

        {/* Catalog Gallery */}
        <section className="px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Feature */}
            <div className="md:col-span-8 group cursor-pointer">
              <div className="overflow-hidden bg-surface-container-low aspect-[16/9] mb-6">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Close-up texture of premium Statuario marble with thick dramatic grey veining against a pure white background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCacNLx5MOFVS-jDVXjGFLsJeh1TtXuwF_efPkiCbtCfdoGuoLyQeltqf7aX0Wu6VC3bvjmgvgXFlKsi9TTZ--akFgjkLJIzttzWIRcOKGs3O35twp9kB7a1RsTYFUfIpOLGy1q_Zvt-F2dVdvp228syzHfcxtENa21CQCAfoiibX0LolP5FZ2OAEcxvoXidd4Yhnx89M1TtjPUYZDm6IBJXHwxFz9KoY4KdPwCXEfnD_CN85RbJ-72pIwC93gQtTsyhg6Pvba5is6-"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-[#1C1C1E] mb-1">Carrara Statuario</h3>
                  <p className="text-[#8A8A8F] text-sm">Classic Italian White · Luxury Selection</p>
                </div>
                <span className="text-[#EF2029] font-bold text-lg">001</span>
              </div>
            </div>

            {/* Secondary */}
            <div className="md:col-span-4 group cursor-pointer pt-0 md:pt-12">
              <div className="overflow-hidden bg-surface-container-low aspect-[4/5] mb-6">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Polished Nero Marquina marble slab with deep black background and sharp lightning-like white veins"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQJHVaEw-bdYiTjKUERpq3Yvg1ZSnwQ7rSdm4KFU-5nT39G7ny_kAPWu7rYmDzWPNU8pI3woA9EWbHC6WNROHFGLLk7BDWTtqFYJEEzYw4l59WGgc6UeZwlt7s4kYDPF6tQotTgVzOrhlnMLBbIeZQGYiilXCSqJ7YYu-aaOL__dcUfpYhM_4LkfO_f0XItntCiN-sslD97NMqETqG4YcN-f2969hX1NyXJsAXVSoR2UqxFyFGr8SgulcJc6_loS96KBM0oGE_P4qN"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-[#1C1C1E] mb-1">Nero Marquina</h3>
                  <p className="text-[#8A8A8F] text-sm">Spanish Midnight · High Contrast</p>
                </div>
                <span className="text-[#EF2029] font-bold text-lg">002</span>
              </div>
            </div>

            {/* Three Column Row */}
            {[
              {
                title: 'Verde Guatemala', sub: 'Forest Deep · Tonal depth',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAloGGa3fewxdJtQ0xuOTta9RuoHrBSZO5z37UWzdBvnKRytbgO434t_6fxhUXke59fFUGeK0dRxjOoIo8-mtYD9vKpo96eVvr6WCFE0yq6Pu4rv29kb1HAas0JqOClF786sph1u0aNvi4NkrvglPTaMcquSnEQGsRdl4dTTBAhNwN1V5WelH3bqFwZIeLvbIsnb58_bt-A3N1VqqzLIF4TFHuwliG-Zu8-utc6qg6nvn6ClL14DM7W3XEPH51RAyjOA7eZU7OZ4ksz',
                alt: 'Emerald green marble with deep forest swirls and golden mineral inclusions'
              },
              {
                title: 'Calacatta Oro', sub: 'Premium Gold · Radiant Warmth',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUa9iqSX6MBqjajKeCwzsLZEU-MHICJK_OV7yxqO8v3NdKIKbf_biToBH8tKTbE3CbU6gCCthScdVGkPg2yWo9on-5GuB33Ckt506SP8KKr-K5N7w7HZPYNdRi56PyhckAkP2MMJzsYhvyNzjXcYq-OdA-JiBcsEOXO03C4hH1k4NirJZCUPLqw1ipbqgqsbtyu4US3rcqqdez2xDEB6xj4VzFLCzvX3Zpp_CDm_o3BdRUjaj9Q7Ee4L8mZakBfvZjFv9s5Oj1BGdT',
                alt: 'Elegant Calacatta Gold marble texture with subtle honey-colored veins'
              },
              {
                title: 'Bardiglio Nuvolato', sub: 'Atmospheric Grey · Structural Elegance',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAITnCK1nte76kqVye_DqCk7En_ZfTQCnmJU8_xLmRcdtH0xisV3bcSJ_v8tjgZbB2iC1ow-qdXCOtMatV2c2297S4PK5KR_HmimG0E0-qlpieUD0rGd2tqt6SPWmbbA1uPzQOTiZIYjAK4OeMXakGRdPC2uTkApm4vX20h_4jHJgQ-mYtYNmLVAxr-YHrlvRlbThSe9U65Ny16_1Y5jA8ieS3femBJ35wv2JflbdnIWvhRE9TAfpN9mR05nMmgrIY3qE0FekynUIDG',
                alt: 'Grey Bardiglio marble with linear storm-like patterns'
              },
            ].map(({ title, sub, src, alt }) => (
              <div key={title} className="md:col-span-4 group cursor-pointer">
                <div className="overflow-hidden bg-surface-container-low aspect-square mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={alt} src={src} />
                </div>
                <h3 className="text-xl font-bold text-[#1C1C1E] mb-1">{title}</h3>
                <p className="text-[#8A8A8F] text-sm">{sub}</p>
              </div>
            ))}

            {/* Wide Feature */}
            <div className="md:col-span-12 group cursor-pointer mt-12">
              <div className="relative overflow-hidden bg-surface-container-low h-[500px]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Wide shot of a minimalist luxury showroom featuring massive floor-to-ceiling marble slabs"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLVO7jQY3rqKf128Wo-Dm-h0vRuOxrhoyQcT11EDF2NJEvbDYmCkcGCznzY6euQ__dABkBAKd6JtqaSbAF9f0uWdUKzy5NdpDZUXT9KXQarVkUweYNLXEkt1EPDEhd5fzReqgV46dcORDxNR2BcPEHixo99A0k-7tU_DI-WEfzw6kvzc_EXe9Ta2ZRvTGEzgg3RyTCkLyz-G8wyvn4v2hhIbeOjq53rUgtVoyy7q_Qaj3t6JwsaybRwO8P3IaQpdZlc_UMYBU6js"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/60 to-transparent flex items-end p-12">
                  <div className="text-white">
                    <span className="text-[#ffdea6] font-bold tracking-widest mb-2 block text-xs">NEW ARRIVAL</span>
                    <h3 className="text-4xl font-bold font-noto-serif">The Anatolian Collection</h3>
                    <p className="max-w-md mt-4 text-white/80">Discover our newest acquisition of rare travertine and limestone from the heart of Turkey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-32 px-12 max-w-screen-2xl mx-auto">
          <div className="bg-white p-16 md:p-24 flex flex-col items-center text-center border border-[#e8bcb8]/10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-8 max-w-2xl font-noto-serif">Require a bespoke consultation for your project?</h2>
            <p className="text-[#8A8A8F] max-w-lg mb-12">Our specialists travel worldwide to assist architects and designers in selecting the perfect blocks for prestigious builds.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-primary text-on-primary px-10 py-4 text-sm font-bold tracking-widest uppercase hover:scale-105 transition-transform">Request Catalog PDF</button>
              <Link to="/enquiry" className="border-b-2 border-tertiary text-[#1C1C1E] px-4 py-4 text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors">Book Atelier Visit</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
