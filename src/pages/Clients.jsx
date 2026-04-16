export default function Clients() {
  const feedItems = [
    {
      likes: '1,240',
      caption: 'The precision of the first cut. Every block tells a story that started millions of years ago. #AtelierProcess #MarbleCraft',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOpCc9K-sz8tfH2YBsmgKIFQ0VzpJY5nFOg8_Lx8RoAQ0wSMfnbvPSxLAbpPLeX1NEMj9hgbapCApC9vabhePvoEyi8KB1P4VUaVfLKDdy8h8wEB4CvLSJ-196B7jt7HS4kzsvP2s1nBfZBv_8BW8Ic0UWA4m8V2gmheRC1M8fkklVOMimr6q-HI_2LYj3SJWgYI1Y1e5eFIux9r7DFRj6gk2mneI2iMw_eZvCUpwlgHtfhO0g3hDf178lk8kqCA2G6DfCYpYspicV',
      alt: "craftsman's hands using a traditional chisel on a large block of white marble"
    },
    {
      likes: '3,892',
      caption: 'Sourcing the rarest slabs for our upcoming Tokyo project. The scale of nature never ceases to inspire.',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcGWxN4P-HsDbXWVcei0nQO28gLwRslsifkO0h_C45ijEWdRICgWW_gg6WSSiUy5Nwf0BP1vGTIXZrVt9QMjL_9qPlcrFNgbJ78PRcl1PGHXn43FuvFrxzUDqfc9EkzJzIrcGa7og9xq5Ltmsxtbi9oqQRcZknxdKWIo2lo0ycOX3g4gDEUUWJNASMgJsxE8w-urAeWzfAb4F9wCc7936OE6lfyv1dAS6HFfs2E-Flc4mqZYlcemOfb_J5Ba8KIkbSih6wB5oJQhuW',
      alt: 'aerial drone shot of a marble quarry in Italy'
    },
    {
      likes: '954',
      caption: "Nature's gold. The unique veining of this Portoro slab is unlike anything we've seen this season.",
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8204NO6X7oFz36gZXJCn-ozkmDa8YZVl9YaX9-W1OBrNJ6GmJvUkkb3XzEDxepB1_lQaHYVuBCz-1CVkgYDA08MPQXRRBsXjTg7_0eF19d7Aj9Mhh2-VljEmupcIGx7N8KnuNZngUIFsBWEf3dUuJzPdB0Z8b-qIp-qH03sufETyh99ttPUkTIjopeD9AMeqTmdR_vqykbTplm7MTwig7IvznsX_YosYKw4Tdb47SRywsi4G2H9JoxpnpwZ7VAA-TuVgu-hfMb5oz',
      alt: 'macro photo of gold veining in a piece of rare black marble'
    },
    {
      likes: '2,105',
      caption: 'Material selection morning. Choosing the right texture is a sensory journey. #DesignInspiration',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKLHuQcnKkYmh03V9avnXng0RAnWkTnr4v7eq_j8tM5mGjdqCmYu94U7ZENlC99GWDN-2cts9bTQ8oEBpyGhVa5_L_ApjSi6qqFoFEx7lDtqPseKrM-V1-_JRE_A_QwX72IiGGTKm-irSjpJplPAMoBrnSxADszmRqENo61XC4wC8f2EwN8r_N1-BJ1D100OnwDyKYLDB6b2V86UnB4wSnP6ilQ-N7Pe_WOIwbtvlx_d9E9cvMhZnK1rlWE8i6xaVJdWRALNEjcXC9',
      alt: 'minimalist studio shot of a marble sample tray'
    },
  ]

  return (
    <div className="bg-surface text-on-surface">
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="px-12 max-w-screen-2xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="text-tertiary font-label text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Distinguished Partners</span>
              <h1 className="text-6xl md:text-8xl font-headline font-black text-on-surface tracking-tighter leading-none mb-8">
                The Client <br />Portfolio
              </h1>
              <p className="text-xl text-secondary font-body max-w-xl leading-relaxed">
                Curating surfaces for the world's most ambitious architectural visions. From private residences in Monaco to landmark hospitality in Tokyo.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-end">
              <div className="w-full h-96 bg-surface-container-low rounded-xl overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="luxury hotel lobby with massive book-matched marble walls"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDARRZYIZXS81R7HBCRtrMStXORd2gr5vxq3M5Mj2TUwePU39gjcFC1j41vKq4OJznbi9Yde5QFkFhnhmGixMoCabmgwIxUo0xtXVk_QHqhezd-p_EAWsGk5o7oIKFhMJqB2Mh-5fHEVkHnCLy00wfym4hYb7zVyviVwN9E3pCTcgMmF41tp-osceebM3z4YEnRwFITCgn1CMc0WWLyZIvUl2LzRpv2OiwfCLJTSKLekxar6nmpsFivXBRLwEmFnDHRjCpExCtZ9sFY"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-surface-container-lowest">
                  <p className="font-headline italic text-2xl">Villa d'Este, Lake Como</p>
                  <p className="font-label text-xs tracking-widest uppercase opacity-80">Private Commission 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Portfolio */}
        <section className="px-12 max-w-screen-2xl mx-auto mb-40">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl bg-surface-container-lowest">
              <img
                className="w-full h-full min-h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="dramatic closeup of black Nero Marquina marble staircase in a modern minimalist home"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFmD3MmJQlm93BKGCK9BpqTLuwKCXLa66q4Ry2H1NR5wogwrRCcyC7P60u3kMBCm0jPI5G87XYLRmNp9MqxAloVI8znz28EGJtOAblxJYPF-K4-2l2_IF8RtgN-BhZ8eVajFtUdlq30AmeP9hAoFl0ZrPjPZpKoWtoKNNMQy6UBgQceae3ZfjjcH3UTFMKr8a6_4T8dBHWZfuJzWdFGkMqotL-qwWINlgx4l39AK5sG-TbzDkk0Q3wZI00p67tfhk_6MchWnoYmgA8"
              />
              <div className="absolute inset-0 bg-on-surface/20 group-hover:bg-on-surface/40 transition-colors duration-500"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <span className="inline-block px-3 py-1 bg-primary text-on-primary text-[10px] font-bold tracking-widest uppercase mb-4">Architecture</span>
                <h3 className="text-3xl font-headline text-surface-container-lowest mb-2">The Obsidian Residence</h3>
                <p className="text-surface-container-high font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">Full interior stone integration using Calacatta Borghini and Belgian Bluestone.</p>
              </div>
            </div>
            <div className="md:col-span-2 h-[300px] group relative overflow-hidden rounded-xl bg-surface-container-lowest">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="luxurious spa bathroom with soft white marble textures and gold fixtures"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc0OrNWOCeHaYDmj_m3HlS75uk9z8jvtgR7nqEBH3AT9LafxJ-ZugXvy3qmYauhTkzT5HzJOcVAxkH8o_dDfPN_hM1Hgq4VRlZ5_jKJhgb4Qpac3FknNZxRXOOq75flymI2U0pPCMOW83R-j1gO7Gl4hLVIbBh_SZgvvBhl9aUElIvRLNyPMT12HcuwkIHpy_Lo-HjsWdCZlNgerqCEoHipji_kXsCBHd8joveSNkIgPI79dXzSrivESfQjK4q0igHvmJnyL8M4T8M"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-on-surface/60 to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-headline text-surface-container-lowest">Aurelia Spa & Wellness</h3>
                <p className="text-tertiary-fixed-dim font-label text-xs uppercase tracking-widest">Milan, Italy</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container-low rounded-xl p-12 flex flex-col justify-center">
              <h4 className="text-secondary font-label text-xs tracking-widest uppercase mb-8 border-b border-outline-variant/30 pb-4">Esteemed Partnerships</h4>
              <div className="grid grid-cols-3 gap-12 opacity-40 grayscale">
                {[24, 20, 28, 22, 26, 20].map((w, i) => (
                  <div key={i} className={`h-8 bg-on-surface/20 rounded-full w-${w}`}></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Feed */}
        <section className="bg-inverse-surface py-32 overflow-hidden">
          <div className="px-12 max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-headline font-bold text-surface-container-lowest mb-6">Live From The Atelier</h2>
                <p className="text-secondary-fixed-dim text-lg">Follow our process, from the heart of the Carrara quarries to the final installation on-site.</p>
              </div>
              <a className="mt-8 md:mt-0 text-tertiary-fixed-dim border-b-2 border-tertiary-fixed-dim/30 pb-1 font-bold tracking-widest uppercase text-xs hover:text-tertiary transition-colors" href="#">
                @DigitalAtelierMarble
              </a>
            </div>
            <div className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
              {feedItems.map((item) => (
                <div key={item.likes} className="flex-none w-80 snap-start">
                  <div className="aspect-square bg-surface-variant rounded-xl overflow-hidden mb-4">
                    <img className="w-full h-full object-cover" alt={item.alt} src={item.src} />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    <span className="text-surface-container-highest text-xs font-bold">{item.likes}</span>
                  </div>
                  <p className="text-secondary-fixed-dim text-sm line-clamp-2">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-40 px-12 max-w-screen-xl mx-auto">
          <div className="relative">
            <span className="text-9xl font-headline font-black text-surface-container absolute -top-20 -left-10 select-none opacity-50">"</span>
            <div className="relative z-10 pl-20">
              <h2 className="text-4xl md:text-5xl font-headline italic leading-tight text-on-surface mb-12 max-w-4xl">
                The level of craftsmanship is unparalleled. Digital Atelier doesn't just install stone; they translate architectural poetry into physical reality.
              </h2>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-surface-container-highest overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="portrait of a professional male architect"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI1jukz-O4eSK8sxTL9Pj02bX75XxQi8ZOxxEyHROiqTr3ZW_nF0yVVmi3AjxFlEU7PmUSKUeX6ob_uHuXlpFDDKLULSpXwzfKjZnxHxOmfBzUvLIbJHLfu0nGQ1C5DIex4SSFkBRs6aIRVKt_BpD6GR5YSQjtL_ztYfuhrqZLTsLjYW0t5UI7mPieqKzSJSbfyAyVBvnL6KSAqgIPeRKFk0tpkkJmJ0wsEf_ehbZVRPeOkkhUc5DnSZ2tWZl-LBejSqBHYkaNqJU_"
                  />
                </div>
                <div>
                  <p className="font-bold text-on-surface tracking-wide">Julian Vane</p>
                  <p className="text-secondary text-sm">Principal Architect, Vane & Associates</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
