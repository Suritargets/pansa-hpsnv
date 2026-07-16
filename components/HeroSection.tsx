"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BASE = "https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/2023/11";
const VIDEO_ID = "EvxDGRAc1Bk";

const slides = [
  `${BASE}/gabions-training.jpg`,
  `${BASE}/IMG-20190528-WA0010.jpg`,
  `${BASE}/P1020527-scaled.jpg`,
];

const DURATION = 3000;
const TRANSITION = 500;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFading(false);
      }, TRANSITION);
    }, DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Slideshow layers — each image behind with Ken Burns zoom */}
        {slides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === current ? (fading ? 0 : 1) : 0,
              transition: `opacity ${TRANSITION}ms ease-in-out`,
              animation: i === current ? `kenburns ${DURATION + TRANSITION}ms ease-out forwards` : "none",
            }}
          />
        ))}

        {/* Gradient overlay matching original */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(8,23,46,0.72) 0%, rgba(48,28,10,0.73) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <p className="text-brand-yellow text-base font-semibold uppercase tracking-widest mb-3">
            We Build The Best
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-brand-green uppercase leading-tight max-w-3xl mb-4">
            Human Resource and Industrial Services
          </h1>
          <p className="text-white text-lg md:text-xl font-semibold uppercase tracking-wide mb-8 max-w-2xl">
            Quality Training and Demand Driven Programs
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-2 border-2 border-white text-white px-7 py-3 font-semibold uppercase hover:bg-white hover:text-gray-900 transition-colors cursor-pointer"
            >
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5 fill-current text-gray-900 ml-0.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </span>
              Watch Video
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center bg-brand-green text-white px-7 py-3 font-semibold uppercase hover:bg-brand-dark-green transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2.5 h-2.5 rounded-full transition-all"
              style={{
                backgroundColor: i === current ? "#f8cc39" : "rgba(255,255,255,0.5)",
                transform: i === current ? "scale(1.3)" : "scale(1)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Ken Burns keyframes — injected via style tag */}
      <style>{`
        @keyframes kenburns {
          0%   { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `}</style>

      {/* Video lightbox modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl mx-4"
            style={{ aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="HPSNV Company Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
