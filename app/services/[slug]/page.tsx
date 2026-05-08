import { SERVICES, LOCATIONS, COMPANY } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} in Hamilton, OH`,
    description: service.description,
  };
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-[#1a1a1a]/20" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "var(--teal)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">CMC Renovations</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {service.title}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">{service.description}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold hover:shadow-xl hover:shadow-teal-500/30 transition-all"
              style={{ background: "var(--teal)" }}
            >
              Free Estimate <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white font-bold hover:bg-white/20 transition-all"
            >
              <Phone size={16} /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-4">What's Included</p>
            <h2
              className="text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {service.headline}
            </h2>
            <ul className="space-y-4">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery mini */}
          <div className="grid grid-cols-2 gap-4">
            {service.galleryImages.map((src, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden ${i === 0 ? "col-span-2 h-64" : "h-40"}`}
              >
                <img src={src} alt={service.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations served for this service */}
      <section className="py-16 px-6 bg-[#ede9df]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {service.title} Near You
          </h2>
          <div className="flex flex-wrap gap-3">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="px-4 py-2 rounded-full bg-white border border-[#d4cfc4] text-sm font-medium text-charcoal hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50 transition-all"
              >
                {service.shortTitle} in {loc.name}, OH
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-24 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-bold text-charcoal mb-10"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Explore Other Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group p-5 rounded-2xl bg-white border border-[#ede9df] hover:border-teal-200 hover:shadow-md transition-all"
              >
                <span className="text-2xl mb-3 block">{s.icon}</span>
                <h3 className="font-bold text-charcoal text-sm group-hover:text-teal-700 transition-colors">
                  {s.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
