import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Lyons Detailing",
  description: "Get in touch with Lyons Detailing. Email us at info@lyonsdetailing.com. Open Monday – Saturday, 8 AM – 6 PM.",
};

export default function ContactPage() {
  return (
    <section className="py-16 lg:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to give your vehicle the Lyons Detailing treatment? Reach out today for a free, no-obligation quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: <Mail className="w-6 h-6" />, label: "Email", content: (
                <a href="mailto:info@lyonsdetailing.com" className="text-white hover:text-primary transition">info@lyonsdetailing.com</a>
              )},
              { icon: <MapPin className="w-6 h-6" />, label: "Location", content: <span className="text-white">Your Area</span> },
              { icon: <Clock className="w-6 h-6" />, label: "Hours", content: <span className="text-white">Monday – Saturday: 8:00 AM – 6:00 PM</span> },
              { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>, label: "Instagram", content: (
                <a href="https://www.instagram.com/lyonsdetailing/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                  @lyonsdetailing
                </a>
              )},
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-lg bg-dark-lighter border border-white/5">
                <div className="text-primary mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-gray-400 text-xs font-medium mb-1">{item.label}</p>
                  {item.content}
                </div>
              </div>
            ))}

            <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg w-full sm:w-auto">
              Get a Free Quote
            </Link>
          </div>

          {/* Contact info card */}
          <div className="rounded-xl bg-dark-lighter border border-white/10 p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-4">Lyons Detailing</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We offer professional auto detailing services for all vehicle types — from daily drivers to luxury and exotic vehicles. Contact us to discuss your vehicle&apos;s needs and get a custom quote.
            </p>
            <div className="space-y-3 text-gray-300 text-sm">
              <div><span className="text-primary font-semibold">Interior Detailing</span> — Starting at $150</div>
              <div><span className="text-primary font-semibold">Exterior Detailing</span> — Starting at $150</div>
              <div><span className="text-primary font-semibold">Full Detail Package</span> — Starting at $275</div>
              <div><span className="text-primary font-semibold">Paint Correction</span> — From $300</div>
              <div><span className="text-primary font-semibold">Ceramic Coating</span> — From $400</div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-500 text-sm">Hours: Monday – Saturday, 8 AM – 6 PM</p>
              <p className="text-gray-500 text-sm mt-1">Email: <a href="mailto:info@lyonsdetailing.com" className="text-primary hover:underline">info@lyonsdetailing.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
