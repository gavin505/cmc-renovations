import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";
import { ArrowRight, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Home Renovation Tips & Guides",
  description:
    "Renovation tips, project guides, and home improvement insights from the CMC Renovations team in Hamilton, OH.",
};

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/KitchenRemodel2.jpg" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/70 to-[#1a1a1a]/50" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "var(--teal)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-4">
            Our Blog
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Renovation Insights<br />
            <span className="italic" style={{ color: "var(--teal-light)" }}>
              & Expert Tips
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Practical advice, project guides, and industry knowledge from Brady and
            Taylor at CMC Renovations.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-16 px-6 bg-[#f8f6f1]">
          <div className="max-w-7xl mx-auto">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-white rounded-2xl border border-[#ede9df] hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100 transition-all overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {featured.image && (
                  <div className="h-64 md:h-auto overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Calendar size={12} />
                      {new Date(featured.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-charcoal mb-4 group-hover:text-teal-700 transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6 max-w-3xl">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post grid */}
      <section className="py-16 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-[#ede9df] hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100 transition-all hover:-translate-y-1 overflow-hidden"
              >
                {post.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-charcoal mb-3 group-hover:text-teal-700 transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
