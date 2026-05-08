import Link from "next/link";
import { COMPANY, SERVICES, LOCATIONS } from "@/lib/data";
import { Phone, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const primaryLocations = LOCATIONS.slice(0, 7);

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* CTA band */}
      <div style={{ background: "var(--teal)" }} className="px-6 py-14 text-center">
        <p
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Ready to Start Your Project?
        </p>
        <p className="text-teal-100 mb-8 text-lg max-w-xl mx-auto">
          Free estimates. Honest timelines. Owner on-site from day one.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-teal-700 font-bold rounded-full hover:bg-teal-50 transition-colors text-lg"
          >
            Get a Free Estimate
          </Link>
          <a
            href={`tel:${COMPANY.phone}`}
            className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-colors text-lg"
          >
            {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-5">
            <span
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--teal-light)" }}
            >
              CMC
            </span>
            <span className="block text-xs tracking-[0.2em] uppercase text-gray-400 mt-0.5">
              Renovations
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Owner-operated residential remodeling serving Hamilton and Butler County since day one. Brady and Taylor on every job.
          </p>
          <div className="flex gap-3">
            <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-teal-600 transition-colors">
              <Facebook size={16} />
            </a>
            <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-teal-600 transition-colors">
              <Instagram size={16} />
            </a>
            <a href={COMPANY.social.youtube} target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-teal-600 transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">Services</h4>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-gray-300 hover:text-teal-400 transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">Areas We Serve</h4>
          <ul className="space-y-2.5">
            {primaryLocations.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="text-sm text-gray-300 hover:text-teal-400 transition-colors"
                >
                  {l.name}, {l.state}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/locations" className="text-sm text-teal-400 hover:text-teal-300 transition-colors font-medium">
                View all areas →
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-teal-400 mt-0.5 shrink-0" />
              <a href={`tel:${COMPANY.phone}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-teal-400 mt-0.5 shrink-0" />
              <span className="text-sm text-gray-300">{COMPANY.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} className="text-teal-400 mt-0.5 shrink-0" />
              <span className="text-sm text-gray-300">{COMPANY.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} CMC Renovations LLC. All rights reserved.</p>
        <p>Hamilton, OH · Licensed & Insured</p>
      </div>
    </footer>
  );
}
