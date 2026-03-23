import React from "react";

export default function ImpactNumbers() {
  return (
    <section className="relative w-full py-20 bg-[#f4f7f9] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Diagonal Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Line 1 */}
        <div className="absolute top-[10%] left-[-20%] w-[140%] h-[1px] bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent -rotate-30 transform origin-left" />
        {/* Line 2 */}
        <div className="absolute top-[30%] left-[-20%] w-[140%] h-[1px] bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent -rotate-30 transform origin-left" />
        {/* Line 3 */}
        <div className="absolute top-[70%] left-[-20%] w-[140%] h-[1px] bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent -rotate-30 transform origin-left" />
        {/* Line 4 */}
        <div className="absolute top-[50%] right-[-20%] w-[140%] h-[1px] bg-gradient-to-l from-transparent via-[#c9a227]/30 to-transparent -rotate-30 transform origin-right" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        {/* Section Title */}
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#8b1010] mb-12 sm:mb-16">
          Impact Numbers
        </h2>

        {/* Cards Container */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Card 1: Years Legacy */}
          <div className="relative group w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] flex-shrink-0">
            {/* Glowing corners / aura */}
            <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_8px_30px_rgba(201,162,39,0.15)] group-hover:shadow-[0_8px_40px_rgba(201,162,39,0.3)] transition-shadow duration-500"></div>
            {/* Star Glows */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_3px_#c9a227] z-20"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_4px_#c9a227] z-20 opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-white/50 backdrop-blur-sm rounded-3xl border border-white p-4">
              <h3 className="font-heading font-bold text-4xl sm:text-5xl text-[#c9a227] mb-2 group-hover:scale-105 transition-transform duration-300">
                38+
              </h3>
              <p className="font-body text-sm sm:text-base font-semibold text-[#1c1b1b] text-center">
                Years Legacy
              </p>
            </div>
          </div>

          {/* Card 2: Students */}
          <div className="relative group w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] flex-shrink-0">
            <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_8px_30px_rgba(201,162,39,0.15)] group-hover:shadow-[0_8px_40px_rgba(201,162,39,0.3)] transition-shadow duration-500"></div>
            {/* Star Glows */}
            <div className="absolute -top-1 right-8 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_3px_#c9a227] z-20 opacity-80"></div>
            <div className="absolute bottom-2 -left-1 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_3px_#c9a227] z-20 opacity-60"></div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-white/50 backdrop-blur-sm rounded-3xl border border-white p-4">
              <h3 className="font-heading font-bold text-4xl sm:text-5xl text-[#c9a227] mb-2 group-hover:scale-105 transition-transform duration-300">
                5000+
              </h3>
              <p className="font-body text-sm sm:text-base font-semibold text-[#1c1b1b] text-center">
                Students
              </p>
            </div>
          </div>

          {/* Card 3: Alumni Network */}
          <div className="relative group w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] flex-shrink-0">
            <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_8px_30px_rgba(201,162,39,0.15)] group-hover:shadow-[0_8px_40px_rgba(201,162,39,0.3)] transition-shadow duration-500"></div>
            {/* Star Glows */}
            <div className="absolute top-2 -right-1 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_3px_#c9a227] z-20"></div>
            <div className="absolute -bottom-1 left-4 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_4px_#c9a227] z-20 opacity-80"></div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-white/50 backdrop-blur-sm rounded-3xl border border-white p-4">
              <h3 className="font-heading font-bold text-4xl sm:text-5xl text-[#c9a227] mb-2 group-hover:scale-105 transition-transform duration-300">
                25,000+
              </h3>
              <p className="font-body text-sm sm:text-base font-semibold text-[#1c1b1b] text-center">
                Alumni Network
              </p>
            </div>
          </div>

          {/* Card 4: MP's First Humanoid Robot */}
          <div className="relative group w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] flex-shrink-0">
            <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_8px_30px_rgba(201,162,39,0.15)] group-hover:shadow-[0_8px_40px_rgba(201,162,39,0.3)] transition-shadow duration-500"></div>
            {/* Star Glows */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full shadow-[0_0_12px_4px_#c9a227] z-20"></div>
            <div className="absolute bottom-4 -left-1 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_3px_#c9a227] z-20 opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-white/50 backdrop-blur-sm rounded-3xl border border-white p-4">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#c9a227] mb-2 group-hover:scale-105 transition-transform duration-300">
                MP&apos;s First
              </h3>

              {/* Humanoid Robot Image (Using a placeholder or SVG icon) */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 relative flex items-center justify-center">
                {/* A fallback SVG if the real image isn't available yet */}
                <svg
                  className="w-full h-full text-[#1c1b1b]/80 drop-shadow-md"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" y1="16" x2="8" y2="16.01" />
                  <line x1="16" y1="16" x2="16" y2="16.01" />
                </svg>
              </div>

              <p className="font-body text-xs sm:text-sm font-semibold text-[#1c1b1b] text-center">
                Humanoid Robot
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
