"use client";

import Link from "next/link";

const services = [
  "Human Resource Services & Development",
  "Competency Based Training & Upgrading",
  "Industrial & Civil Maintenance Services",
];

export default function HelpSection() {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Left — green */}
      <div className="flex-1 py-14 px-10" style={{ backgroundColor: "#1c9848" }}>
        <h3
          className="text-2xl font-bold mb-3 uppercase"
          style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
        >
          How Can I Help You?
        </h3>
        <p className="text-white/90 mb-5 leading-relaxed text-sm">
          The Commercial Contracting Company H. Pansa &amp; Sons provides human
          resource contracting, management &amp; industrial services, technical
          vocational education &amp; training and other related works as
          identified herein.
        </p>
        <Link
          href="/services"
          className="inline-block px-6 py-2.5 font-semibold uppercase text-sm transition-colors mb-6"
          style={{ backgroundColor: "#f8cc39", color: "#1a1a1a" }}
        >
          Explore Service
        </Link>
        <ul className="space-y-3">
          {services.map((s) => (
            <li key={s} className="flex items-start gap-3 text-white">
              <span
                className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#f8cc39" }}
              >
                <svg
                  className="w-3 h-3"
                  style={{ color: "#1a1a1a" }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="font-medium text-sm">{s}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right — yellow */}
      <div className="flex-1 py-14 px-10" style={{ backgroundColor: "#f8cc39" }}>
        <h2
          className="text-2xl font-bold mb-2 uppercase"
          style={{ color: "#1c9848", fontFamily: "var(--font-teko)" }}
        >
          Request For A Quote
        </h2>
        <p className="text-gray-700 mb-6 text-sm">
          For More Information. Get in Touch With Us
        </p>
        <form
          className="flex gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 text-sm"
            style={{ outlineColor: "#1c9848" }}
          />
          <button
            type="submit"
            className="px-6 py-3 font-semibold uppercase text-sm text-white transition-colors whitespace-nowrap"
            style={{ backgroundColor: "#1c9848" }}
          >
            Request
          </button>
        </form>
      </div>
    </section>
  );
}
