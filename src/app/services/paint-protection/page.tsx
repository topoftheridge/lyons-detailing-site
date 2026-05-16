import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Paint Correction & Protection | Lyons Detailing",
  description: "Paint correction and protection services by Lyons Detailing. Carnauba wax, paint sealant, single & two-stage paint correction, ceramic coating, headlight restoration, and more.",
};

export default function PaintProtectionPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Paint Correction &amp; Protection</h1>
          <p className="text-primary font-bold text-xl drop-shadow-[0_0_14px_rgba(29,78,216,0.7)]">From $75</p>
          <p className="text-gray-400 mt-2">Add these to any detail or book standalone.</p>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Take your vehicle&apos;s paint to the next level. Whether you need a basic wax to enhance shine, a full multi-stage paint correction to remove swirl marks and scratches, or a long-lasting ceramic coating for ultimate protection — we have the right solution for your vehicle and budget.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">Paint Protection Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            { name: "Carnauba Wax", price: "$75", desc: "Classic hand wax for shine and short-term protection" },
            { name: "Paint Sealant", price: "$100", desc: "Synthetic polymer sealant for longer-lasting protection" },
            { name: "Single Stage Paint Correction", price: "$300–$500", desc: "Remove light swirls, water spots & minor scratches" },
            { name: "Two Stage Paint Correction", price: "$500–$900", desc: "Deep correction for heavy swirls, oxidation & scratches" },
            { name: "Ceramic Coating (1 Year)", price: "$400", desc: "Durable hydrophobic ceramic layer — 1 year protection" },
            { name: "Ceramic Coating (3 Year)", price: "$700", desc: "Premium multi-layer ceramic coating — 3 year protection" },
          ].map((service) => (
            <div key={service.name} className="p-5 rounded-lg bg-dark-lighter border border-white/5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <span className="text-white font-semibold text-lg">{service.name}</span>
                <span className="text-primary font-bold text-lg shrink-0">{service.price}</span>
              </div>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Add-On Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            { name: "Engine Detail", price: "$80–$120" },
            { name: "Headlight Restoration", price: "$60" },
            { name: "Odor Bomb Treatment", price: "$40" },
            { name: "Pet Hair Removal", price: "$50–$100" },
          ].map((addon) => (
            <div key={addon.name} className="flex items-center justify-between p-5 rounded-lg bg-dark-lighter border border-white/5">
              <span className="text-white font-medium text-lg">{addon.name}</span>
              <span className="text-primary font-bold text-lg">{addon.price}</span>
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
            <Link href="/services/exterior-detailing" className="text-gray-400 hover:text-primary transition text-lg">Exterior Detailing →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
