import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Human Resource Services & Development",
    description:
      "Unlock the full potential of your human capital with our Human Resource Services & Development ...",
    bg: "#f5f5f5",
    headingColor: "#f8cc39",
    textColor: "#555",
    linkColor: "#1c9848",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Competency Based Training & Upgrading",
    description:
      "Invest in the growth and proficiency of your workforce through our Competency Based Training & ...",
    bg: "#32592d",
    headingColor: "#f8cc39",
    textColor: "rgba(255,255,255,0.85)",
    linkColor: "rgba(255,255,255,0.7)",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Industrial & Civil Maintenance Services",
    description:
      "Ensure the longevity and efficiency of your infrastructure with our top-notch Industrial & Civil...",
    bg: "#f8cc39",
    headingColor: "#1c9848",
    textColor: "#333",
    linkColor: "#1c9848",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1c9848" }}>
            Our Services
          </p>
          <h2
            className="text-3xl md:text-5xl font-extrabold uppercase mb-3"
            style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
          >
            WE PROVIDE BEST SERVICES
          </h2>
          <div className="w-10 h-0.5 mx-auto mb-4" style={{ backgroundColor: "#1c9848" }} />
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Benefit from the wealth of experience and knowledge that defines CCC H. PANSA &amp; SONS N.V.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-0 shadow-sm">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-8 flex flex-col"
              style={{ backgroundColor: s.bg }}
            >
              <div className="mb-5" style={{ color: s.headingColor }}>
                {s.icon}
              </div>
              <h3
                className="text-xl font-extrabold uppercase mb-3 leading-snug"
                style={{ color: s.headingColor, fontFamily: "var(--font-teko)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: s.textColor }}>
                {s.description}
              </p>
              <Link
                href="/services"
                className="text-xs font-bold uppercase tracking-wide flex items-center gap-1 hover:underline"
                style={{ color: s.linkColor }}
              >
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
