"use client";

const JOURNEY_MILESTONES = [
  {
    year: "1988",
    title: "SGVM Founded",
    description: "Foundation of Garima Vidya Mandir",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    year: "2007",
    title: "GVV CBSE",
    description: "Affiliation with CBSE Board",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    year: "2009",
    title: "Little Garimayans",
    description: "Launch of Preschool Division",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    year: "2024",
    title: "Guinness Record",
    description: "Achieved Guinness World Record",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    year: "2025",
    title: "G-VYAS Robot",
    description: "Introduction of Advanced Robotics Program",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function JourneyTimeline() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-[#fdfdfd] flex flex-col items-center overflow-hidden">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#8b1010] mb-20 text-center drop-shadow-sm">
        Timeline
      </h2>

      <div className="w-full max-w-[1200px] overflow-x-auto no-scrollbar pb-10">
        <div className="relative min-w-[1000px] flex items-center justify-between px-10">
          {/* Connecting Line with Gradient Arrows concept */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-[#8b1010]/20 via-[#d4af37] to-[#8b1010]/20 -translate-y-[45px] z-0" />

          {JOURNEY_MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center z-10 w-44"
            >
              {/* Pulsing circle for icon */}
              <div className="w-20 h-20 rounded-full bg-white border-[3px] border-[#8b1010] flex items-center justify-center text-[#8b1010] shadow-lg mb-8 transform transition-transform group hover:scale-110">
                {item.icon}
                {/* Decorative connecting arrow to next */}
                {idx < JOURNEY_MILESTONES.length - 1 && (
                  <div className="absolute left-[110%] top-1/2 -translate-y-1/2 text-[#d4af37] opacity-60">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="text-center">
                <span className="font-heading font-extrabold text-[#8b1010] text-xl block mb-1">
                  {item.year}
                </span>
                <h4 className="font-heading font-bold text-[#1c1b1b] text-sm lg:text-base leading-tight">
                  {item.title}
                </h4>
                <p className="font-body text-gray-500 text-[11px] lg:text-xs mt-2 leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
