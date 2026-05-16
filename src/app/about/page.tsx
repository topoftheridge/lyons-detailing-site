import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Lyons Detailing",
  description: "Lyons Detailing is a professional auto detailing company dedicated to delivering showroom-quality results. Learn about our team, our process, and our commitment to excellence.",
};

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Image src="/aboutcard1.jpg" alt="" fill className="object-cover object-[70%_70%] sm:object-[center_70%]" priority />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative">
          <Hero
            title="Lyons Detailing"
            subtitle="Professional Auto Detailing — Done Right"
            showCTA={false}
          />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 justify-center pb-12 -mt-20">
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              GET A FREE QUOTE
            </Link>
            <a href="mailto:info@lyonsdetailing.com" className="inline-flex items-center justify-center bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Professional Auto Detailing | <span className="text-primary">Lyons Detailing</span>
              </h2>
              <p className="text-accent font-medium mb-8 text-lg">
                Lyons Detailing provides professional auto detailing services, helping vehicle owners restore, protect, and maintain their cars inside and out.
              </p>
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                <p>
                  We specialize in comprehensive auto detailing — going far beyond what a basic car wash delivers. Our services include interior deep cleaning, exterior paint decontamination, paint correction, ceramic coating, and full detail packages that transform your vehicle from the ground up.
                </p>
                <p>
                  From removing years of embedded grime to correcting paint swirls and protecting your finish with ceramic, every service is completed with precision and professional-grade products. Whether your vehicle needs a full restoration or a routine refresh, we deliver results you can see and feel.
                </p>
              </div>
            </div>

            {/* IMAGE SPOT 1 — Replace src with your image */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-dark-lighter aspect-[4/3] flex items-center justify-center">
              {/* <Image src="/about-1.jpg" alt="Lyons Detailing at work" width={600} height={450} className="object-cover w-full h-full" /> */}
              <span className="text-gray-600 text-sm">[Image Placeholder — about-1.jpg]</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16">
            {/* IMAGE SPOT 2 — Replace src with your image */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-dark-lighter aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
              {/* <Image src="/about-2.jpg" alt="Lyons Detailing team" width={600} height={450} className="object-cover w-full h-full" /> */}
              <span className="text-gray-600 text-sm">[Image Placeholder — about-2.jpg]</span>
            </div>

            <div className="order-1 lg:order-2">
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                <p>
                  At Lyons Detailing, we focus on quality, consistency, and real results. Every vehicle is treated with the same level of care — whether it&apos;s a daily driver, a family SUV, or a prized weekend car.
                </p>
                <p>
                  We treat every vehicle like it&apos;s our own. Our process is built around precision, care, and the kind of attention to detail that makes a real difference. When your car leaves our hands, it shows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A look at some of the vehicles we&apos;ve brought back to life.
          </p>

          {/* Gallery grid — replace placeholders with real images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-white/10 bg-dark-lighter aspect-square flex items-center justify-center">
                {/* <Image src={`/gallery-${i}.jpg`} alt={`Detailing work ${i}`} width={400} height={400} className="object-cover w-full h-full" /> */}
                <span className="text-gray-600 text-xs">[gallery-{i}.jpg]</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-dark">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to See the <span className="text-primary">Difference</span>?
          </h2>
          <p className="text-gray-400 mb-6">Get in touch today for a free quote.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:info@lyonsdetailing.com" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              Email Us
            </a>
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
