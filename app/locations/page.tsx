import Link from "next/link";
import { LOCATIONS, SERVICES, COMPANY, LOCATION_IMAGES } from "@/lib/data";
import { ArrowRight, MapPin, Phone, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | CMC Renovations",
  description:
    "CMC Renovations serves Hamilton and Butler County, OH. Kitchen, bathroom, and basement remodeling in Hamilton, Trenton, Oxford, Fairfield, Liberty Township, West Chester, and more.",
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={LOCATION_IMAGES[0]}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/85 to-[#1a1a1a]/60" />
        </div>
        <div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ background: "var(--teal)" }}
        />
        <div
          className="absolute top-1/2 right-16 -translate-y-1/2 text-[14vw] font-bold text-white/[0.03] select-none pointer-events-none leading-none hidden lg:block"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          LOCATIONS
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <MapPin size={12} />
            Butler County, OH
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Areas We{" "}
            <span className="italic" style={{ color: "var(--teal-light)" }}>
              Serve
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mb-10">
            CMC Renovations provides owner-operated remodeling across Hamilton
            and Butler County. Brady and Taylor on every job — no matter the
            location.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold hover:shadow-xl transition-all"
              style={{ background: "var(--teal)" }}
            >
              Get a Free Estimate <ArrowRight size={16} />
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

      {/* All locations grid */}
      <section className="py-24 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-3">
              Where We Work
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-charcoal leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Serving Greater Butler County
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LOCATIONS.map((loc, i) => {
              const img = LOCATION_IMAGES[i % LOCATION_IMAGES.length];
              return (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-[#ede9df] hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={img}
                      alt={`Remodeling in ${loc.name}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent" />
                    {loc.primary && (
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-teal-600">
                        Primary Location
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin
                        size={14}
                        className="text-teal-500 shrink-0"
                      />
                      <h3
                        className="text-xl font-bold text-charcoal group-hover:text-teal-700 transition-colors"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {loc.name}, {loc.state}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      Kitchen, bathroom, and basement remodeling in{" "}
                      {loc.name}. {loc.county}.
                    </p>
                    <div className="flex items-center gap-1.5 text-teal-600 text-sm font-semibold">
                      View details
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 px-6 bg-[#ede9df]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-4">
              Our Services
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Full-Service Remodeling,{" "}
              <span className="italic" style={{ color: "var(--teal)" }}>
                Everywhere
              </span>{" "}
              We Serve
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              No matter which Butler County community you call home, CMC
              Renovations brings the same owner-led quality, transparent
              pricing, and hands-on project management.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Owner on-site daily at every location",
                "Free, no-pressure estimates at your home",
                "Licensed Ohio general contractor",
                "Serving all of Butler County",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-teal-600 shrink-0"
                  />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white transition-all hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5"
              style={{ background: "var(--teal)" }}
            >
              Get a Free Estimate <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between p-5 rounded-xl bg-white border border-[#d4cfc4] hover:border-teal-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <span className="font-bold text-charcoal group-hover:text-teal-700 transition-colors">
                      {s.title}
                    </span>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Available across all service areas
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-gray-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
