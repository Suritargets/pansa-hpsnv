"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          const steps = 60;
          const inc = target / steps;
          let cur = 0;
          const timer = setInterval(() => {
            cur += inc;
            if (cur >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(cur));
          }, 33);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}</span>;
}

function CircleProgress({
  pct,
  label,
  trackColor = "#e5e7eb",
  fillColor = "#f8cc39",
  textColor = "#f8cc39",
}: {
  pct: number;
  label: string;
  trackColor?: string;
  fillColor?: string;
  textColor?: string;
}) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const ref = useRef<SVGCircleElement>(null);
  const started = useRef(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let cur = 0;
          const timer = setInterval(() => {
            cur += 1;
            setProgress(cur);
            if (cur >= pct) clearInterval(timer);
          }, 20);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pct]);
  const offset = circ - (progress / 100) * circ;
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={r} fill="none" stroke={trackColor} strokeWidth="8" />
          <circle
            ref={ref}
            cx="60" cy="60" r={r}
            fill="none"
            stroke={fillColor}
            strokeWidth="8"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-2xl font-extrabold"
            style={{ color: textColor, fontFamily: "var(--font-teko)" }}
          >
            {progress}%
          </span>
        </div>
      </div>
      <span className="mt-3 text-sm font-bold uppercase tracking-wide" style={{ color: textColor }}>{label}</span>
    </div>
  );
}

const coreValues = [
  {
    title: "Customer Focus",
    description: "We ensure that the customer is satisfied, by accurately identifying our customers' needs and desires so that we can meet them. We add more value to our customers' projects by analyzing the design and research to find the best solution for their demands.",
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    ),
  },
  {
    title: "Quality",
    description: "We provide high-quality services and products that meet the national, regional and international standards & best practices, the expectations and requirements of our customers, suppliers and partners.",
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"/>
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "We do everything in excellence, from the initial contact with our customer to the delivery of our services and products.",
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    ),
  },
  {
    title: "Health, Safety & Environment",
    description: "We work safely, promote wellness and protect the environment",
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
  {
    title: "Collaboration & Teamwork",
    description: "Our team collaborates with our customer by engaging in meaningful, honest, open and healthy discussions to find the best solutions. Teamwork, positive attitudes and mutual respect are essential to our success.",
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 12l-4.463 4.969-1.595-1.57L7 11.64V7h2v5zm5.447 4.993L19 12v-5h-2v4.64l-3.948 3.759 1.395 1.594zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    ),
  },
  {
    title: "Professionalism & Leadership",
    description: "As a team we work in a professional and respectful manner, as specialist in our field of work. We help and coach each other to identify, prevent and manage the risks and solve problems.",
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 1.12C16.43 19.18 14.03 20 12 20z"/>
      </svg>
    ),
  },
];

const teamMembers = [
  { name: "Rogerio Boda", role: "Petrol Leader", img: "bearded-machine-operator-posing-for-photography-ZXF4DY3.jpg" },
  { name: "Kay Cunningham", role: "Petrol Handler", img: "professional-young-industrial-factory-woman-employ-BAG2MGU.jpg" },
  { name: "Juanita Javier", role: "Petrol Manager", img: "african-american-elderly-woman-worker-in-industria-C7W38XZ.jpg" },
  { name: "Fabricio Malo", role: "Petrol Operator", img: "joyful-male-engineer-standing-by-tractor-at-factor-B54T3VP.jpg" },
];

export default function AboutUsPage() {
  const [facilitiesOpen, setFacilitiesOpen] = useState(true);
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* 1. Page Hero */}
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
            <div
              className="inline-block px-10 py-4"
              style={{ backgroundColor: "#f8cc39" }}
            >
              <h1
                className="text-5xl md:text-7xl font-extrabold uppercase leading-none tracking-wide"
                style={{ color: "#1a1a1a", fontFamily: "var(--font-teko)" }}
              >
                ABOUT
              </h1>
            </div>
            <nav className="mt-5 text-white/70 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">About</span>
            </nav>
          </div>
        </section>

        {/* 2. About Company */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            {/* Left: company info + counter */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#1c9848" }}
              >
                About Company
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold uppercase leading-tight mb-4"
                style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
              >
                ABOUT COMMERCIAL CONTRACTING COMPANY H. PANSA &amp; SONS N.V.
              </h2>
              <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: "#1c9848" }} />
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                The Commercial Contracting Company H. Pansa &amp; Sons N.V. has developed and implemented
                an integrated quality &amp; environmental management system and is therefore an ISO 9001
                and ISO 14001 certified company. We are specialized in
              </p>

              {/* Badge icon + Counter */}
              <div className="flex flex-col items-start">
                <svg
                  className="w-12 h-12 mb-2"
                  style={{ color: "#1c9848" }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div
                  className="font-extrabold leading-none"
                  style={{ color: "#f8cc39", fontFamily: "var(--font-teko)", fontSize: "5rem" }}
                >
                  <Counter target={15} /><sup className="text-4xl ml-1">+</sup>
                </div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide mt-1">
                  Years Experiences
                </div>
              </div>
            </div>

            {/* Right: Vision + Mission */}
            <div className="space-y-5">
              {/* Vision — light gray bg */}
              <div className="p-8" style={{ backgroundColor: "#f5f5f5" }}>
                <div className="mb-4">
                  <svg
                    className="w-10 h-10 mb-3"
                    style={{ color: "#1c9848" }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.3}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3
                    className="text-2xl font-extrabold uppercase"
                    style={{ color: "#1c9848", fontFamily: "var(--font-teko)" }}
                  >
                    OUR VISION
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  CCC H. Pansa &amp; Sons N.V. strives to be the best provider of human resource
                  development and industrial services in Suriname and the region
                </p>
              </div>

              {/* Mission — yellow bg */}
              <div className="p-8" style={{ backgroundColor: "#f8cc39" }}>
                <div className="mb-4">
                  <svg
                    className="w-10 h-10 mb-3"
                    style={{ color: "#1c9848" }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.3}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <h3
                    className="text-2xl font-extrabold uppercase"
                    style={{ color: "#1c9848", fontFamily: "var(--font-teko)" }}
                  >
                    OUR MISSION
                  </h3>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">
                  CCC H. Pansa &amp; Sons N.V. is committed to provide its services based on quality,
                  safety and environmental best practices, to meet the customers&apos; requirements and
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Values */}
        <section
          className="relative py-20 px-4"
          style={{
            backgroundImage: `url(${BASE}/oil-and-gas-processing-plant-.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="mb-10">
              <h2
                className="text-4xl md:text-6xl font-extrabold uppercase"
                style={{ color: "white", fontFamily: "var(--font-teko)" }}
              >
                OUR CORE VALUES
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {coreValues.map((v) => (
                <div
                  key={v.title}
                  className="p-7"
                  style={{ backgroundColor: "#f8cc39" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span style={{ color: "#1a1a1a" }}>{v.icon}</span>
                    <h3
                      className="text-base font-extrabold uppercase leading-tight"
                      style={{ color: "#1a1a1a", fontFamily: "var(--font-teko)", fontSize: "1.1rem" }}
                    >
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Welcome Section */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            {/* Left: CEO photo + building + YouTube */}
            <div className="space-y-4">
              {/* CEO photo */}
              <div
                className="relative w-full overflow-hidden"
                style={{ borderLeft: "5px solid #1c9848", minHeight: "300px" }}
              >
                <Image
                  src="https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/elementor/thumbs/Picture1-rcv8o3uatzyx611en1f6lpnl4kj4chbl0h2efgqe4g.jpg"
                  alt="CEO Maurino Pansa"
                  width={460}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Building photo */}
              <div
                className="relative w-full overflow-hidden"
                style={{ borderLeft: "5px solid #1c9848", minHeight: "200px" }}
              >
                <Image
                  src="https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/elementor/thumbs/6-circle-rcv8nufwxnm1xxf25xcwws0z6ptg7ia9n6jjmp4buo.jpeg"
                  alt="Pansa Group office building"
                  width={460}
                  height={260}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* YouTube video embed */}
              <div
                className="relative w-full"
                style={{ borderLeft: "5px solid #1c9848", paddingTop: "56.25%" }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/EvxDGRAc1Bk"
                  title="Pansa Group Infomercial Eng. Sub"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Right: text + CEO line + accordion */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-extrabold uppercase leading-tight mb-4"
                style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
              >
                WELCOME TO COMMERCIAL CONTRACTING COMPANY H. PANSA &amp; SONS N.V.
              </h2>
              <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: "#1c9848" }} />

              <div className="space-y-4 text-gray-700 text-sm leading-relaxed mb-5">
                <p>
                  Commercial Contracting Company H. Pansa &amp; Sons N.V. (CCC HPS N.V.) is a subsidiary
                  and first established company of the Pansa Group of Companies N.V. with a track record
                  of more than 40 years in the industry.
                </p>
                <p>
                  CCC HPS N.V. is an ISO 9001, ISO 14001 &amp; Alcoa certified company, specialized in
                  industrial maintenance &amp; services, human resource services &amp; development,
                  competency based training &amp; upgrading, with more than 200 highly qualified employees.
                </p>
                <p>
                  CCC HPS N.V. is currently the best one stop window to provide human resource services
                  and support of your industrial development projects in oil &amp; gas, mining, food
                  processing, agriculture and energy sectors in Suriname &amp; the region.
                </p>
              </div>

              <p
                className="font-bold mb-6"
                style={{ color: "#1c9848", fontFamily: "var(--font-teko)", fontSize: "1.1rem" }}
              >
                ~ CEO MAURINO PANSA. ~
              </p>

              {/* Accordion */}
              <div className="space-y-2">
                {/* Facilities */}
                <div>
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left font-extrabold text-base uppercase"
                    style={{
                      backgroundColor: facilitiesOpen ? "#f8cc39" : "#f5f5f5",
                      color: "#1a1a1a",
                      fontFamily: "var(--font-teko)",
                    }}
                    onClick={() => setFacilitiesOpen(!facilitiesOpen)}
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 transition-transform ${facilitiesOpen ? "" : "rotate-180"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                      <span>FACILITIES</span>
                    </div>
                  </button>
                  {facilitiesOpen && (
                    <div className="px-5 py-5 text-sm text-gray-700 leading-relaxed space-y-4" style={{ backgroundColor: "#fafafa" }}>
                      <p>
                        To accommodate our vision, mission and core values, the Pansa Group of Company
                        has two separate modern buildings. The main office, CCCHPS N.V., houses the
                        human resource and finance departments, the meeting and training rooms.
                      </p>
                      <p>
                        Behind the main building we have the first class facility of Pansa Machine Shop
                        N.V. The PMS building consists of an ASME and NBIC certified state of the art
                        Machine Shop and workshop area of approximately 2500 m² ,with a 10 ton and a 5
                        ton overhead crane, a blasting and painting booth and state of the art machines.
                        The PMS building also has 600 m² of office space, with training and conference
                        facilities.
                      </p>
                      <p>
                        Another 6000 m² is being prepared as workshop area for expansion of our
                        manufacturing capabilities. The company also has 12 hectares available in the
                        immediate vicinity to establish work spaces, storage, industrial manufacturing
                        services.
                      </p>
                    </div>
                  )}
                </div>

                {/* Company History */}
                <div>
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left font-extrabold text-base uppercase"
                    style={{
                      backgroundColor: historyOpen ? "#f8cc39" : "#f5f5f5",
                      color: "#1a1a1a",
                      fontFamily: "var(--font-teko)",
                    }}
                    onClick={() => setHistoryOpen(!historyOpen)}
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 transition-transform ${historyOpen ? "" : "rotate-180"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                      <span>COMPANY HISTORY</span>
                    </div>
                  </button>
                  {historyOpen && (
                    <div className="px-5 py-5 text-sm text-gray-700 leading-relaxed space-y-4" style={{ backgroundColor: "#fafafa" }}>
                      <p>
                        Pansa Group of Companies N.V. (Pansa Group) evolved from a one man company
                        founded in 1975 by the late Mr. Humphrey Pansa and his wife &amp; business
                        partner Mrs. Juliana Pansa-Papotto. The primary business back then was the
                        supply of lumber products for the Suralco pot rooms (Alcoa).
                      </p>
                      <p>
                        In 1989 the company expanded its services to the Suralco Alumina Refinery
                        with industrial cleaning and manpower.
                      </p>
                      <p>
                        In 1998 after the retirement of the founder, Mr. Maurino Pansa assumed
                        management, certified and diversified the company by adding several other
                        services such as industrial and mechanical maintenance, fabrication and welding.
                      </p>
                      <p>
                        In 2008, the Pansa Group embarked on a major restructuring program with the
                        objective of becoming the key provider of industrial engineered services geared
                        towards the Surinamese and regional industries. Our long term vision was
                        predicated on the significant natural and human resources and the low risk of
                        conducting business in the region.
                      </p>
                      <p>
                        As a result of the restructuring program Pansa Group has elevated its technical
                        and financial capabilities, boosting business associations through several
                        sectors of the Surinamese economy and establishing key contacts and business
                        relationships within the commercial and government sectors.
                      </p>
                      <p>
                        Thanks to years of experience, expertise and diversification in the industrial
                        service nationally and internationally, the Pansa Group of 2019 is an
                        innovative and dynamic group of companies that continues to grow and achieve
                        their success in providing a wide range of services to the total Surinamese
                        industry and the region.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Emergency Banner */}
        <section className="py-16 px-4" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#1c9848" }}
            >
              WE&apos;RE READY ANYTIME
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold uppercase leading-tight mb-4"
              style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
            >
              WE ARE AVAILABLE FOR 24/7 EMERGENCY SERVICES
            </h2>
            <div className="w-10 h-0.5 mx-auto mb-6" style={{ backgroundColor: "#1c9848" }} />
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              &ldquo;For unparalleled industrial solutions and expert services, contact us at
              Commercial Contracting Company H. Pansa &amp; Sons N.V. to elevate your operations
              and achieve lasting success.&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
              <a
                href="mailto:info@hpsnv.com"
                className="flex items-center gap-3 px-8 py-4 font-bold uppercase text-sm text-white w-full sm:w-auto justify-center"
                style={{ backgroundColor: "#32592d" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                INFO@HPSNV.COM
              </a>
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold z-10 -mx-0.5"
                style={{ backgroundColor: "white", border: "2px solid #e5e7eb", color: "#555" }}
              >
                Or
              </div>
              <a
                href="tel:+597323451"
                className="flex items-center gap-3 px-8 py-4 font-bold uppercase text-xs text-white w-full sm:w-auto justify-center text-center leading-tight"
                style={{ backgroundColor: "#f8cc39", color: "#1a1a1a" }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>
                  PHONE: (+597) 323451<br />
                  MOBILE: (+597) 7698051 / (+597) 7698047
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* 6. Properly Every Project */}
        <section className="flex flex-col md:flex-row min-h-[600px]">
          {/* Left: yellow */}
          <div className="flex-1 py-16 px-10 lg:px-14" style={{ backgroundColor: "#f8cc39" }}>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#1a1a1a" }}
            >
              WHY CHOOSE US
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold uppercase leading-tight mb-4"
              style={{ color: "#1a1a1a", fontFamily: "var(--font-teko)" }}
            >
              PROPERLY EVERY PROJECT
            </h2>
            <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: "#1c9848" }} />
            <p className="text-gray-800 text-sm leading-relaxed mb-10">
              People should choose Commercial Contracting Company H. Pansa &amp; Sons N.V. for our
              unwavering commitment to excellence, industry-leading expertise, innovative solutions,
              and a proven track record of delivering unparalleled results in every facet of our
              comprehensive industrial services.
            </p>

            {/* Circles */}
            <div className="flex gap-10 mb-8">
              <CircleProgress pct={87} label="" trackColor="rgba(0,0,0,0.2)" fillColor="#1c9848" textColor="#1a1a1a" />
              <CircleProgress pct={98} label="" trackColor="rgba(0,0,0,0.2)" fillColor="#1c9848" textColor="#1a1a1a" />
            </div>

            {/* Labels + descriptions below circles */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3
                  className="font-extrabold uppercase mb-2"
                  style={{ color: "#1c9848", fontFamily: "var(--font-teko)", fontSize: "1.2rem" }}
                >
                  CERTIFIED TEAM
                </h3>
                <p className="text-xs text-gray-800 leading-relaxed">
                  Our certified team at Commercial Contracting Company H. Pansa &amp; Sons N.V.
                  brings a wealth of expertise and industry-recognized qualifications to ensure the
                  highest standards of precision and excellence in every project we undertake.
                </p>
              </div>
              <div>
                <h3
                  className="font-extrabold uppercase mb-2"
                  style={{ color: "#1c9848", fontFamily: "var(--font-teko)", fontSize: "1.2rem" }}
                >
                  PROJECT SUCCESS
                </h3>
                <p className="text-xs text-gray-800 leading-relaxed">
                  At Commercial Contracting Company H. Pansa &amp; Sons N.V., we measure success not
                  just by completed projects, but by the transformative impact our comprehensive
                  solutions have on operational efficiency, client satisfaction, and long-term success.
                </p>
              </div>
            </div>
          </div>

          {/* Right: industrial photo */}
          <div className="flex-1 relative min-h-72">
            <Image
              src={`${BASE}/oil-and-gas-processing-plant-.jpg`}
              alt="Industrial refinery"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </section>

        {/* 7. Meet Our Team */}
        <section className="py-16 px-4" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#1c9848" }}
              >
                Our People
              </p>
              <h2
                className="text-4xl md:text-6xl font-extrabold uppercase"
                style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
              >
                MEET OUR TEAM
              </h2>
              <div className="w-10 h-0.5 mx-auto mt-4" style={{ backgroundColor: "#1c9848" }} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-white overflow-hidden shadow-sm">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={`${BASE}/${member.img}`}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div
                    className="p-4 text-center"
                    style={{ borderTop: `3px solid #f8cc39` }}
                  >
                    <h3
                      className="font-extrabold uppercase text-xl leading-tight"
                      style={{ color: "#1a1a1a", fontFamily: "var(--font-teko)" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mt-1"
                      style={{ color: "#1c9848" }}
                    >
                      {member.role}
                    </p>
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
