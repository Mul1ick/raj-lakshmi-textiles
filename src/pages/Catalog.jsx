import { useState, useMemo, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import StoneCard from '../components/StoneCard'
import curatedMarbles from '../curated-marbles'
import { downloadCataloguePdf } from '../utils/catalogPdf'

const PAGE_SIZE = 12

export default function Catalog() {
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)
  const [transitioning, setTransitioning] = useState(false)
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)
  const sectionRef = useRef(null)

  const handleDownloadCatalogue = async () => {
    setIsGeneratingPdf(true)
    try {
      await downloadCataloguePdf()
    } finally {
      setIsGeneratingPdf(false)
    }
  }

  const goToPage = (p) => {
    if (p === page) return
    setTransitioning(true)
    if (sectionRef.current) {
      const top = sectionRef.current.getBoundingClientRect().top + window.scrollY - 200
      const distance = Math.abs(window.scrollY - top)
      window.scrollTo({ top, behavior: 'smooth' })
      const delay = Math.min(600, Math.max(200, distance * 0.4))
      setTimeout(() => {
        setPage(p)
        requestAnimationFrame(() => setTransitioning(false))
      }, delay)
    } else {
      setPage(p)
      requestAnimationFrame(() => setTransitioning(false))
    }
  }

  const categories = useMemo(() => {
    const cats = Array.from(new Set(curatedMarbles.map((m) => m.category)))
    return ['All', ...cats]
  }, [])

  const filtered = useMemo(() => {
    return filter === 'All'
      ? curatedMarbles
      : curatedMarbles.filter((m) => m.category === filter)
  }, [filter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  useEffect(() => {
    setPage(1)
  }, [filter])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    if (active) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  const featured = curatedMarbles.slice(0, 5)

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
              Our catalogue brings together the Raj Lakshmi collection across white, beige, grey, black, brown, and imported marbles. Each stone is selected for practical use, visual character, and long-term finish quality.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-outline-variant"></span>
              <span className="text-xs font-bold text-[#1C1C1E] tracking-widest">EST. 1988</span>
            </div>
          </div>
        </header>

        {/* Featured Picks */}
        <section className="px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <StoneCard
              className="md:col-span-8"
              aspectRatio="aspect-[16/9]"
              title={featured[0].name}
              subtitle={`${featured[0].category} · Signature Selection`}
              number="001"
              src={featured[0].src}
              alt={featured[0].name}
              lazyLoad={false}
            />
            <StoneCard
              className="md:col-span-4 pt-0 md:pt-12"
              aspectRatio="aspect-[4/5]"
              title={featured[1].name}
              subtitle={`${featured[1].category} · Premium`}
              number="002"
              src={featured[1].src}
              alt={featured[1].name}
            />
            {featured.slice(2, 5).map((stone) => (
              <StoneCard
                key={`${stone.name}-${stone.src}`}
                className="md:col-span-4"
                aspectRatio="aspect-square"
                title={stone.name}
                subtitle={`${stone.category} · Curated`}
                src={stone.src}
                alt={stone.name}
              />
            ))}
          </div>
        </section>

        {/* Full Catalogue */}
        <section ref={sectionRef} className="px-12 max-w-screen-2xl mx-auto mt-32 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <span className="text-tertiary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Full Collection</span>
              <h2 className="text-4xl md:text-5xl font-bold font-noto-serif text-[#1C1C1E] leading-tight">The Complete Catalogue</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 text-xs font-bold tracking-widest uppercase border transition-colors ${
                    filter === c
                      ? 'bg-[#1C1C1E] text-white border-[#1C1C1E]'
                      : 'bg-transparent text-[#1C1C1E] border-[#1C1C1E]/20 hover:border-[#1C1C1E]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-opacity duration-300 ease-out ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
            {pageItems.map((stone, idx) => (
              <button
                key={`${stone.name}-${stone.src}`}
                onClick={() => setActive(stone)}
                className="group text-left"
              >
                <div className="relative overflow-hidden bg-surface-container-low aspect-square mb-3">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={stone.src}
                    alt={stone.name}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#1C1C1E]/0 group-hover:bg-[#1C1C1E]/20 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold tracking-widest uppercase">View</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold text-[#1C1C1E]">{stone.name}</h3>
                    <p className="text-[#8A8A8F] text-xs">{stone.category}</p>
                  </div>
                  <span className="text-[#EF2029] text-xs font-bold">
                    {String((page - 1) * PAGE_SIZE + idx + 1).padStart(3, '0')}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-4">
              <button
                onClick={() => goToPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-6 py-3 text-xs font-bold tracking-widest uppercase border border-[#1C1C1E]/20 disabled:opacity-30 hover:border-[#1C1C1E] transition-colors"
              >
                Previous
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`w-10 h-10 text-sm font-bold transition-colors ${
                      p === page
                        ? 'bg-[#1C1C1E] text-white'
                        : 'text-[#1C1C1E] hover:bg-[#1C1C1E]/5'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button
                onClick={() => goToPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="px-6 py-3 text-xs font-bold tracking-widest uppercase border border-[#1C1C1E]/20 disabled:opacity-30 hover:border-[#1C1C1E] transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="mt-32 px-12 max-w-screen-2xl mx-auto">
          <div className="bg-white p-16 md:p-24 flex flex-col items-center text-center border border-[#e8bcb8]/10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-8 max-w-2xl font-noto-serif">Require a bespoke consultation for your project?</h2>
            <p className="text-[#8A8A8F] max-w-lg mb-12">Our specialists help homeowners, architects, and developers select the right marble for the project, fabrication requirements, and installation conditions.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                type="button"
                onClick={handleDownloadCatalogue}
                disabled={isGeneratingPdf}
                className="bg-primary text-on-primary px-10 py-4 text-sm font-bold tracking-widest uppercase hover:scale-105 transition-transform disabled:cursor-wait disabled:opacity-70 disabled:hover:scale-100"
              >
                {isGeneratingPdf ? 'Preparing PDF...' : 'Request Catalogue PDF'}
              </button>
              <Link to="/enquiry" className="border-b-2 border-tertiary text-[#1C1C1E] px-4 py-4 text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors">Visit Raj Lakshmi</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-[#1C1C1E]/90 flex items-center justify-center p-6 md:p-12"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 text-white text-3xl leading-none w-12 h-12 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            ×
          </button>
          <div
            className="max-w-5xl w-full max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.name}
              className="max-h-[75vh] w-auto object-contain"
            />
            <div className="text-center mt-8">
              <span className="text-[#F5B938] font-bold tracking-[0.3em] text-xs uppercase mb-3 block">{active.category}</span>
              <h3 className="text-3xl md:text-4xl font-bold font-noto-serif text-white">{active.name}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
