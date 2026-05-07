import { Link } from "react-router-dom";
import curatedMarbles from "../curated-marbles";
import homeStatuarioMarbleHero from "../assets/site/home-statuario-marble-hero.jpg";
import naturalStoneMacro from "../assets/site/natural-stone-macro.jpg";
import rajLakshmiShowroom from "../assets/site/raj-lakshmi-showroom.jpg";
import marbleSampleBook from "../assets/site/marble-sample-book.jpg";

export default function Home() {
  const findMarble = (name) =>
    curatedMarbles.find((marble) => marble.name === name);
  const legacyStats = [
    { value: "40+", label: "years of experience", letter: "R" },
    { value: "100+", label: "varieties", letter: "L" },
    { value: "400 lakh+", label: "sq. ft. stone sold", letter: "M" },
  ];
  const legacyPillars = [
    {
      title: "Uncompromising Quality",
      copy: `Our reputation is built on "top-notch" standards. We implement rigorous quality control measures to ensure that every product meets the highest benchmarks of durability and performance.`,
    },
    {
      title: "True Value for Money",
      copy: "Premium quality shouldn't come with an unreasonable price tag. Our streamlined processes and deep industry roots allow us to offer high-end solutions that maximize your investment.",
    },
    {
      title: "Decades of Mastery",
      copy: "Three and a half decades in the business means we've seen the industry evolve. We leverage this deep institutional knowledge to anticipate challenges and provide unmatched insights.",
    },
    {
      title: "Client-Centric Excellence",
      copy: "We are known for our commitment to the end result. Our focus remains on delivering products that provide long-term utility, ensuring our value proposition extends far beyond the initial purchase.",
    },
  ];
  const featuredCollections = [
    findMarble("Moon Cream"),
    findMarble("Black Rose"),
    findMarble("Royal Beige"),
  ].filter(Boolean);
  const [primaryStone, secondaryStone, tertiaryStone] = featuredCollections;

  return (
    <div className="bg-surface text-on-surface">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Luxurious high-resolution close-up of Statuario marble with elegant gray veining on a pure white background with dramatic lighting"
            src={homeStatuarioMarbleHero}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F7F5] via-[#F7F7F5]/40 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-12 lg:px-24">
          <div className="max-w-3xl">
            <span className="inline-block text-[#F5B938] font-bold tracking-[0.2em] text-xs mb-6 font-body">
              ESTABLISHED 1988 — RAJ LAKSHMI MARBLES
            </span>
            <h1 className="text-7xl md:text-8xl font-noto-serif font-black text-[#1C1C1E] leading-[0.95] tracking-tight mb-8">
              The Art of <br />
              <span className="text-[#bb0016]">Living Stone.</span>
            </h1>
            <p className="text-xl text-[#8A8A8F] font-body max-w-lg mb-10 leading-relaxed">
              Explore hand-selected white, beige, grey, black, brown, and
              imported marbles curated for homes, commercial spaces, and
              statement interiors.
            </p>
            <div className="flex items-center space-x-8">
              <Link
                to="/catalog"
                className="bg-[#EF2029] text-white px-10 py-5 rounded-md font-body font-bold text-sm tracking-widest hover:scale-102 transition-transform duration-200 shadow-xl shadow-[#EF2029]/10"
              >
                DISCOVER THE COLLECTION
              </Link>
              <Link to="/catalog" className="flex items-center space-x-3 group">
                <span className="w-12 h-[1px] bg-[#1C1C1E] group-hover:w-16 transition-all"></span>
                <span className="text-[#1C1C1E] font-bold text-xs tracking-widest">
                  VIEW CATALOGUE
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="relative z-10 bg-white border-y border-[#1C1C1E]/5">
        <div className="max-w-screen-2xl mx-auto px-12 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1E]/10">
            {legacyStats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative py-8 md:py-4 md:px-10 first:pt-0 last:pb-0 md:first:pt-4 md:last:pb-4 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-noto-serif font-black leading-none"
                  style={{
                    fontSize: "clamp(7rem, 12vw, 12rem)",
                    color: "rgba(187, 0, 22, 0.09)",
                  }}
                >
                  {stat.letter}
                </span>
                <div className="relative flex items-baseline gap-3 mb-3">
                  <span
                    className="typewriter-stat font-noto-serif text-5xl md:text-6xl font-black text-[#bb0016]"
                    style={{
                      "--delay": `${index * 0.65}s`,
                      "--chars": stat.value.length,
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
                <p
                  className="relative typewriter-stat text-[#1C1C1E] text-sm font-extrabold tracking-[0.22em] uppercase"
                  style={{
                    "--delay": `${index * 0.65 + 0.35}s`,
                    "--chars": stat.label.length,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              With over four decades of industry expertise, we have built a
              legacy rooted in trust, precision, and excellence. We don’t just
              provide products; we deliver peace of mind through a proven track
              record of reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-[#1C1C1E]/10">
            {legacyPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="group border-b border-[#1C1C1E]/10 px-0 py-8 md:border-r md:px-7 lg:border-b-0 lg:last:border-r-0"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold tracking-[0.24em] text-[#bb0016]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-12 bg-[#1C1C1E]/15 transition-colors group-hover:bg-[#bb0016]" />
                </div>
                <h3 className="mb-4 max-w-[14rem] font-noto-serif text-2xl font-bold leading-tight text-[#1C1C1E]">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-7 text-[#6F6F73]">
                  {pillar.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Curator's Selection (Bento Grid) */}
      <section className="py-6 bg-[#F7F7F5]">
        <div className="max-w-screen-2xl mx-auto px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-noto-serif font-bold text-[#1C1C1E] mb-6">
                Our Marble Collections
              </h2>
              <p className="text-[#8A8A8F] text-lg max-w-md">
                A focused selection from the same Raj Lakshmi catalogue: whites,
                beiges, greys, dramatic dark stones, and imported statement
                pieces.
              </p>
            </div>
            <div className="text-right">
              <span className="block text-6xl font-noto-serif text-[#e2e3e1] leading-none mb-2">
                {curatedMarbles.length}
              </span>
              <span className="text-xs font-bold tracking-widest text-[#F5B938]">
                CATALOGUE STONES
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            <div className="md:col-span-8 relative group overflow-hidden rounded-xl bg-surface-container-low">
              <img
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                alt={`${primaryStone.name} ${primaryStone.category} marble slab`}
                src={primaryStone.src}
              />
              <div className="absolute bottom-10 left-10 text-white z-10">
                <span className="text-xs font-bold tracking-widest bg-[#bb0016] px-4 py-1 mb-4 inline-block">
                  {primaryStone.category}
                </span>
                <h3 className="text-4xl font-noto-serif font-bold">
                  {primaryStone.name}
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/60 to-transparent"></div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="relative group overflow-hidden rounded-xl bg-surface-container-low">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt={`${secondaryStone.name} ${secondaryStone.category} marble slab`}
                  src={secondaryStone.src}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#F5B938]">
                    {secondaryStone.category}
                  </span>
                  <h4 className="text-2xl font-noto-serif font-bold">
                    {secondaryStone.name}
                  </h4>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl bg-surface-container-low">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt={`${tertiaryStone.name} ${tertiaryStone.category} marble slab`}
                  src={tertiaryStone.src}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#F5B938]">
                    {tertiaryStone.category}
                  </span>
                  <h4 className="text-2xl font-noto-serif font-bold">
                    {tertiaryStone.name}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="pt-32 pb-12 bg-[#F7F7F5]">
        <div className="max-w-screen-2xl mx-auto px-12">
          <div className="bg-[#F7F7F5] p-16 md:p-24 rounded-2xl flex flex-col md:flex-row gap-20 items-center justify-between">
            <div className="max-w-xl">
              <h2 className="text-5xl font-noto-serif font-bold text-[#1C1C1E] mb-8">
                Ready to define your space?
              </h2>
              <p className="text-[#8A8A8F] text-lg mb-10">
                Send us your project requirements and our team will help
                shortlist suitable marble options from the Raj Lakshmi
                catalogue.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  to="/catalog"
                  className="border border-[#1C1C1E]/20 text-[#1C1C1E] px-8 py-4 rounded-md font-bold text-sm tracking-widest hover:border-[#1C1C1E] transition-colors text-center"
                >
                  VIEW CATALOGUE
                </Link>
                <Link
                  to="/enquiry"
                  className="bg-[#1C1C1E] text-[#F7F7F5] px-8 py-4 rounded-md font-bold text-sm tracking-widest hover:bg-[#bb0016] transition-colors text-center"
                >
                  ENQUIRE
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square relative rounded-xl overflow-hidden rotate-3 shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Flat lay of marble sample book with various stone swatches, architectural drawings, and a brass ruler on an architect's desk"
                src={marbleSampleBook}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
