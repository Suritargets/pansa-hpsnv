import Link from "next/link";

const BASE = "https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/2023/11";

const bullets = [
  "We Have Professional Workers",
  "On Time In Progress",
  "Friendly To Serve Customers",
  "Give The Best & Fair",
];

const expertise = [
  { label: "Equipments Used", value: 92 },
  { label: "Factories Production", value: 82 },
  { label: "Management & Services", value: 97 },
  { label: "Modern Technology", value: 73 },
  { label: "Certified Team", value: 87 },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: `url(${BASE}/oil-and-gas-processing-plant-.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* ── Header — centered above panels ── */}
      <div
        className="relative text-center px-6 py-14"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      >
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: "#f8cc39" }}
        >
          Why Choose Us
        </p>
        <h2
          className="text-3xl md:text-5xl font-extrabold uppercase leading-tight mb-4"
          style={{ color: "#1c9848", fontFamily: "var(--font-teko)" }}
        >
          EXPERIENCE WORK WITH GLOBAL INDUSTRIES
        </h2>
        <div className="w-10 h-0.5 mx-auto mb-5" style={{ backgroundColor: "#1c9848" }} />
        <p className="text-white/80 max-w-3xl mx-auto text-sm leading-relaxed">
          Choose The Commercial Contracting Company H. Pansa &amp; Sons N.V. for a commitment to
          excellence, a team of skilled professionals, and industry expertise — ensuring that your
          endeavors are met with premium solutions, providing clients with exceptional industrial services.
        </p>
      </div>

      {/* ── Two panels ── */}
      <div className="flex flex-col lg:flex-row">

        {/* Left — yellow */}
        <div className="flex-1 py-12 px-10 lg:px-14" style={{ backgroundColor: "rgba(248,204,57,0.97)" }}>
          <h3
            className="text-2xl font-extrabold uppercase mb-4"
            style={{ color: "#1a1a1a", fontFamily: "var(--font-teko)" }}
          >
            ARE ALWAYS READY TO SERVE
          </h3>
          <p className="text-gray-800 text-sm leading-relaxed mb-6">
            The Commercial Contracting Company H. Pansa &amp; Sons N.V. aspires to be the best
            provider of human resource development and industrial services in Suriname and the
            region. Get in touch with our dedicated team.
          </p>

          <ul className="space-y-3 mb-7">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-gray-900 text-sm font-medium">
                <svg
                  className="w-3 h-3 flex-shrink-0"
                  style={{ color: "#1c9848" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
                {b}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="inline-block px-7 py-3 font-bold uppercase text-sm text-white mb-8"
            style={{ backgroundColor: "#32592d" }}
          >
            Contact Us
          </Link>

          <div className="space-y-3 text-sm text-gray-800 border-t pt-6" style={{ borderColor: "rgba(0,0,0,0.15)" }}>
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#1c9848" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Address: Martin Luther Kingweg km 23 Para - Suriname (South - America)</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#1c9848" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Mon - Fri: 8:00 am - 4:00 pm</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#1c9848" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>
                Phone: (+597) 323451<br />
                Mobile: (+597) 7698051 / (+597) 7698047
              </span>
            </div>
          </div>
        </div>

        {/* Right — green */}
        <div className="flex-1 py-12 px-10 lg:px-14 text-white" style={{ backgroundColor: "rgba(28,152,72,0.97)" }}>
          <h3
            className="text-2xl font-extrabold uppercase mb-4"
            style={{ fontFamily: "var(--font-teko)" }}
          >
            THIS IS OUR EXPERTISE
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-8">
            With a wealth of industry expertise, The Commercial Contracting Company H. Pansa &amp;
            Sons N.V. stands as a trusted authority, providing clients with unparalleled insight,
            innovation, and strategic solutions to address the most complex challenges in diverse
            industrial sectors.
          </p>

          <div className="space-y-5">
            {expertise.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-white">{item.label}</span>
                  <span className="text-xs font-bold text-white">{item.value}%</span>
                </div>
                <div
                  className="h-2 rounded-sm overflow-hidden"
                  style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
                >
                  <div
                    className="h-full rounded-sm"
                    style={{ width: `${item.value}%`, backgroundColor: "#f8cc39" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
