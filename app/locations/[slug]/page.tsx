import { LOCATIONS, SERVICES, COMPANY, LOCATION_IMAGES } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loc = LOCATIONS.find((l) => l.slug === params.slug);
  if (!loc) return {};
  return {
    title: `Home Remodeling in ${loc.name}, OH`,
    description: `CMC Renovations provides expert kitchen, bathroom, and basement remodeling in ${loc.name}, ${loc.county}, OH. Free estimates. Owner-operated.`,
  };
}

export default function LocationPage({ params }: Props) {
  const loc = LOCATIONS.find((l) => l.slug === params.slug);
  if (!loc) notFound();

  const locIndex = LOCATIONS.findIndex((l) => l.slug === params.slug);
  const heroImg = LOCATION_IMAGES[locIndex % LOCATION_IMAGES.length];
  const showcaseImages = [
    LOCATION_IMAGES[(locIndex) % LOCATION_IMAGES.length],
    LOCATION_IMAGES[(locIndex + 1) % LOCATION_IMAGES.length],
    LOCATION_IMAGES[(locIndex + 2) % LOCATION_IMAGES.length],
    LOCATION_IMAGES[(locIndex + 3) % LOCATION_IMAGES.length],
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/85 to-[#1a1a1a]/60" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "var(--teal)" }} />
        <div
          className="absolute top-1/2 right-16 -translate-y-1/2 text-[18vw] font-bold text-white/[0.03] select-none pointer-events-none leading-none hidden lg:block"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {loc.name.toUpperCase()}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <MapPin size={12} />
            {loc.county}, {loc.state}
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Remodeling in<br />
            <span className="italic" style={{ color: "var(--teal-light)" }}>{loc.name}</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mb-10">
            CMC Renovations brings owner-operated renovations to {loc.name} homeowners — kitchen remodels, bathroom updates, basement finishing, and more. Brady and Taylor on every job.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold hover:shadow-xl transition-all"
              style={{ background: "var(--teal)" }}
            >
              Free Estimate in {loc.name} <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 transition-all"
            >
              <Phone size={16} /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Why CMC in this location */}
      <section className="py-24 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-4">Local Expertise</p>
            <h2
              className="text-4xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Trusted Remodeling in {loc.name}, OH
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              CMC Renovations has been serving {loc.name} and the wider {loc.county} area with owner-led residential remodeling. We understand local permit processes, contractor requirements, and what {loc.name} homeowners expect from their renovation investment.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're updating a kitchen, finishing a basement, or adding square footage to your {loc.name} home, you'll have Brady and Taylor directly managing your project — on site daily, responsive to every question.
            </p>
            <ul className="space-y-3">
              {[
                `Serving ${loc.name} and all of ${loc.county}`,
                "Free, no-pressure estimates at your home",
                "Licensed Ohio general contractor",
                "All work backed by our quality guarantee",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services in this location */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-6">Services in {loc.name}</p>
            <div className="space-y-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between p-4 rounded-xl bg-white border border-[#ede9df] hover:border-teal-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{s.icon}</span>
                    <span className="font-medium text-charcoal group-hover:text-teal-700 transition-colors text-sm">
                      {s.title} in {loc.name}
                    </span>
                  </div>
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent work showcase */}
      <section className="py-16 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <h2
              className="text-2xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Recent Work Near {loc.name}
            </h2>
            <Link
              href="/gallery"
              className="flex items-center gap-2 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors group"
            >
              View full gallery <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {showcaseImages.map((src, i) => (
              <Link href="/gallery" key={i} className="group rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={src}
                  alt="CMC Renovations project"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-16 px-6 bg-[#ede9df]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            We Also Serve Nearby Communities
          </h2>
          <div className="flex flex-wrap gap-3">
            {LOCATIONS.filter((l) => l.slug !== loc.slug).map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="px-4 py-2 rounded-full bg-white border border-[#d4cfc4] text-sm font-medium text-charcoal hover:border-teal-400 hover:text-teal-700 transition-all"
              >
                {l.name}, OH
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
