import Link from "next/link";
import Image from "next/image";
import { SERVICES, REVIEWS, GALLERY_IMAGES, COMPANY, LOCATIONS } from "@/lib/data";
import { ArrowRight, Star, CheckCircle2, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMC Renovations | Owner-Led Remodeling in Hamilton, OH",
  description:
    "Expert residential remodeling in Hamilton, OH. Kitchen, bathroom, basement remodels and more. Owner-operated by Brady & Taylor. Free estimates.",
};

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 6);
  const heroImage = GALLERY_IMAGES.find((g) => g.category === "bathroom")!;
  const featureImages = GALLERY_IMAGES.filter((g) => g.category !== "kitchen").slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with ken burns */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage.src}
            alt="CMC Renovations project"
            className="w-full h-full object-cover"
            style={{ animation: "kenBurns 20s ease-in-out infinite alternate" }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 via-transparent to-transparent" />
        </div>

        {/* Decorative teal accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10" style={{ background: "var(--teal)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Hamilton, OH · Licensed & Insured
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your Home,{" "}
              <span className="italic" style={{ color: "var(--teal-light)" }}>
                Reimagined.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
              Owner-operated renovations planned and executed with precision — Brady and Taylor on your job site every single day.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-1"
                style={{ background: "var(--teal)" }}
              >
                Get a Free Estimate
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all"
              >
                <Phone size={18} />
                {COMPANY.phone}
              </a>
            </div>

            {/* Social proof strip */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-12 border-t border-white/15">
              <div className="text-center">
                <div className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>10+</div>
                <div className="text-xs text-white/60 uppercase tracking-widest">Services</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>13</div>
                <div className="text-xs text-white/60 uppercase tracking-widest">Cities Served</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white/80 text-sm">5-star rated on Google</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── INTRO BAND ── */}
      <section className="bg-[#1a1a1a] py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
          <p
            className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Renovations built on{" "}
            <span className="italic" style={{ color: "var(--teal-light)" }}>
              trust
            </span>
            , not guesswork.
          </p>
          <div className="flex flex-wrap gap-6">
            {["Owner on-site daily", "Free estimates", "Licensed & insured", "Butler County experts"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/70 text-sm font-medium">
                <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-3">What We Do</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-charcoal leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Every Corner of<br />Your Home
              </h2>
            </div>
            <Link
              href="/services"
              className="flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group shrink-0"
            >
              All services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white border border-[#ede9df] hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-charcoal mb-2 group-hover:text-teal-700 transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-teal-600 text-sm font-semibold">
                    Learn more
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Remaining services as pills */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {SERVICES.slice(6).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#ede9df] text-sm font-medium text-charcoal hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 transition-all"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPLIT FEATURE: WHY CMC ── */}
      <section className="py-24 px-6 bg-[#ede9df] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image mosaic */}
          <div className="relative h-[500px] lg:h-[600px]">
            {featureImages[0] && (
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl">
                <img src={featureImages[0].src} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            {featureImages[1] && (
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-xl border-4 border-[#ede9df]">
                <img src={featureImages[1].src} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            {/* Teal accent box */}
            <div
              className="absolute bottom-16 left-6 px-6 py-4 rounded-2xl text-white shadow-lg"
              style={{ background: "var(--teal)" }}
            >
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                5★
              </div>
              <div className="text-xs text-teal-100 uppercase tracking-widest mt-0.5">
                Google Rating
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-4">Why CMC</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Owner is On<br />Your Job Site
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              When you hire CMC Renovations, you're hiring Brady and Taylor directly. No middlemen, no unanswered calls, no wondering who's actually doing the work. Owner-operated means you get real accountability — from the first estimate through the final walkthrough.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Free, detailed estimates with no hidden costs",
                "Owner on-site from day one through final walkthrough",
                "Clear communication — you'll always know what's next",
                "Licensed & insured in Ohio with general contractor experience",
                "Serving Hamilton and 12+ surrounding communities",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white transition-all hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5"
              style={{ background: "var(--teal)" }}
            >
              Meet the Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 px-6 bg-[#1a1a1a] relative overflow-hidden">
        {/* Background text decoration */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/[0.02] select-none pointer-events-none leading-none"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          PROCESS
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-4">How It Works</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Simple. Transparent. Done Right.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Free Estimate",
                desc: "Brady walks your space, listens to your vision, and provides a detailed, no-pressure estimate at no cost.",
              },
              {
                num: "02",
                title: "Scope & Schedule",
                desc: "We put together a clear project plan — timeline, milestones, and who's handling what — before work begins.",
              },
              {
                num: "03",
                title: "Owner-Led Build",
                desc: "Brady and Taylor are on-site daily, managing every detail and keeping you informed as work progresses.",
              },
              {
                num: "04",
                title: "Final Walkthrough",
                desc: "We don't leave until you're satisfied. A thorough walkthrough ensures every detail meets our standard.",
              },
            ].map((step, i) => (
              <div key={step.num} className="relative">
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/10 z-0" />
                )}
                <div className="relative z-10 p-7 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <div
                    className="text-5xl font-bold mb-5 leading-none"
                    style={{ fontFamily: "var(--font-playfair)", color: "var(--teal-light)" }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="py-16 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Recent Work
            </h2>
            <Link
              href="/gallery"
              className="flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group"
            >
              Full gallery <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Horizontal scroll photo strip */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            {GALLERY_IMAGES.slice(0, 10).map((img, i) => (
              <Link
                href="/gallery"
                key={i}
                className="snap-start shrink-0 w-64 h-80 rounded-2xl overflow-hidden block relative group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-charcoal capitalize">
                    {img.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 px-6 bg-[#ede9df]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-4">Happy Customers</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#d4cfc4] hover:shadow-lg hover:shadow-teal-100 transition-all hover:-translate-y-1"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  "{review.text.slice(0, 180)}{review.text.length > 180 ? "…" : ""}"
                </p>
                <p className="font-bold text-charcoal text-sm">— {review.author}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={COMPANY.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-teal-300 text-teal-700 font-semibold hover:bg-teal-50 transition-colors text-sm"
            >
              Read all reviews on Google
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-24 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-4">Where We Work</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Serving Greater<br />Butler County
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                CMC Renovations serves Hamilton and 12 surrounding communities — with local knowledge of permitting, building practices, and what homeowners in the area actually need.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white transition-all hover:shadow-lg"
                style={{ background: "var(--teal)" }}
              >
                Get a Free Estimate <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all hover:-translate-y-0.5 ${
                    loc.primary
                      ? "bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-200"
                      : "bg-white border-[#ede9df] text-charcoal hover:border-teal-200 hover:text-teal-700"
                  }`}
                >
                  <MapPin size={12} className={loc.primary ? "text-teal-200" : "text-teal-400"} />
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
