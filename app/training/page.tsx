import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE = "https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/2023/11";

const trainingCourses = [
  "Welding Technology",
  "Machining",
  "Industrial Maintenance",
  "Fluid Power and Controls (hydraulics/pneumatics)",
  "Industrial Supervisory",
  "Electrical & Instrumentation",
  "Process Operation",
  "Electrical Power and Controls",
  "Process and Equipment",
  "Dozer, Escavator Operator Training",
];

const trainingPhotos = [
  { src: `${BASE}/IMG-20190528-WA0006-1024x678-1.jpg`, alt: "Training session 1" },
  { src: `${BASE}/IMG-20190528-WA0007-768x508-2.jpg`, alt: "Training session 2" },
  { src: `${BASE}/IMG-20190528-WA0009-1024x678-1.jpg`, alt: "Training session 3" },
  { src: `${BASE}/IMG-20190528-WA0011-1024x678-1.jpg`, alt: "Training session 4" },
  { src: `${BASE}/IMG-20190528-WA0013-1024x678-1.jpg`, alt: "Training session 5" },
  { src: `${BASE}/IMG-20190528-WA0014-768x508-2.jpg`, alt: "Training session 6" },
];

export default function TrainingPage() {
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
                TRAINING
              </h1>
            </div>
            <nav className="mt-5 text-white/70 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Training</span>
            </nav>
          </div>
        </section>

        {/* Training Offered */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Left: course list */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-extrabold uppercase leading-tight mb-4"
                style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
              >
                TRAINING OFFERED REGULARLY &amp; ON DEMAND
              </h2>
              <div className="w-10 h-0.5 mb-7" style={{ backgroundColor: "#1c9848" }} />
              <ul className="space-y-2.5">
                {trainingCourses.map((course) => (
                  <li key={course} className="flex items-start gap-3 text-sm text-gray-700">
                    <svg
                      className="w-3 h-3 mt-1 flex-shrink-0"
                      style={{ color: "#1c9848" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                    {course}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: YouTube video + Registration button */}
            <div className="space-y-5">
              <div className="relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/EvxDGRAc1Bk"
                  title="HPSNV Training — Pansa Holding Pansa Group"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <Link
                href="/application-registration"
                className="inline-block px-8 py-3 font-bold uppercase text-sm text-white"
                style={{ backgroundColor: "#32592d" }}
              >
                Training Registration
              </Link>
            </div>
          </div>
        </section>

        {/* 6-photo grid */}
        <div className="grid grid-cols-3 gap-0">
          {trainingPhotos.map((photo) => (
            <div key={photo.src} className="relative h-52 overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}
        </div>

        {/* Standards & Certifications */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-extrabold uppercase"
                style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
              >
                STANDARDS &amp; CERTIFICATIONS
              </h2>
              <div className="w-10 h-0.5 mx-auto mt-4" style={{ backgroundColor: "#1c9848" }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* ISO 9001 Certificate */}
              <div
                className="border p-2 flex flex-col items-center"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="relative w-full" style={{ paddingTop: "140%" }}>
                  <Image
                    src={`${BASE}/3.png`}
                    alt="ISO 9001 Certificate"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* ISO 14001 Certificate */}
              <div
                className="border p-2 flex flex-col items-center"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="relative w-full" style={{ paddingTop: "140%" }}>
                  <Image
                    src={`${BASE}/4.png`}
                    alt="ISO 14001 Certificate"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* SBB Erkend Leerbedrijf */}
              <div
                className="border p-2 flex flex-col items-center"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="relative w-full" style={{ paddingTop: "140%" }}>
                  <Image
                    src={`${BASE}/sbb-certificaat-erkend-leerbedrijf2-scaled.jpg`}
                    alt="SBB Erkend Leerbedrijf — We Train Professionals"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
