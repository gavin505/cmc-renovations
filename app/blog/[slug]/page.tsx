import { BLOG_POSTS, COMPANY } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Phone } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const currentIndex = sorted.findIndex((p) => p.slug === post.slug);
  const prev = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;
  const next = currentIndex > 0 ? sorted[currentIndex - 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a1a] pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-teal-400 text-sm font-medium hover:text-teal-300 transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-white/10 text-teal-300 text-xs font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-gray-400 text-xs">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-[#f8f6f1]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#ede9df] p-8 md:p-12">
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </div>

          {/* CTA */}
          <div
            className="mt-10 p-8 rounded-2xl text-center text-white"
            style={{ background: "var(--teal)" }}
          >
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to Start Your Project?
            </h3>
            <p className="text-teal-100 mb-6">
              Free estimates, honest timelines, and owner-led quality on every job.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-white text-teal-700 font-bold rounded-full hover:bg-teal-50 transition-colors"
              >
                Get a Free Estimate
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-colors"
              >
                <Phone size={16} /> {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex flex-col p-5 rounded-2xl bg-white border border-[#ede9df] hover:border-teal-200 transition-all"
              >
                <span className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                  <ArrowLeft size={12} /> Previous
                </span>
                <span className="font-bold text-charcoal text-sm group-hover:text-teal-700 transition-colors">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex flex-col items-end p-5 rounded-2xl bg-white border border-[#ede9df] hover:border-teal-200 transition-all text-right"
              >
                <span className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                  Next <ArrowRight size={12} />
                </span>
                <span className="font-bold text-charcoal text-sm group-hover:text-teal-700 transition-colors">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
