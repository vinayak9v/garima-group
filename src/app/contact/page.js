"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function ContactPage() {
  const [subject, setSubject] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
    // Action here
  };

  return (
    <>
      <Navbar theme="light" />

      <main className="min-h-screen bg-[#f1f3f6] pt-36 pb-20 w-full overflow-hidden flex justify-center">
        <div className="w-full max-w-[1000px] px-4 md:px-0 mx-auto flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-10">
          {/* Left Column: Form & Socials */}
          <div className="w-full lg:w-[460px] flex flex-col gap-6 shrink-0 relative z-10">
            {/* Form Container */}
            <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-7 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-white/80 relative overflow-hidden">
              <h2 className="font-heading font-bold text-2xl md:text-[28px] text-[#1c1b1b] mb-6">
                Send Us a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 relative z-10"
              >
                {/* Full Name - Active state from reference */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="fullName"
                    className="font-heading font-bold text-[13px] text-[#1c1b1b] ml-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-[10px] border border-[#a71515] outline-none shadow-[0_0_0_3px_rgba(167,21,21,0.15)] bg-white font-body text-sm text-[#1c1b1b] placeholder-gray-400 transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-heading font-bold text-[13px] text-[#1c1b1b] ml-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-[10px] border border-gray-200 focus:border-[#a71515] focus:outline-none focus:shadow-[0_0_0_3px_rgba(167,21,21,0.15)] bg-white font-body text-sm text-[#1c1b1b] placeholder-gray-400 transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="font-heading font-bold text-[13px] text-[#1c1b1b] ml-1"
                  >
                    Phone Number
                  </label>
                  <div className="flex w-full rounded-[10px] border border-gray-200 overflow-hidden focus-within:border-[#a71515] focus-within:shadow-[0_0_0_3px_rgba(167,21,21,0.15)] bg-white transition-all transition-colors h-[46px]">
                    <select className="bg-transparent border-none px-3 font-body text-sm font-medium text-[#1c1b1b] focus:outline-none outline-none appearance-none cursor-pointer border-r border-gray-200 pr-4 h-full">
                      <option value="+91">+91</option>
                    </select>
                    {/* Custom dropdown arrow for select */}
                    <div className="absolute left-[3.25rem] mt-[15px] pointer-events-none">
                      <svg
                        className="w-3.5 h-3.5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="flex-1 px-4 h-full border-none focus:outline-none bg-transparent font-body text-sm text-[#1c1b1b] placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div className="flex flex-col gap-1.5 relative">
                  <label
                    htmlFor="subject"
                    className="font-heading font-bold text-[13px] text-[#1c1b1b] ml-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-[10px] border border-gray-200 focus:border-[#a71515] focus:outline-none focus:shadow-[0_0_0_3px_rgba(167,21,21,0.15)] bg-white font-body text-sm transition-all cursor-pointer appearance-none text-[#1c1b1b] h-[46px]"
                  >
                    <option value="" disabled className="text-gray-400">
                      Select a subject
                    </option>
                    <option
                      value="Admissions Inquiry"
                      className="text-[#1c1b1b]"
                    >
                      Admissions Inquiry
                    </option>
                    <option
                      value="Franchise Opportunity"
                      className="text-[#1c1b1b]"
                    >
                      Franchise Opportunity
                    </option>
                    <option value="General Question" className="text-[#1c1b1b]">
                      General Question
                    </option>
                  </select>
                  {/* Select Chevron */}
                  <div className="absolute right-4 top-[2.1rem] pointer-events-none">
                    <svg
                      className={`w-4 h-4 ${subject ? "text-gray-500" : "text-[#a71515]"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* Your Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-heading font-bold text-[13px] text-[#1c1b1b] ml-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-[10px] border border-gray-200 focus:border-[#a71515] focus:outline-none focus:shadow-[0_0_0_3px_rgba(167,21,21,0.15)] bg-white font-body text-sm text-[#1c1b1b] placeholder-gray-400 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-3 py-[14px] rounded-full bg-gradient-to-r from-[#7a0e0e] via-[#a71515] to-[#c9a227] text-white font-heading font-bold text-sm md:text-base shadow-[0_4px_14px_rgba(167,21,21,0.4)] hover:shadow-[0_6px_20px_rgba(167,21,21,0.6)] transition-all flex justify-center items-center gap-2 group border border-white/20"
                >
                  Send Message
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </form>

              {/* Decorative background blurs inside form container */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-white opacity-80 rounded-full blur-[40px] pointer-events-none -z-10"></div>
            </div>

            {/* Office Hours & Socials Panel */}
            <div className="bg-[#e4e6ea] rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 w-full shadow-[inset_0_1px_4px_rgba(255,255,255,0.5),0_4px_20px_rgba(0,0,0,0.02)]">
              {/* Office Hours Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#a71515] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-[#1c1b1b] text-[15px] leading-tight mb-0.5">
                    Office Hours
                  </span>
                  <span className="font-body font-medium text-gray-700 text-xs">
                    Mon-Sat: 9AM - 5PM
                  </span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="w-[34px] h-[34px] rounded-full bg-[#a71515] hover:bg-[#8b1010] text-white flex items-center justify-center transition-colors shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-1.11 9-5.7 9-11.25z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-[34px] h-[34px] rounded-full bg-[#a71515] hover:bg-[#8b1010] text-white flex items-center justify-center transition-colors shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-[34px] h-[34px] rounded-full bg-[#a71515] hover:bg-[#8b1010] text-white flex items-center justify-center transition-colors shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-[34px] h-[34px] rounded-full bg-[#a71515] hover:bg-[#8b1010] text-white flex items-center justify-center transition-colors shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-[34px] h-[34px] rounded-full bg-[#a71515] hover:bg-[#8b1010] text-white flex items-center justify-center transition-colors shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Info Cards & Map */}
          <div className="w-full lg:w-[480px] flex flex-col gap-[14px]">
            {/* Campus Address Card */}
            <div className="bg-white rounded-2xl p-[18px] flex items-center gap-[18px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border-none transition-shadow">
              <div className="w-[46px] h-[46px] rounded-[14px] bg-[#911818] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-bold text-[15px] text-[#1c1b1b] mb-[2px]">
                  Campus Address
                </h3>
                <p className="font-body text-[13px] font-medium text-gray-600 leading-snug">
                  Garima Group of Institutions,
                  <br />
                  Khandwa, Madhya Pradesh, India
                </p>
              </div>
            </div>

            {/* Admissions Helpline Card */}
            <div className="bg-white rounded-2xl p-[18px] flex items-center gap-[18px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border-none transition-shadow">
              <div className="w-[46px] h-[46px] rounded-[14px] bg-[#911818] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-bold text-[15px] text-[#1c1b1b] mb-[2px]">
                  Admissions Helpline
                </h3>
                <p className="font-body text-[13px] font-medium text-gray-600">
                  +91 XXXXXXXXXX
                </p>
              </div>
            </div>

            {/* Franchise Enquiry Card */}
            <div className="bg-white rounded-2xl p-[18px] flex items-center gap-[18px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border-none transition-shadow">
              <div className="w-[46px] h-[46px] rounded-[14px] bg-[#911818] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm12 5h-4v4h4v-4zm-6 0H7v4h4v-4z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-bold text-[15px] text-[#1c1b1b] mb-[2px]">
                  Franchise Enquiry
                </h3>
                <p className="font-body text-[13px] font-medium text-gray-600 pr-2">
                  Contact: +91 XXXXXXXXXX | Email: franchise@garimagroup.edu
                </p>
              </div>
            </div>

            {/* Email Us Card */}
            <div className="bg-white rounded-2xl p-[18px] flex items-center gap-[18px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border-none transition-shadow">
              <div className="w-[46px] h-[46px] rounded-[14px] bg-[#911818] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-bold text-[15px] text-[#1c1b1b] mb-[2px]">
                  Email Us
                </h3>
                <p className="font-body text-[15px] font-bold text-[#1c1b1b]">
                  info@garimagroup.edu
                </p>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-[20px] p-[6px] shadow-[0_8px_25px_rgba(0,0,0,0.04)] border-none w-full min-h-[220px] relative overflow-hidden group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.213190864319!2d76.35032517528341!3d21.850402279768673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd86d6db2f0db39%3A0xc6186419d8d672ea!2sGarima%20Vidya%20Vihar%20Senior%20Secondary%20School!5e0!3m2!1sen!2sus!4v1709148000000!5m2!1sen!2sus"
                className="w-full h-full rounded-[14px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Garima Group Campus Map"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
