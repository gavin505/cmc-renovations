"use client";
import { useState } from "react";
import { GALLERY_IMAGES } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = ["all", "kitchen", "bathroom", "basement", "general"] as const;

export default function GalleryPage() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/ShowerRemodel3.jpg" alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1a1a1a]/70" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "var(--teal)" }} />
        <div
          className="absolute top-1/2 right-12 -translate-y-1/2 text-[15vw] font-bold text-white/[0.03] select-none pointer-events-none leading-none hidden lg:block"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          GALLERY
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-4">Our Work</p>
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Project Gallery
          </h1>
          <p className="text-xl text-white/70 max-w-xl">
            Real projects, real homes. Browse our recent work across kitchens, bathrooms, basements, and more.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold capitalize transition-all ${
                  active === cat
                    ? "text-white shadow-md shadow-teal-200"
                    : "bg-white border border-[#ede9df] text-charcoal hover:border-teal-300 hover:text-teal-700"
                }`}
                style={active === cat ? { background: "var(--teal)" } : {}}
              >
                {cat === "all" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-2xl overflow-hidden group relative"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-charcoal capitalize">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <p
              className="text-3xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to Start Your Project?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg hover:shadow-xl transition-all"
              style={{ background: "var(--teal)" }}
            >
              Get a Free Estimate <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
