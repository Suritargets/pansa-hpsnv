"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/2023/11";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 40;
          const increment = target / steps;
          let cur = 0;
          const timer = setInterval(() => {
            cur += increment;
            if (cur >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(cur));
          }, 50);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-start">

        {/* ── LEFT — Company info ── */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1c9848" }}>
            About Company
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold uppercase leading-tight mb-3"
            style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
          >
            CCC H. PANSA &amp; SONS N.V.
          </h2>
          <div className="w-10 h-1 mb-5" style={{ backgroundColor: "#1c9848" }} />
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            The Commercial Contracting Company H. Pansa &amp; Sons N.V. has developed and
            implemented an integrated quality &amp; environmental management system and is
            therefore an ISO 9001 and ISO 14001 certified company. We are specialized in
          </p>

          {/* Badge icon + counter */}
          <div className="flex items-end gap-3 mb-6">
            <div className="flex-shrink-0">
              {/* Medal/badge icon */}
              <svg className="w-12 h-12" style={{ color: "#1c9848" }} fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
              </svg>
            </div>
            <div>
              <div
                className="text-5xl font-extrabold leading-none"
                style={{ color: "#1c9848", fontFamily: "var(--font-teko)" }}
              >
                <Counter target={15} /> +
              </div>
              <div className="text-sm font-semibold text-gray-700 mt-1">Years Experiences</div>
            </div>
          </div>

          <Link
            href="/about-us"
            className="inline-block px-7 py-3 font-bold uppercase text-sm text-white transition-colors"
            style={{ backgroundColor: "#32592d" }}
          >
            Read More
          </Link>
        </div>

        {/* ── MIDDLE — Two info cards ── */}
        <div className="flex flex-col gap-5">
          {/* Facilities card — light gray */}
          <div className="p-7" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="mb-4" style={{ color: "#1c9848" }}>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </div>
            <h3
              className="text-xl font-bold uppercase mb-3"
              style={{ color: "#1c9848", fontFamily: "var(--font-teko)" }}
            >
              Facilities
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              To accommodate our vision, mission and core values, the Pansa Group of Company has two
              separate...
            </p>
            <Link
              href="/about-us"
              className="text-xs font-bold uppercase tracking-wide flex items-center gap-1"
              style={{ color: "#1c9848" }}
            >
              Learn More
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Company History card — yellow */}
          <div className="p-7" style={{ backgroundColor: "#f8cc39" }}>
            <div className="mb-4" style={{ color: "#1c9848" }}>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3
              className="text-xl font-bold uppercase mb-3"
              style={{ color: "#1c9848", fontFamily: "var(--font-teko)" }}
            >
              Company History
            </h3>
            <p className="text-gray-800 text-sm leading-relaxed mb-4">
              Pansa Group of Companies N.V. (Pansa Group) evolved from a one man company founded
              in 1975 ...
            </p>
            <Link
              href="/about-us"
              className="text-xs font-bold uppercase tracking-wide flex items-center gap-1"
              style={{ color: "#1c9848" }}
            >
              Learn More
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── RIGHT — Reception photo with play button ── */}
        <div className="relative overflow-hidden">
          <Image
            src={`${BASE}/a-landscape.jpeg`}
            alt="Pansa Group of Companies N.V. reception"
            width={700}
            height={490}
            className="w-full h-auto object-cover"
          />
          {/* Green play button — top right */}
          <a
            href="https://www.youtube.com/watch?v=EvxDGRAc1Bk"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-0 right-0 w-14 h-14 flex items-center justify-center"
            style={{ backgroundColor: "#1c9848" }}
          >
            <svg className="w-5 h-5 fill-white ml-1" viewBox="0 0 24 24">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
