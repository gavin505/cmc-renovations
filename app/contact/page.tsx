"use client";
import { useState } from "react";
import { COMPANY, SERVICES } from "@/lib/data";
import { Phone, MapPin, Clock, CheckCircle2, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", location: "", message: "",
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new URLSearchParams({
        "form-name": "contact",
        ...form,
      });
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/blank.svg" alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1a1a1a]/70" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "var(--teal)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-4">Get in Touch</p>
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let's Talk<br />
            <span className="italic" style={{ color: "var(--teal-light)" }}>About Your Project</span>
          </h1>
          <p className="text-xl text-white/70 max-w-lg">
            Free estimates. No pressure. Brady will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <CheckCircle2 size={56} className="text-teal-500 mb-6" />
                <h2
                  className="text-3xl font-bold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Got it — thanks!
                </h2>
                <p className="text-gray-500 max-w-sm">
                  Brady will reach out within 24 hours to schedule your free estimate. We look forward to working with you.
                </p>
              </div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: "none" }}>
                  <label>Don&apos;t fill this out: <input name="bot-field" /></label>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "jane@email.com" },
                    { name: "phone", label: "Phone Number", type: "tel", placeholder: "(513) 555-0000" },
                    { name: "location", label: "Your City/Town", type: "text", placeholder: "Hamilton, OH" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={(form as any)[field.name]}
                        onChange={handle}
                        placeholder={field.placeholder}
                        required={field.name === "name" || field.name === "email"}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#d4cfc4] bg-white text-charcoal placeholder-gray-300 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all text-sm"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handle}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#d4cfc4] bg-white text-charcoal focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all text-sm appearance-none"
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.title}</option>
                    ))}
                    <option value="other">Other / Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={5}
                    placeholder="Describe your project, timeline, budget range, any specific requirements…"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#d4cfc4] bg-white text-charcoal placeholder-gray-300 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg hover:shadow-xl hover:shadow-teal-200 hover:-translate-y-0.5 transition-all disabled:opacity-60"
                  style={{ background: "var(--teal)" }}
                >
                  <Send size={18} />
                  {submitting ? "Sending…" : "Send My Estimate Request"}
                </button>

                <p className="text-xs text-gray-400">
                  We typically respond within 24 hours on business days. Your information is never shared.
                </p>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="space-y-8">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 text-white">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Contact Info
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-teal-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Call or Text</p>
                    <a href={`tel:${COMPANY.phone}`} className="text-white font-semibold hover:text-teal-400 transition-colors">
                      {COMPANY.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-teal-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Service Area</p>
                    <p className="text-white font-medium">Hamilton & Butler County, OH</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-teal-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-white font-medium">{COMPANY.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-[#ede9df] p-7">
              <h3
                className="text-xl font-bold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  "Brady follows up within 24 hours",
                  "On-site walk-through scheduled at your convenience",
                  "Detailed estimate at no cost or obligation",
                  "Clear timeline and scope before any work begins",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-teal-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/blank.svg"
                alt="CMC Renovations bathroom project"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
