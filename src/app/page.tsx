import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import HeroBackground from "@/components/HeroBackground";
import Link from "next/link";
import { locations } from "@/data/locations";
import { Sparkles, Shield, Clock, Droplets } from "lucide-react";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lyons Detailing",
    description: "Professional auto detailing services including interior detailing, exterior detailing, paint correction, and ceramic coating.",
    url: "https://lyonsdetailing.com",
    email: "info@lyonsdetailing.com",
    priceRange: "$$",
    openingHours: "Mo-Sa 08:00-18:00",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HeroBackground>
        <Hero
          title="Lyons Detailing"
          subtitle="Professional auto detailing that goes beyond the ordinary. Interior, exterior, paint correction, and ceramic coating — done right, every time."
        />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 -mt-16">
          <QuoteForm />
        </div>
      </HeroBackground>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Lyons Detailing</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mb-16">
            Not your average<br />car wash.
          </h2>

          <div className="space-y-16">
            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Sparkles className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Professional-Grade Products Only</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  We use professional-grade detailing compounds, polishes, and protectants — no shortcuts, no diluted sprays. Every vehicle leaves with a showroom-quality finish.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Shield className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Obsessive Attention to Detail</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  Every inch of your vehicle is meticulously cleaned, polished, and protected. From the wheel wells to the headliner — we treat your car like it&apos;s ours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Clock className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Monday – Saturday, 8 AM – 6 PM</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  Six days a week, we work around your schedule. Flexible appointments and efficient turnaround so you&apos;re never without your vehicle for long.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Droplets className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Protection That Lasts</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  Our detailing doesn&apos;t just clean — it shields your paint, protects your interior, and preserves your investment long after you drive away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            From deep interior cleaning to full exterior restoration and paint correction — we offer comprehensive packages for every vehicle and budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Interior Detailing */}
            <Link href="/services/interior-detailing" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/interiorcard1.jpg')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-8 flex flex-col items-start gap-3">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">Interior Detailing</h3>
                <p className="text-primary font-bold text-lg drop-shadow-[0_0_14px_rgba(29,78,216,0.7)]">Starting at $150</p>
                <p className="text-gray-200 text-base leading-relaxed">Deep vacuum, carpet & upholstery shampoo, leather conditioning, odor elimination, and interior glass cleaning.</p>
                <span className="text-primary text-base font-medium group-hover:underline mt-1">Learn More →</span>
              </div>
            </Link>

            {/* Exterior Detailing */}
            <Link href="/services/exterior-detailing" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/exteriorcard1.jpg')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-8 flex flex-col items-start gap-3">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">Exterior Detailing</h3>
                <p className="text-primary font-bold text-lg drop-shadow-[0_0_14px_rgba(29,78,216,0.7)]">Starting at $150</p>
                <p className="text-gray-200 text-base leading-relaxed">Foam cannon wash, clay bar decontamination, wheel & tire deep clean, hand wax, tire dressing, and exterior glass.</p>
                <span className="text-primary text-base font-medium group-hover:underline mt-1">Learn More →</span>
              </div>
            </Link>

            {/* Paint Correction & Protection */}
            <Link href="/services/paint-protection" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Paintcard1.jpg')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-8 flex flex-col items-start gap-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">Paint Correction &amp;&nbsp;Protection</h3>
                <p className="text-primary font-bold text-lg drop-shadow-[0_0_14px_rgba(29,78,216,0.7)]">From $75</p>
                <p className="text-gray-200 text-base leading-relaxed">Carnauba wax, paint sealant, single & two-stage paint correction, and ceramic coating packages.</p>
                <span className="text-primary text-base font-medium group-hover:underline mt-1">Learn More →</span>
              </div>
            </Link>
          </div>

          {/* Full Detail Package CTA */}
          <Link href="/services/full-detail-package" className="group mt-8 block rounded-xl border border-white/10 hover:border-primary/50 transition bg-gradient-to-r from-dark-lighter to-dark-light p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Full Detail Package</h3>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-3">Interior + Exterior detailing bundled together for a complete vehicle transformation.</p>
                <p className="text-primary font-bold text-xl drop-shadow-[0_0_14px_rgba(29,78,216,0.7)]">Starting at $275</p>
                <p className="text-gray-400 text-sm mt-1">Final pricing depends on vehicle size and condition.</p>
              </div>
              <div className="shrink-0">
                <span className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg group-hover:bg-primary-dark transition text-lg">Get Exact Quote</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Areas We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Proudly serving communities across the region with professional auto detailing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="p-4 rounded-lg bg-dark-lighter border border-white/5 hover:border-primary/50 transition text-center group"
              >
                <span className="text-white font-semibold group-hover:text-primary transition">{loc.name} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready for the <span className="text-primary">Lyons Treatment</span>?
          </h2>
          <p className="text-gray-400 mb-6">
            Fill out the form above for a free, no-obligation quote — or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:info@lyonsdetailing.com" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              Email Us
            </a>
            <span className="text-gray-500">or</span>
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              GET A FREE QUOTE
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>Mon–Sat: 8 AM – 6 PM</p>
          </div>
        </div>
      </section>
    </>
  );
}
