"use client";

import { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE = "https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/2023/11";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative"
          style={{
            backgroundImage: `url(${BASE}/DSC09159-scaled.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />
          <div className="relative z-10 flex items-center justify-center py-24 px-6">
            <div
              className="text-center px-14 py-8"
              style={{ backgroundColor: "#f8cc39" }}
            >
              <nav className="text-xs font-semibold mb-3" style={{ color: "#333" }}>
                <Link href="/" className="hover:underline">Home</Link>
                <span className="mx-2">›</span>
                <span>Contact</span>
              </nav>
              <h1
                className="text-5xl md:text-6xl font-extrabold uppercase leading-none tracking-wide"
                style={{ color: "#1a1a1a", fontFamily: "var(--font-teko)" }}
              >
                CONTACT
              </h1>
            </div>
          </div>
        </section>

        {/* Get In Touch */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Label */}
            <p
              className="text-center text-xs font-bold uppercase tracking-widest mb-10"
              style={{ color: "#555" }}
            >
              GET IN TOUCH
            </p>

            {/* 2-column text */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left */}
              <div>
                <h2
                  className="text-2xl md:text-3xl font-extrabold uppercase leading-tight mb-4"
                  style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
                >
                  DON&apos;T HESITATE TO CONTACT US
                </h2>
                <div className="w-8 h-0.5 mb-6" style={{ backgroundColor: "#1c9848" }} />
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed text-center">
                  <p>
                    The Commercial Contracting Company H. Pansa &amp; Sons NV started in 1975 as a contracting company that provided industrial maintenance and temporary labor.
                  </p>
                  <p>
                    The CCC H. Pansa &amp; Sons NV is a flexible, efficient and promising company that continues to grow and achieve their successes. We provide a wide range of services to the total Surinamese &amp; regional industries.
                  </p>
                  <p>
                    Our Company is well recognized within Suriname &amp; the region by several institutions including the Government and several State Agencies.
                  </p>
                </div>
              </div>

              {/* Right */}
              <div>
                <h2
                  className="text-2xl md:text-3xl font-extrabold uppercase leading-tight mb-4"
                  style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
                >
                  NEED HELP?
                </h2>
                <div className="w-8 h-0.5 mb-6" style={{ backgroundColor: "#1c9848" }} />
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed text-center">
                  <p>
                    We work with International Qualifications and Certifications and are the leaders in our field of services in Suriname &amp; the region. Our headquarter is located in the district of Para, in The Republic of Suriname, in South-America.
                  </p>
                  <p>
                    CCC H.Pansa &amp; Sons NV is an efficient, solid, transparent and certified company on the road to a successful sustainable development future.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 info cards */}
            <div className="grid md:grid-cols-3 gap-0 mt-12">
              {/* Office */}
              <div
                className="p-8 flex flex-col gap-3"
                style={{ border: "1px solid #e5e7eb" }}
              >
                {/* Icon */}
                <svg className="w-8 h-8 mb-1" style={{ color: "#1c9848" }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#1c9848" }}
                >
                  OUR OFFICE
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Address: Martin Luther Kingweg km 23 Para - Suriname (South-America)
                </p>
              </div>

              {/* Phone */}
              <div
                className="p-8 flex flex-col gap-3"
                style={{ backgroundColor: "#f8cc39" }}
              >
                <svg className="w-8 h-8 mb-1" style={{ color: "#1a1a1a" }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#1a1a1a" }}
                >
                  OUR PHONE
                </p>
                <p className="text-sm text-gray-800 leading-relaxed">
                  Office hours from: 8:00 - 16:00<br />
                  (+597) 323451<br />
                  (+597) 7698051/(+597) 7698047
                </p>
              </div>

              {/* Email */}
              <div
                className="p-8 flex flex-col gap-3"
                style={{ backgroundColor: "#32592d" }}
              >
                <svg className="w-8 h-8 mb-1 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#f8cc39" }}
                >
                  OUR EMAIL
                </p>
                <a
                  href="mailto:info@hpsnv.com"
                  className="text-sm text-white hover:underline"
                >
                  info@hpsnv.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Map + Form */}
        <section className="bg-white pb-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-0">
            {/* Left: Map */}
            <div className="min-h-96 overflow-hidden" style={{ border: "1px solid #e5e7eb" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62777.07538155178!2d-55.45!3d5.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d034d5a9a4b3b3b%3A0x1234567890abcdef!2sPara%2C%20Suriname!5e0!3m2!1sen!2snl!4v1700000000000!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "384px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office location"
              />
            </div>

            {/* Right: Contact form */}
            <div className="p-8" style={{ border: "1px solid #e5e7eb", borderLeft: "none" }}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#555" }}
              >
                LET&apos;S TALK
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold uppercase mb-6"
                style={{ color: "#f8cc39", fontFamily: "var(--font-teko)" }}
              >
                LEAVE A MESSAGE
              </h2>

              {submitted ? (
                <div className="text-center py-8">
                  <svg className="w-10 h-10 mx-auto mb-3" style={{ color: "#1c9848" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700 font-semibold">Message sent! We will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name + Subject */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#1c9848" }}>Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="w-full px-3 py-2.5 text-sm bg-white outline-none"
                        style={{ border: "1px solid #d1d5db", color: "#333" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#1c9848" }}>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                        className="w-full px-3 py-2.5 text-sm bg-white outline-none"
                        style={{ border: "1px solid #d1d5db", color: "#333" }}
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#1c9848" }}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full px-3 py-2.5 text-sm bg-white outline-none"
                        style={{ border: "1px solid #d1d5db", color: "#333" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#1c9848" }}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Your Phone"
                        className="w-full px-3 py-2.5 text-sm bg-white outline-none"
                        style={{ border: "1px solid #d1d5db", color: "#333" }}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#1c9848" }}>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your Comment"
                      rows={5}
                      required
                      className="w-full px-3 py-2.5 text-sm bg-white outline-none resize-none"
                      style={{ border: "1px solid #d1d5db", color: "#333" }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3 font-bold uppercase text-sm text-white tracking-widest transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#32592d" }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
