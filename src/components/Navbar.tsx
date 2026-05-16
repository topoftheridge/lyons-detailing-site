"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, X, ChevronDown } from "lucide-react";
import { locations } from "@/data/locations";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  return (
    <>
    <nav className="sticky top-0 z-50 bg-[#851a1c] border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/lyonsdetailinglogo.png" alt="Lyons Detailing" width={200} height={60} className="h-[52px] lg:h-[60px] w-auto object-contain" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-end flex-1 ml-12">
            <div className="flex items-center gap-14 mr-auto ml-8">
              <Link href="/" className="text-white text-lg hover:text-primary transition font-medium tracking-wide">Home</Link>
              <Link href="/about" className="text-white text-lg hover:text-primary transition font-medium tracking-wide">About</Link>
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="text-white text-lg hover:text-primary transition font-medium tracking-wide flex items-center gap-1">
                  Services <ChevronDown className="w-5 h-5" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-0 pt-2">
                    <div className="bg-[#5a1012] border border-white/20 rounded-lg shadow-xl py-2 w-64">
                      <Link href="/services/full-detail-package" className="block px-4 py-2.5 text-base text-white/90 hover:bg-white/10 hover:text-white transition">Full Detail Package</Link>
                      <Link href="/services/interior-detailing" className="block px-4 py-2.5 text-base text-white/90 hover:bg-white/10 hover:text-white transition">Interior Detailing</Link>
                      <Link href="/services/exterior-detailing" className="block px-4 py-2.5 text-base text-white/90 hover:bg-white/10 hover:text-white transition">Exterior Detailing</Link>
                      <Link href="/services/paint-protection" className="block px-4 py-2.5 text-base text-white/90 hover:bg-white/10 hover:text-white transition">Paint Correction &amp; Protection</Link>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button className="text-white text-lg hover:text-primary transition font-medium tracking-wide flex items-center gap-1">
                  Areas <ChevronDown className="w-5 h-5" />
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 mt-0 pt-2">
                    <div className="bg-[#5a1012] border border-white/20 rounded-lg shadow-xl py-2 w-56">
                      {locations.map((loc) => (
                        <Link
                          key={loc.slug}
                          href={`/${loc.slug}`}
                          className="block px-4 py-2.5 text-base text-white/90 hover:bg-white/10 hover:text-white transition"
                        >
                          {loc.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link href="/contact" className="text-white text-lg hover:text-primary transition font-medium tracking-wide">Contact</Link>
            </div>

            <div className="flex items-center gap-4">
              <a href="tel:+10000000000" className="text-white hover:text-primary transition font-bold text-lg flex items-center gap-1.5">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link
                href="/get-quote"
                className="bg-white text-[#851a1c] px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition shadow-sm"
              >
                BOOK NOW
              </Link>
            </div>
          </div>

          <button className="lg:hidden p-2 text-white relative w-10 h-10 flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <span className="flex flex-col items-center justify-center w-6 h-5 relative">
              <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute ${mobileOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"}`} />
              <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute top-1/2 -translate-y-1/2 ${mobileOpen ? "opacity-0 scale-0" : "opacity-100"}`} />
              <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute ${mobileOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"}`} />
            </span>
          </button>
        </div>
      </div>

    </nav>

    {/* Mobile Menu Overlay */}
    <div className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setMobileOpen(false)} />

    {/* Mobile Menu Panel */}
    <div className={`lg:hidden fixed top-0 right-0 h-full w-[280px] bg-[#6b1416] border-l border-white/20 z-[70] transform transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}>
      <div className="flex items-center justify-end p-5">
        <button className="p-2 text-white" onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="px-6 pb-8 space-y-1">
        <Link href="/" className="block py-3 font-medium text-lg text-white hover:text-primary transition border-b border-white/5" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link href="/about" className="block py-3 font-medium text-lg text-white hover:text-primary transition border-b border-white/5" onClick={() => setMobileOpen(false)}>About</Link>
        
        {/* Services Accordion */}
        <div className="border-b border-white/5">
          <button className="w-full py-3 font-medium text-lg text-white hover:text-primary transition flex items-center justify-between" onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
            Services
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-48 pb-3" : "max-h-0"}`}>
            <div className="pl-4 space-y-2">
              <Link href="/services/full-detail-package" className="block text-base text-gray-400 hover:text-primary transition" onClick={() => setMobileOpen(false)}>Full Detail Package</Link>
              <Link href="/services/interior-detailing" className="block text-base text-gray-400 hover:text-primary transition" onClick={() => setMobileOpen(false)}>Interior Detailing</Link>
              <Link href="/services/exterior-detailing" className="block text-base text-gray-400 hover:text-primary transition" onClick={() => setMobileOpen(false)}>Exterior Detailing</Link>
              <Link href="/services/paint-protection" className="block text-base text-gray-400 hover:text-primary transition" onClick={() => setMobileOpen(false)}>Paint Correction &amp; Protection</Link>
            </div>
          </div>
        </div>

        {/* Areas Accordion */}
        <div className="border-b border-white/5">
          <button className="w-full py-3 font-medium text-lg text-white hover:text-primary transition flex items-center justify-between" onClick={() => setMobileAreasOpen(!mobileAreasOpen)}>
            Areas Served
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${mobileAreasOpen ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${mobileAreasOpen ? "max-h-96 pb-3" : "max-h-0"}`}>
            <div className="pl-4 space-y-2">
              {locations.map((loc) => (
                <Link key={loc.slug} href={`/${loc.slug}`} className="block text-base text-gray-400 hover:text-primary transition" onClick={() => setMobileOpen(false)}>
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link href="/contact" className="block py-3 font-medium text-lg text-white hover:text-primary transition border-b border-white/5" onClick={() => setMobileOpen(false)}>Contact</Link>
        
        <div className="pt-4 space-y-3">
          <a href="tel:+10000000000" className="flex items-center gap-2 font-bold text-white text-lg hover:text-primary transition">
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <Link href="/get-quote" className="block text-center bg-white text-[#851a1c] px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition" onClick={() => setMobileOpen(false)}>BOOK NOW</Link>
        </div>
      </div>
    </div>
    </>
  );
}
