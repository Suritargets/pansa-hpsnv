import Image from "next/image";

const BASE = "https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/2023/11";

const partners = [
  { src: `${BASE}/2.jpg`, alt: "Partner", w: 120, h: 80 },
  { src: `${BASE}/pmshop-300x249.jpg`, alt: "Pansa Machine Shop", w: 120, h: 100 },
  { src: `${BASE}/Logos-tek_Pansa-Industries-300x266.jpg`, alt: "Pansa Industries", w: 120, h: 106 },
  { src: `${BASE}/erkend-leerbedrijf-logo-300x164.png`, alt: "Erkend Leerbedrijf", w: 150, h: 82 },
  { src: `${BASE}/1.png`, alt: "Partner", w: 120, h: 80 },
];

export default function PartnersSection() {
  return (
    <section className="py-14 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {partners.map((p) => (
            <div
              key={p.src}
              className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
