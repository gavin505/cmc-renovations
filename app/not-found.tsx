import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-6 text-center">
      <div>
        <div
          className="text-[12rem] font-bold leading-none text-white/5 select-none mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          404
        </div>
        <h1
          className="text-4xl font-bold text-white mb-4 -mt-16"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Page Not Found
        </h1>
        <p className="text-white/60 mb-8">We couldn't find what you were looking for.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold hover:shadow-xl transition-all"
          style={{ background: "var(--teal)" }}
        >
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
