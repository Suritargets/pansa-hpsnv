import Image from "next/image";
import Link from "next/link";

const BASE = "https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/2023/11";

const agenda = ["2019: SMAW WELDING TRAINING"];

export default function TrainingSection() {
  return (
    <section
      className="relative py-20 px-4"
      style={{
        backgroundImage: `url(${BASE}/IMG-20190528-WA0014-768x508-1.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.72)" }} />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-extrabold uppercase mb-4"
            style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
          >
            TRAINING
          </h2>
          <p className="text-white/90 leading-relaxed mb-8 text-sm">
            We provide technical vocational training and demand-driven programs &amp;
            qualification according to{" "}
            <strong>ASME, AWS, API, NIL, SBB, CANTA-CVQ, VCA</strong> – standards.
            We are specialized in
          </p>

          <h3
            className="text-lg font-bold text-white mb-4 uppercase border-b-2 pb-2"
            style={{ borderColor: "#f8cc39", fontFamily: "var(--font-teko)" }}
          >
            TRAINING AGENDA
          </h3>
          <ul className="space-y-3 mb-8">
            {agenda.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/90 text-sm">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#f8cc39" }} />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/training"
            className="inline-block px-8 py-3 font-semibold uppercase text-white transition-colors"
            style={{ backgroundColor: "#1c9848" }}
          >
            REGISTER FOR TRAINING
          </Link>
        </div>

        {/* Right — image + logo */}
        <div className="flex flex-col gap-4">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`${BASE}/WhatsApp-Image-2019-05-28-at-08.09.35-landscape-1024x716.jpeg`}
              alt="SMAW Welding Training 2019"
              width={600}
              height={420}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={`${BASE}/hpsnv.png`}
              alt="HPSNV"
              width={160}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
