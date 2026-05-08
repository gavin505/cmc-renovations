import { COMPANY, REVIEWS, GALLERY_IMAGES } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CMC Renovations | Owner-Operated Remodeling in Hamilton, OH",
  description: "Meet Brady and Taylor — the owners behind CMC Renovations. Learn why homeowners in Hamilton, OH trust us with their biggest renovation projects.",
};

export default function AboutPage() {
  const showcase = GALLERY_IMAGES.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a1a] pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "var(--teal)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-4">Our Story</p>
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Team Behind<br />
            <span className="italic" style={{ color: "var(--teal-light)" }}>CMC Renovations</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            We're Brady and Taylor — the owners, the project managers, and the people you'll actually see on your job site every day.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-4">Who We Are</p>
            <h2
              className="text-4xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Owner-Operated.<br />That Means Something.
            </h2>
            <div className="prose text-gray-600 leading-relaxed space-y-4">
              <p>
                CMC Renovations was built on a simple premise: homeowners deserve a contractor who shows up, communicates clearly, and takes personal responsibility for the outcome. That's what owner-operated means to us.
              </p>
              <p>
                When you hire CMC Renovations, you're hiring Brady and Taylor directly — not a company that will assign a project manager you've never met. We're on your job site every day, we answer your calls, and we stand behind every inch of work we deliver.
              </p>
              <p>
                We serve Hamilton and the greater Butler County area with a focus on detailed craftsmanship across kitchens, bathrooms, basements, home additions, and more. Every estimate is free. Every project gets our full attention.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {showcase.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-square">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#ede9df]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-4">What We Stand For</p>
            <h2
              className="text-4xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Transparency",
                body: "Clear estimates, honest timelines, and upfront communication when anything changes. No surprises, no runaround.",
              },
              {
                title: "Craftsmanship",
                body: "We pay attention to every joint, seam, and finish surface. The details are what separate a renovation that looks good from one that lasts.",
              },
              {
                title: "Accountability",
                body: "As owners, we're personally responsible for every project. You can reach us directly — before, during, and after the work is done.",
              },
            ].map((v) => (
              <div key={v.title} className="p-8 bg-white rounded-2xl border border-[#d4cfc4]">
                <div
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--teal)" }}
                >
                  {v.title}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-4">From Our Clients</p>
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What Homeowners Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REVIEWS.map((review, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
                <p className="font-bold text-white text-sm">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#f8f6f1] text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Work Together?
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            We'd love to hear about your project. Reach out for a free, no-pressure estimate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold text-xl hover:shadow-2xl hover:shadow-teal-200 hover:-translate-y-1 transition-all"
            style={{ background: "var(--teal)" }}
          >
            Get Your Free Estimate <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
