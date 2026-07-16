"use client";

import { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE = "https://wordpress-1525751-5907573.cloudwaysapps.com/wp-content/uploads/2023/11";

export default function QuotationRequestPage() {
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
      <main
        className="min-h-screen relative"
        style={{
          backgroundImage: `url(${BASE}/gabions-training.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Light overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(245,245,245,0.92)" }} />

        <div className="relative z-10 py-20 px-4">
          {/* Breadcrumb */}
          <div className="text-center mb-2">
            <nav className="text-sm" style={{ color: "#555" }}>
              <Link href="/" className="hover:underline" style={{ color: "#1c9848" }}>Home</Link>
              <span className="mx-2">/</span>
              <span>Quotation Request</span>
            </nav>
          </div>

          {/* Form container */}
          <div className="max-w-2xl mx-auto">
            {/* Heading */}
            <div
              className="text-center py-4 mb-10"
              style={{ backgroundColor: "rgba(200,200,200,0.4)", border: "1px solid rgba(0,0,0,0.1)" }}
            >
              <h1
                className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide"
                style={{ color: "#1a1a1a", fontFamily: "var(--font-teko)" }}
              >
                QUOTATION REQUEST
              </h1>
            </div>

            {submitted ? (
              <div
                className="text-center py-12 px-8"
                style={{ backgroundColor: "white", border: "1px solid #e5e7eb" }}
              >
                <svg className="w-12 h-12 mx-auto mb-4" style={{ color: "#1c9848" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h2>
                <p className="text-gray-600 text-sm">Thank you for your quotation request. We will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Subject */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "#1c9848" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full px-4 py-3 text-sm bg-white outline-none"
                      style={{ border: "1px solid #d1d5db", color: "#333" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "#1c9848" }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="w-full px-4 py-3 text-sm bg-white outline-none"
                      style={{ border: "1px solid #d1d5db", color: "#333" }}
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "#1c9848" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 text-sm bg-white outline-none"
                      style={{ border: "1px solid #d1d5db", color: "#333" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "#1c9848" }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 text-sm bg-white outline-none"
                      style={{ border: "1px solid #d1d5db", color: "#333" }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: "#1c9848" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Comment"
                    rows={6}
                    required
                    className="w-full px-4 py-3 text-sm bg-white outline-none resize-none"
                    style={{ border: "1px solid #d1d5db", color: "#333" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 font-bold uppercase text-sm text-white tracking-widest transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#32592d" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
