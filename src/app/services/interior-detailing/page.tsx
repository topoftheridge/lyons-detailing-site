import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Detailing | Lyons Detailing",
  description: "Professional interior auto detailing by Lyons Detailing. Deep vacuum, carpet & upholstery shampoo, leather conditioning, odor elimination, and interior glass. Starting at $150.",
};

export default function InteriorDetailingPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Interior Detailing</h1>
          <p className="text-primary font-bold text-xl drop-shadow-[0_0_14px_rgba(133,26,28,0.8)]">Starting at $150</p>
          <p className="text-gray-400 mt-2">Final pricing depends on vehicle size and condition.</p>
          <p className="text-gray-300 mt-1">Most vehicles typically fall between $150–$250.</p>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Our interior detailing service is a full clean-and-restore treatment for the inside of your vehicle. We start with a thorough vacuum of every surface — seats, carpets, and trunk. Floor mats are removed and shampooed. We deep shampoo all carpeting and upholstery, then clean every door panel, console compartment, dashboard, instruments, knobs, and trim. Leather surfaces are cleaned and conditioned. Air vents are detail-cleaned. Headliner is spot-cleaned. All interior glass and mirrors are cleaned spotless. We finish with a Scotch Guard fabric protection treatment and an odor elimination treatment to leave your vehicle fresh.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Full interior vacuum — seats, carpets & trunk",
            "Floor mat removal & deep shampoo",
            "Carpet & upholstery deep shampoo",
            "Door panel & compartment cleaning",
            "Headliner spot cleaning",
            "Dashboard, instruments, knobs & trim cleaning",
            "Leather cleaning & conditioning (if applicable)",
            "Air vent detail cleaning",
            "Scotch Guard fabric protection",
            "Interior glass & mirror cleaning — spotless",
            "Odor elimination treatment",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
            Get Your Free Quote
          </Link>
          <a href="mailto:info@lyonsdetailing.com" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
            <Phone className="w-5 h-5" /> Contact Us
          </a>
        </div>

        {/* Other Services */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Explore Our Other Services</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <Link href="/services/full-detail-package" className="text-gray-400 hover:text-primary transition text-lg">Full Detail Package →</Link>
            <Link href="/services/exterior-detailing" className="text-gray-400 hover:text-primary transition text-lg">Exterior Detailing →</Link>
            <Link href="/services/paint-protection" className="text-gray-400 hover:text-primary transition text-lg">Paint Correction & Protection →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
