"use client";

import { useState } from "react";
import Image from "next/image";

const BASE = "https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/2023/11";

const images = [
  { src: `${BASE}/IMG-20190528-WA0007-768x508-1.jpg`, alt: "Training session 1" },
  { src: `${BASE}/IMG-20190528-WA0014-768x508-1.jpg`, alt: "Training session 2" },
  { src: `${BASE}/IMG-20190621-WA0006-768x432-1.jpg`, alt: "Field work 2019" },
  { src: `${BASE}/P1010643-768x576-1.jpg`, alt: "Industrial site 1" },
  { src: `${BASE}/P1010647-768x576-1.jpg`, alt: "Industrial site 2" },
  { src: `${BASE}/P1010994-768x576-1.jpg`, alt: "Industrial site 3" },
  { src: `${BASE}/P1020592-768x576-1.jpg`, alt: "Industrial site 4" },
  { src: `${BASE}/P1040205-768x576-1.jpg`, alt: "Industrial site 5" },
  { src: `${BASE}/P1040758-768x576-1.jpg`, alt: "Industrial site 6" },
  { src: `${BASE}/spray-1024x684-1.jpg`, alt: "Spray work" },
  { src: `${BASE}/sumatraweg-1024x683-1.jpg`, alt: "Sumatraweg project" },
  { src: `${BASE}/tank-1024x683-1.jpg`, alt: "Tank project" },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 bg-brand-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img) => (
            <button
              key={img.src}
              className="relative aspect-video overflow-hidden rounded-md group"
              onClick={() => setLightbox(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full">
            <Image
              src={lightbox}
              alt="Gallery image"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
