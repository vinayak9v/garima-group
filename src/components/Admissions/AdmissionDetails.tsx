"use client";

import React, { useState } from "react";

const DOCUMENTS = [
  "Birth Certificate",
  "Transfer Certificate (if applicable)",
  "Previous Marksheets/Report Cards",
  "Passport-sized Photographs of Student and Parents",
  "Address Proof (Aadhar Card / Passport)",
];

const CALENDAR_DAYS = [
  29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1,
];

export default function AdmissionDetails() {
  const [selectedDate, setSelectedDate] = useState(13);

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-[#fdfdfd] flex flex-col items-center">
      <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Documents Required */}
        <div className="bg-white/40 backdrop-blur-xl border border-gray-100 p-8 md:p-12 rounded-[40px] shadow-sm hover:shadow-xl transition-all h-full">
          <h3 className="font-heading font-black text-[#8b1010] text-2xl mb-8">
            Documents Required for Admission
          </h3>
          <ul className="space-y-6">
            {DOCUMENTS.map((doc, idx) => (
              <li key={idx} className="flex items-start gap-4 group">
                <div className="mt-1 w-5 h-5 rounded-full bg-[#8b1010]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8b1010] transition-colors">
                  <svg
                    className="w-3 h-3 text-[#8b1010] group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-body text-gray-700 font-medium text-base md:text-lg border-b border-gray-100 w-full pb-3 group-hover:border-[#8b1010]/30 transition-colors">
                  {doc}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gray-400 text-xs italic font-medium">
            Please ensure all documents are original and self-attested
            photocopies are provided.
          </p>
        </div>

        {/* Book Your Campus Visit */}
        <div className="bg-white/40 backdrop-blur-xl border border-gray-100 p-8 md:p-12 rounded-[40px] shadow-sm hover:shadow-xl transition-all h-full">
          <h3 className="font-heading font-black text-[#8b1010] text-2xl mb-1 text-center">
            Book Your Campus Visit
          </h3>
          <p className="font-body text-gray-400 text-center text-sm mb-10">
            Schedule a visit to experience our environment.
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Mini Calendar Concept */}
            <div className="flex-1 bg-white rounded-3xl p-6 shadow-inner border border-gray-50">
              <div className="flex justify-between items-center mb-6">
                <button className="text-gray-400 hover:text-[#8b1010]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <span className="font-heading font-black text-sm text-[#1c1b1b]">
                  October 2024
                </span>
                <button className="text-gray-400 hover:text-[#8b1010]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-gray-400 mb-2">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {CALENDAR_DAYS.map((day, idx) => {
                  const isSelected =
                    day === selectedDate && idx > 5 && idx < 32;
                  const isOctoberDay = idx > 2 && idx < 34;
                  return (
                    <div
                      key={idx}
                      onClick={() => isOctoberDay && setSelectedDate(day)}
                      className={`h-8 flex items-center justify-center rounded-lg text-xs font-bold cursor-pointer transition-all ${
                        !isOctoberDay
                          ? "text-gray-200"
                          : isSelected
                            ? "bg-[#8b1010] text-white shadow-lg scale-110"
                            : "text-gray-600 hover:bg-[#8b1010]/10"
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Booking Form */}
            <div className="flex-1 flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#f8f9fa] border-none rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-[#8b1010] outline-none transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#f8f9fa] border-none rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-[#8b1010] outline-none transition-all"
              />
              <div className="relative">
                <input
                  disabled
                  type="text"
                  value={`${selectedDate} Oct 2024`}
                  className="w-full bg-[#f8f9fa] border-none rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-[#8b1010] outline-none transition-all opacity-80"
                />
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <select className="w-full bg-[#f8f9fa] border-none rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-[#8b1010] outline-none transition-all appearance-none cursor-pointer">
                <option>Time Slot</option>
                <option>10:00 AM - 12:00 PM</option>
                <option>02:00 PM - 04:00 PM</option>
              </select>

              <button className="mt-2 w-full bg-gradient-to-r from-[#8b1010] to-[#b71c1c] text-white py-4 rounded-xl font-heading font-black text-sm shadow-xl hover:shadow-[#8b1010]/30 transition-all active:scale-[0.98] group">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Primary CTA Buttons Footer */}
      <div className="mt-20 flex flex-col sm:flex-row gap-6">
        <button className="bg-gradient-to-r from-[#8b1010] to-[#d4af37] text-white px-12 py-5 rounded-full font-heading font-black text-xl shadow-2xl hover:scale-105 transition-all">
          Apply Now
        </button>
        <button className="bg-[#d4af37] text-white px-12 py-5 rounded-full font-heading font-black text-xl shadow-2xl hover:scale-105 transition-all">
          Explore Campus
        </button>
      </div>
    </section>
  );
}
