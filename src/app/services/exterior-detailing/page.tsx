import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Exterior Detailing | Lyons Detailing",
  description: "Professional exterior auto detailing by Lyons Detailing. Foam cannon wash, clay bar decontamination, wheel & tire deep clean, hand wax, tire dressing. Starting at $150.",
};

export default function ExteriorDetailingPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Exterior Detailing</h1>
          <p className="text-primary font-bold text-xl drop-shadow-[0_0_14px_rgba(29,78,216,0.7)]">Starting at $150</p>
          <p className="text-gray-400 mt-2">Final pricing depends on vehicle size and condition.</p>
          <p className="text-gray-300 mt-1">Most vehicles typically fall between $150–$250.</p>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          A full exterior detail starts with a thorough pre-rinse and foam cannon wash, followed by clay bar decontamination to remove embedded contaminants from the paint. We deep clean every wheel, tire, and wheel well, then remove all bugs, tar, and iron fallout. The paintwork receives a full polish treatment for gloss enhancement, followed by a hand wax application. Chrome and trim are detailed, rubber is treated, tires are dressed to a high gloss finish, and all exterior glass is cleaned streak-free. Door jambs are wiped down for a complete finish.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Full exterior pre-rinse & foam cannon wash",
            "Clay bar paint decontamination",
            "Wheel, tire & wheel well deep clean",
            "Bug, tar & iron fallout removal",
            "Paint polish & gloss enhancement",
            "Full hand wax application",
            "Chrome & trim detailing",
            "Rubber seal cleaning & treatment",
            "Tire dressing (high gloss finish)",
            "Exterior glass cleaned streak-free",
            "Door jamb cleaning",
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
            <Link href="/services/interior-detailing" className="text-gray-400 hover:text-primary transition text-lg">Interior Detailing →</Link>
            <Link href="/services/paint-protection" className="text-gray-400 hover:text-primary transition text-lg">Paint Correction & Protection →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
