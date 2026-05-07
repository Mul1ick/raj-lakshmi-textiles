import { Link } from "react-router-dom";

const mapUrl = "https://maps.app.goo.gl/cCcBa1uHD9ypEcEc6?g_st=iw";

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-[#A7A29A]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-12 md:pt-14 pb-5">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(420px,1.1fr)_minmax(60px,0.6fr)_minmax(420px,1fr)] lg:items-center">
          <div className="flex flex-col gap-6">
            <Link
              to="/"
              className="inline-flex w-fit shrink-0"
              aria-label="Raj Lakshmi Marbles home"
            >
              <img
                src="/logo-footer-white.png"
                alt="Raj Lakshmi Marbles"
                className="h-16 md:h-20 w-auto opacity-95"
              />
            </Link>
            <p className="max-w-md text-base leading-7 text-[#D7D2C8]">
              Kishangarh-based natural stone specialists with four decades of
              sourcing, fabrication, and installation experience.
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A7A29A]">
              Est. 1984 · Crafted for Prestige
            </p>
          </div>

          <div className="hidden lg:flex items-center px-8" aria-hidden="true">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <address className="not-italic text-sm leading-6 text-[#D7D2C8] lg:text-right">
              Makrana Road, RIICO Industrial Area,
              <br />
              Kishangarh, Rajasthan 305801
            </address>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
              <a
                href="tel:+919116495497"
                className="text-[#F7F7F5] hover:text-[#F5B938] transition-colors"
              >
                +91 9116495497
              </a>
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F7F7F5] hover:text-[#F5B938] transition-colors"
              >
                Google Maps
                <span className="material-symbols-outlined text-sm">
                  north_east
                </span>
              </a>
              <Link
                to="/enquiry"
                className="inline-flex items-center gap-2 border border-[#bb0016] px-3.5 py-2 text-[11px] font-bold tracking-[0.16em] uppercase text-white hover:bg-[#bb0016] transition-colors"
              >
                Enquire
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-[10px] font-bold uppercase leading-5 tracking-[0.18em]">
          <p>
            © {new Date().getFullYear()} Raj Lakshmi Marbles. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
