import { Link } from "react-router-dom";
import armaniBronzeMarble from "../assets/marbles/armani-bronze.jpg";
import marbleQuarryAerial from "../assets/site/marble-quarry-aerial.jpg";

export default function About() {
  return (
    <div className="bg-[#F7F7F5] text-[#1C1C1E] antialiased">
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-12 max-w-screen-2xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-[#F5B938] font-bold tracking-[0.3em] text-xs uppercase mb-6 block font-body">
                Our Heritage
              </span>
              <h1 className="text-6xl lg:text-8xl font-bold font-noto-serif leading-[1.05] tracking-tight mb-8">
                From the Quarry <br />
                <span className="text-[#bb0016]">to Your Floor.</span>
              </h1>
              <p className="text-[#8A8A8F] text-xl leading-relaxed max-w-lg font-body">
                Perfection in every step. At Rajlaxmi Marbles, a customer is not
                just buying stone for today; they are investing in a masterpiece
                made to live in their heart and memories for decades.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Armani Bronze marble — a richly veined slab from Raj Lakshmi's curated collection"
                  src={armaniBronzeMarble}
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
                <span className="material-symbols-outlined text-4xl text-[#bb0016] mb-8">
                  diamond
                </span>
                <h2 className="text-4xl md:text-5xl font-noto-serif font-bold leading-tight">
                  About Us
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-7 text-[#8A8A8F] text-lg leading-relaxed">
                <p>
                  At Rajlaxmi Marbles, our journey began over four decades ago
                  with a profound respect for natural stone. Based in
                  Kishangarh, the heart of India's stone industry, our expertise
                  has been forged through generations of hands-on sourcing,
                  manufacturing, and selection.
                </p>
                <p>
                  We believe that a stone's true quality reveals itself over
                  time. This deep understanding of stone anatomy allows us to
                  bridge the gap between raw nature and finished architecture.
                </p>
                <p>
                  Today, we have evolved beyond being mere suppliers to become a
                  comprehensive end-to-end partner. From global sourcing to
                  masterclass fitting, we ensure that the elegance you select is
                  the excellence we install.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-32 px-12 max-w-screen-2xl mx-auto">
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-noto-serif text-[#bb0016] text-sm tracking-[0.3em]">
              —
            </span>
            <span className="text-[#1C1C1E] font-bold tracking-[0.3em] text-[11px] uppercase font-body">
              Our Charter
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-[#1C1C1E]/8 p-12 lg:p-16 relative">
              <div className="absolute top-0 left-0 h-px w-20 bg-[#bb0016]" />
              <div className="flex items-baseline justify-between mb-12">
                <span className="text-[#1C1C1E] font-bold tracking-[0.3em] text-[11px] uppercase">
                  Mission
                </span>
                <span className="font-noto-serif text-[#bb0016] text-sm">
                  01
                </span>
              </div>
              <p className="font-noto-serif text-[#1C1C1E] text-2xl lg:text-[28px] leading-[1.45] mb-12 max-w-lg">
                A seamless marble experience, from quarry to keystone.
              </p>
              <p className="text-[#5A5A5F] leading-[1.85] text-base max-w-lg">
                To provide a seamless, end-to-end marble experience by
                integrating global sourcing, precision fabrication, and expert
                installation, ensuring that every stone selected is a
                masterpiece perfectly realized in our clients' spaces.
              </p>
            </div>

            <div className="bg-[#FAF8F4] border border-[#1C1C1E]/8 p-12 lg:p-16 relative">
              <div className="absolute top-0 left-0 h-px w-20 bg-[#bb0016]" />
              <div className="flex items-baseline justify-between mb-12">
                <span className="text-[#1C1C1E] font-bold tracking-[0.3em] text-[11px] uppercase">
                  Vision
                </span>
                <span className="font-noto-serif text-[#bb0016] text-sm">
                  02
                </span>
              </div>
              <p className="font-noto-serif text-[#1C1C1E] text-2xl lg:text-[28px] leading-[1.45] mb-12 max-w-lg">
                The global benchmark for excellence in natural stone.
              </p>
              <p className="text-[#5A5A5F] leading-[1.85] text-base max-w-lg">
                To be the global benchmark for excellence in the natural stone
                industry, recognized for providing a seamless and inspiring
                journey for every client, from first selection to final
                installation.
              </p>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-12 px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-baseline gap-6 mb-8">
                <span className="font-noto-serif text-[#bb0016] text-sm tracking-[0.3em]">
                  —
                </span>
                <span className="text-[#1C1C1E] font-bold tracking-[0.3em] text-[11px] uppercase font-body">
                  The Rajlaxmi Advantage
                </span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-noto-serif font-bold text-[#1C1C1E] leading-[1.05] tracking-tight">
                Why Us?
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-[#5A5A5F] leading-[1.85] mb-6">
                What separates a stone supplier from a stone partner — practiced
                and refined over forty years.
              </p>
              <Link
                to="/enquiry"
                className="inline-flex items-center gap-3 text-[#1C1C1E] hover:text-[#bb0016] transition-colors group"
              >
                <span className="text-xs font-bold tracking-[0.28em] uppercase">
                  Partner With Us
                </span>
                <span className="h-px w-10 bg-[#1C1C1E] group-hover:bg-[#bb0016] group-hover:w-16 transition-all" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "True End-to-End Solutions",
                desc: "We manage the entire lifecycle of your project, from expert global selection and precision fabrication to master-class installation. You deal with one partner; we take 100% accountability.",
              },
              {
                num: "02",
                title: "A 40-Year Legacy of Trust",
                desc: "Four decades of experience combine multi-generational wisdom with modern professional standards, built on successfully delivered projects and a deep understanding of stone durability.",
              },
              {
                num: "03",
                title: "Global Sourcing & Exclusive Curation",
                desc: "We do not just stock marble; we curate it. Our team hand-selects blocks for color consistency, structural integrity, and rarity from the world's most prestigious quarries.",
              },
              {
                num: "04",
                title: "Institutional Scale & Reliability",
                desc: "From bespoke luxury villas to large commercial developments, our infrastructure supports transparent pricing, strict delivery timelines, and uncompromising quality control.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="group bg-white border border-[#1C1C1E]/8 p-10 lg:p-12 relative"
              >
                <div className="absolute top-0 left-0 h-px w-0 bg-[#bb0016] group-hover:w-20 transition-all duration-500" />
                <div className="mb-8">
                  <span className="text-[#8A8A8F] tracking-[0.3em] text-[10px] uppercase">
                    Principle
                  </span>
                </div>
                <h3 className="text-2xl lg:text-[26px] font-noto-serif font-bold text-[#1C1C1E] mb-6 leading-[1.2] max-w-sm">
                  {value.title}
                </h3>
                <p className="text-[#5A5A5F] leading-[1.85] text-[15px]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
