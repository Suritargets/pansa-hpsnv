import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE = "https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/2023/11";

export default function ServicesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative"
          style={{
            backgroundImage: `url(${BASE}/oil-and-gas-processing-plant-.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.65)" }} />
          <div className="relative z-10 py-24 px-6 text-center">
            <div className="inline-block px-10 py-4" style={{ backgroundColor: "#f8cc39" }}>
              <h1
                className="text-5xl md:text-7xl font-extrabold uppercase leading-none tracking-wide"
                style={{ color: "#1a1a1a", fontFamily: "var(--font-teko)" }}
              >
                SERVICES
              </h1>
            </div>
            <nav className="mt-5 text-white/70 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Services</span>
            </nav>
          </div>
        </section>

        {/* ── Section 1: Human Resource Services ── */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Left: content */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-extrabold uppercase leading-tight mb-4"
                style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
              >
                HUMAN RESOURCE SERVICES &amp; DEVELOPMENT
              </h2>
              <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: "#1c9848" }} />

              <div className="space-y-4 text-sm text-gray-700 leading-relaxed mb-6">
                <div>
                  <p className="font-bold text-gray-800">Construction Management Services:</p>
                  <p>Managers, Supervisors, Foremen, Coordinators</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Field Labor Force Equipment Operations:</p>
                  <p>Mechanics, Drillers, Warehouse personnel, Carpenters, Steel Workers, Masons, Structural Steel &amp; Pipe Welders, Pipe Fitters, Plumbers, Electrical &amp; Instrumentation Technicians</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block px-7 py-3 text-sm font-bold uppercase text-white"
                style={{ backgroundColor: "#32592d" }}
              >
                Read More
              </Link>
            </div>

            {/* Right: 3 stacked images */}
            <div className="space-y-3">
              <div className="relative w-full h-48 overflow-hidden">
                <Image src={`${BASE}/42.jpeg`} alt="HR Services" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="relative w-full h-48 overflow-hidden">
                <Image src={`${BASE}/DSC02822-1024x575-1.jpg`} alt="Field workers" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="relative w-full h-48 overflow-hidden">
                <Image src={`${BASE}/DSC02820-1024x575-1.jpg`} alt="Equipment operations" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* HR Services detailed text */}
        <section className="bg-white pb-16 px-4">
          <div className="max-w-6xl mx-auto text-sm text-gray-700 leading-relaxed space-y-4">
            <p>
              We have been serving our clients with Technical and non-technical temporary employees
              since 1989 varying from basic Jobs to Skilled Labor&apos;s, Office Clerks, Craftsman
              3rd Class, Craftsman 2nd Class, Craftsman 1st Class, Master 1st Class, Welder 1st
              Class, Code Welder, Pipe Fitters, Plumbers, Carpenters, Electricians, Mechanics 1st
              Class, Light- and Heavy Equipment Operators etc.
            </p>
            <p>
              At this moment we are one of the main supplier of the training industry. Currently we
              are the main supplier more than 300 men to the IAMGOLD Plant, NEWMONT Plant,
              STAATSOLIE and SURALCO AFOBAKKA HYDRO Plant.
            </p>
            <p>
              We have supplied labor for 2 major expansions and operations for the Suriname plant back
              in the days for several department at STAATSOLIE and NEWMONT SURINAME.
            </p>
            <p>
              We have supplied manpower for the last 2 major construction projects STAATSOLIE and
              NEWMONT SURINAME.
            </p>
            <p>We have supplied labor for 2 major expansions and operations for the Suriname plants:</p>
            <ul className="space-y-1 pl-4">
              {[
                "CCC Group Labor Supply 1995 (2011-2005 men)",
                "In 2007-2010 Bauxite Residue Upgrading",
                "In 2001- 2004 Alumina Refinery Expansion",
                "Staatsolie Refinery Turn Around Inspection in 2000",
                "From 1997 - 2008 Colonial overhaul",
                "From 1997 - 2008 Power Boiler Overhaul",
                "In 1995 Afobakka Hydro Power Plant upgrading",
                "In 1995 Alumina Refinery Expansion",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-3 h-3 mt-1 flex-shrink-0" style={{ color: "#1c9848" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Green divider strip */}
        <div className="h-3" style={{ backgroundColor: "#1c9848" }} />

        {/* ── Section 2: Competency Based Training ── */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Left: image */}
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src={`${BASE}/IMG-20190528-WA0012-1.jpg`}
                alt="Training session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: content */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-extrabold uppercase leading-tight mb-4"
                style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
              >
                COMPETENCY BASED TRAINING &amp; UPGRADING
              </h2>
              <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: "#1c9848" }} />

              <ul className="space-y-2.5 text-sm text-gray-700 mb-6">
                {[
                  "Quality technical vocational training and demand-driven programs & Qualification (ASME, AWS, API, NIL, SBB, CANTA-CVQ, VCA)",
                  "Occupational Health Safety, Environment & Quality Training programs for staff at all working locations company-wide",
                  "ISO Training programs",
                  "Welding, Machining, Mechanical and Electrical Maintenance & Repair training programs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-3 h-3 mt-1 flex-shrink-0" style={{ color: "#1c9848" }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/training"
                className="inline-block px-7 py-3 text-sm font-bold uppercase text-white"
                style={{ backgroundColor: "#32592d" }}
              >
                Read More
              </Link>
            </div>
          </div>
        </section>

        {/* Training photo strip */}
        <div className="grid grid-cols-3 gap-0" style={{ backgroundColor: "#1c9848" }}>
          {[
            `${BASE}/DSC03458-1024x575-1.jpg`,
            `${BASE}/DSC09215-1024x575-1.jpg`,
            `${BASE}/22.jpeg`,
          ].map((src, i) => (
            <div key={i} className="relative h-52 overflow-hidden">
              <Image src={src} alt={`Training ${i + 1}`} fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>

        {/* Green divider strip */}
        <div className="h-3" style={{ backgroundColor: "#1c9848" }} />

        {/* ── Section 3: Industrial & Civil Maintenance ── */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Left: content */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-extrabold uppercase leading-tight mb-4"
                style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
              >
                INDUSTRIAL &amp; CIVIL MAINTENANCE SERVICES
              </h2>
              <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: "#1c9848" }} />

              <ul className="space-y-2.5 text-sm text-gray-700 mb-6">
                {[
                  "Industrial Blasting & Painting (on site and off site)",
                  "Innovative Recycling System",
                  "Concrete & Civil works, Insulation and Refractory",
                  "Scaffolding Erection",
                  "Industrial Hydro cleaning of Pipes, Tanks and Installation",
                  "High Pressure Water Blasting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-3 h-3 mt-1 flex-shrink-0" style={{ color: "#1c9848" }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-block px-7 py-3 text-sm font-bold uppercase text-white"
                style={{ backgroundColor: "#32592d" }}
              >
                Read More
              </Link>
            </div>

            {/* Right: image */}
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src={`${BASE}/DSC09159-scaled.jpg`}
                alt="Industrial maintenance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Industrial detailed text */}
        <section className="bg-white pb-12 px-4">
          <div className="max-w-6xl mx-auto text-sm text-gray-700 leading-relaxed space-y-5">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">On- and Off Site Grit blasting and Industrial Painting</h3>
              <p>
                CCCHPS N.V. has a specialized on and off site unit for grit blasting and industrial
                painting. Projects have been done successfully at:
              </p>
              <ul className="mt-2 space-y-1 pl-4">
                {[
                  "IAMGOLD, for grit blasting a few trommel screens of the ball mill",
                  "Grit blasting and painting of storage tanks",
                  "STAATSOLIE N.V. for grit blasting and painting of the HFWKO I, HFWKO II & HFWKO III tanks at the Josie Operations",
                  "SURALCO LLC for grit blasting and painting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-2.5 h-2.5 mt-1.5 flex-shrink-0" style={{ color: "#1c9848" }} fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p>
              The Blow off tanks, Press building per Clarification Department, Building Structures,
              platforms and side railings, LPG storage tanks — with strict safety measurements, Pumps.
            </p>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Insulation:</h3>
              <p>Some projects done in this field are:</p>
              <ul className="mt-2 space-y-1 pl-4">
                {[
                  "Insulation of Boilers at the SURALCO powerhouse units 1-9 and blow down tanks, flash tanks, steam lines and valves",
                  "In the Digestion department of the SURALCO insulation of steam lines and heater lines",
                  "In the Clarification department of the SURALCO insulation of steam lines and heater lines",
                  "At STAATSOLIE N.V. Insulation has been done after grit blasting and painting the HFWKO I, HFWKO II & HFWKO III tanks at the Josie Operations field site",
                  "The boiler and the fractionation units were insulated when the fire damage in January 2008 at the Staatsolie Refinery Taut Lui Faut",
                  "Among projects done is complete insulation of the Suriname Breweries Power Plant",
                  "Most recently we have insulated the exhaust gas ducts, silencer and pipings of the new power plants no. 5 and 6 at the Staatsolie Power Company Suriname",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-2.5 h-2.5 mt-1.5 flex-shrink-0" style={{ color: "#1c9848" }} fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Industrial Maintenance and cleaning (Housekeeping):</h3>
              <p>
                Most industrial maintenance CCCHPS N.V. has done consists of the service of heaters,
                pipes and pressure vessels of which the majority is cleaning bauxite crystallization.
              </p>
              <p className="mt-2">
                Over a course of 10+ years continuous for the continuous maintenance of 89 heavy duty
                heaters on the SURALCO-line Digestion Department.
              </p>
              <p className="mt-2">
                In the past 25 years washer tanks, thickener tanks, blow off tanks, 8 tanks, 26A
                tanks, lime kilns, lime kilns, pressure vessels and pipe lines have been acquired by
                CCCHPS N.V.
              </p>
            </div>
          </div>
        </section>

        {/* Industrial photo strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            `${BASE}/Picture8.jpg`,
            `${BASE}/P1050316-1024x768-1.jpg`,
            `${BASE}/P1040879-1024x768-1.jpg`,
            `${BASE}/24-768x1024-1.jpeg`,
          ].map((src, i) => (
            <div key={i} className="relative h-52 overflow-hidden">
              <Image src={src} alt={`Industrial ${i + 1}`} fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>

        {/* Green divider strip */}
        <div className="h-3" style={{ backgroundColor: "#1c9848" }} />

        {/* ── Ongoing Project ── */}
        <section className="py-16 px-4" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2
                className="text-4xl md:text-5xl font-extrabold uppercase"
                style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
              >
                ONGOING PROJECT
              </h2>
              <div className="w-10 h-0.5 mx-auto mt-4" style={{ backgroundColor: "#1c9848" }} />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  img: `${BASE}/DSC09159-scaled.jpg`,
                  title: "Industrial Maintenance",
                  desc: "Continuous maintenance and service of heaters, pipes and pressure vessels at major industrial facilities in Suriname.",
                },
                {
                  img: `${BASE}/IMG-20190528-WA0012-1.jpg`,
                  title: "Training Programs",
                  desc: "Ongoing competency based training and vocational education programs for industrial workforce development.",
                },
                {
                  img: `${BASE}/DSC03458-1024x575-1.jpg`,
                  title: "Labor Supply",
                  desc: "Supplying skilled and semi-skilled manpower to major operations including IAMGOLD, NEWMONT and STAATSOLIE.",
                },
              ].map((project) => (
                <div key={project.title} className="bg-white overflow-hidden shadow-sm">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5" style={{ borderTop: `3px solid #f8cc39` }}>
                    <h3
                      className="font-extrabold uppercase text-xl mb-2"
                      style={{ color: "#1a1a1a", fontFamily: "var(--font-teko)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
