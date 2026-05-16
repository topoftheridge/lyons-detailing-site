import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Full Detail Package | Lyons Detailing",
  description: "Full detail package by Lyons Detailing — interior + exterior detailing bundled together for a complete vehicle transformation. Starting at $275.",
};

export default function FullDetailPackagePage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Full Detail Package</h1>
          <p className="text-primary font-bold text-xl drop-shadow-[0_0_14px_rgba(29,78,216,0.7)]">Starting at $275</p>
          <p className="text-gray-400 mt-2">Most vehicles typically fall between $275–$400 depending on size and condition.</p>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          The ultimate vehicle transformation. Our Full Detail Package combines a complete exterior detailing with a thorough interior clean — leaving your vehicle looking and feeling brand new inside and out. We start with a full foam cannon wash, clay bar decontamination, deep wheel and tire cleaning, bug and tar removal, door jamb cleaning, paint polish, and a full hand wax. Inside, we vacuum everything, remove and shampoo floor mats, shampoo all carpets and upholstery, condition leather, detail every surface, clean air vents, and finish with Scotch Guard protection and odor elimination. Only the finest professional products are used throughout.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">Exterior — What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Full exterior pre-rinse & foam cannon wash",
            "Clay bar paint decontamination",
            "Wheel, tire & wheel well deep clean",
            "Door jamb cleaning",
            "Bug, tar & iron fallout removal",
            "Paint polish & gloss enhancement",
            "Full hand wax application",
            "Chrome & trim polishing",
            "Rubber seal cleaning & treatment",
            "Tire dressing (high gloss finish)",
            "Exterior glass cleaned streak-free",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Interior — What&apos;s Included</h2>
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
            Get Your Exact Quote
          </Link>
          <a href="mailto:info@lyonsdetailing.com" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
            <Phone className="w-5 h-5" /> Contact Us
          </a>
        </div>

        {/* Other Services */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Explore Our Other Services</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <Link href="/services/interior-detailing" className="text-gray-400 hover:text-primary transition text-lg">Interior Detailing →</Link>
            <Link href="/services/exterior-detailing" className="text-gray-400 hover:text-primary transition text-lg">Exterior Detailing →</Link>
            <Link href="/services/paint-protection" className="text-gray-400 hover:text-primary transition text-lg">Paint Correction & Protection →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
