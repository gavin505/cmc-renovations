"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SERVICES, COMPANY } from "@/lib/data";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f8f6f1]/95 backdrop-blur-md shadow-sm border-b border-[#ede9df]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col leading-none">
            <span
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--teal)" }}
            >
              CMC
            </span>
            <span
              className="text-xs tracking-[0.2em] uppercase font-medium text-[#1a1a1a]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Renovations
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-charcoal hover:text-teal-600 transition-colors"
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-teal-600 transition-colors">
              Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 transition-all duration-200 origin-top ${
                servicesOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="bg-white border border-[#ede9df] rounded-2xl shadow-xl overflow-hidden">
              <div className="p-3 grid grid-cols-2 gap-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-charcoal hover:bg-teal-50 hover:text-teal-700 transition-colors group"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="font-medium leading-tight">{s.shortTitle}</span>
                  </Link>
                ))}
              </div>
              </div>
            </div>
          </div>

          <Link
            href="/gallery"
            className="text-sm font-medium text-charcoal hover:text-teal-600 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-charcoal hover:text-teal-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-charcoal hover:text-teal-600 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-charcoal hover:text-teal-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${COMPANY.phone}`}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5"
            style={{ background: "var(--teal)" }}
          >
            <Phone size={14} />
            {COMPANY.phone}
          </a>

          <button
            className="lg:hidden p-2 rounded-xl text-charcoal hover:bg-[#ede9df] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen bg-[#f8f6f1] border-t border-[#ede9df]" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-6 space-y-1">
          {[
            { href: "/", label: "Home" },
            { href: "/gallery", label: "Gallery" },
            { href: "/about", label: "About" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 rounded-xl text-charcoal font-medium hover:bg-[#ede9df] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-2">
            <p className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-400">Services</p>
            <div className="grid grid-cols-2 gap-1">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-charcoal hover:bg-[#ede9df] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <a
              href={`tel:${COMPANY.phone}`}
              className="block text-center px-6 py-3.5 rounded-2xl text-white font-semibold"
              style={{ background: "var(--teal)" }}
              onClick={() => setMenuOpen(false)}
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
