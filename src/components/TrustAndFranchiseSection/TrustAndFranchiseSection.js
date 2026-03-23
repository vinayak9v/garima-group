"use client";

import Link from "next/link";

const TRUST_REASONS = [
  {
    title: "Value Based Education",
    desc: "Global curriculum standard values-based education.",
    icon: (
      <svg
        className="w-10 h-10 text-[#8b1010]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        <path
          d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z"
          className="text-white fill-current opacity-20"
        />
      </svg>
    ), // Representative Icon (Heart/Hands)
  },
  {
    title: "Future Ready Students",
    desc: "Curriculum build ready students at our core academies.",
    icon: (
      <svg
        className="w-10 h-10 text-[#8b1010]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z" />
      </svg>
    ), // Graduation Cap Icon
  },
  {
    title: "Holistic Development",
    desc: "Academic excellence alongside sports and activities.",
    icon: (
      <svg
        className="w-10 h-10 text-[#8b1010]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="7"
          r="4"
          fill="currentColor"
          className="text-[#8b1010]"
        />
        <path d="M5.5 21v-2a4 4 0 014-4h5a4 4 0 014 4v2" />
        <circle
          cx="19"
          cy="5"
          r="2"
          fill="currentColor"
          className="text-[#8b1010] opacity-70"
        />
        <circle
          cx="5"
          cy="5"
          r="2"
          fill="currentColor"
          className="text-[#8b1010] opacity-70"
        />
        <circle
          cx="12"
          cy="2"
          r="1.5"
          fill="currentColor"
          className="text-[#8b1010] opacity-70"
        />
      </svg>
    ), // Holistic/Juggling Icon Concept
  },
  {
    title: "38 Years Trust",
    desc: "Trust from over 1800+ educators, students and families.",
    icon: (
      <svg
        className="w-10 h-10 text-[#8b1010]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
        <text
          x="12"
          y="15"
          fontSize="6px"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          38
        </text>
      </svg>
    ), // Shield/Years Icon
  },
];

const FRANCHISE_FEATURES = [
  {
    title: "Proven Model",
    desc: "Partner with a school with a highly successful franchise model.",
    icon: (
      <svg
        className="w-8 h-8 text-[#facc15]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        <circle cx="18.7" cy="8" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Support",
    desc: "Comprehensive initial setup and running operational support.",
    icon: (
      <svg
        className="w-8 h-8 text-[#facc15]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Shared Vision",
    desc: "Proud of our model to expand mutually, we share the value of education.",
    icon: (
      <svg
        className="w-8 h-8 text-[#facc15]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function TrustAndFranchiseSection() {
  return (
    <section className="w-full relative flex flex-col lg:flex-row overflow-hidden">
      {/* Left Column: Why Parents Trust Garima */}
      <div className="w-full lg:w-1/2 bg-white py-16 md:py-24 px-6 md:px-12 flex flex-col items-center justify-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#8b1010] mb-12 text-center drop-shadow-sm">
          Why Parents Trust Garima
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-[600px] w-full">
          {TRUST_REASONS.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="font-heading font-bold text-[15px] sm:text-base text-[#1c1b1b] mb-2 leading-tight">
                {reason.title}
              </h3>
              <p className="font-body text-[11px] sm:text-xs text-gray-500 leading-relaxed max-w-[200px]">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Start Your Own School */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#0b246a] via-[#0d2a80] to-[#040e33] py-16 md:py-24 px-6 md:px-12 flex flex-col items-center justify-center relative">
        {/* Subtle Globe/World background shape (Simulated with radial gradient) */}
        <div className="absolute center right-0 bottom-0 w-[500px] h-[500px] bg-white opacity-[0.02] rounded-full blur-[80px] pointer-events-none translate-x-1/3 translate-y-1/3" />
        <div className="absolute center left-0 top-0 w-[300px] h-[300px] bg-blue-400 opacity-[0.03] rounded-full blur-[60px] pointer-events-none -translate-x-1/4 -translate-y-1/4" />

        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[600px]">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">
            Start Your Own School
          </h2>
          <p className="font-body text-sm sm:text-base text-blue-100/80 mb-12 font-medium">
            Join the Educational Revolution with Garima Group
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-start gap-8 sm:gap-6 mb-12">
            {FRANCHISE_FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center max-w-[180px]"
              >
                <div className="mb-4 text-[#facc15] drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-bold text-sm text-white mb-2 line-clamp-1">
                  {feature.title}
                </h3>
                <p className="font-body text-[10px] sm:text-[11px] text-blue-200/70 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <Link href="/franchise">
            <button className="px-8 py-3.5 bg-gradient-to-r from-[#8b1010] via-[#c22020] to-[#8b1010] hover:from-[#7a0d0d] hover:to-[#7a0d0d] text-white font-heading font-bold text-sm md:text-base tracking-wide rounded-full shadow-[0_0_20px_rgba(194,32,32,0.4)] transition-all duration-300 transform hover:scale-105 border border-red-500/30">
              Enquire for Franchise
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
