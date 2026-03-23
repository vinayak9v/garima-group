"use client";

const STEPS = [
  {
    num: "01",
    title: "Apply Online",
    desc: "Complete our comprehensive online application form and submit necessary details to start your journey.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Campus Visit",
    desc: "Schedule a personalized tour to experience our world-class facilities and vibrant campus life first-hand.",
    icon: (
      <svg
        className="w-10 h-10"
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
    num: "03",
    title: "Entrance Assessment",
    desc: "Participate in an interactive assessment designed to understand your child's strengths and potential.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function AdmissionProcess() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white flex flex-col items-center overflow-hidden">
      <h2 className="font-heading font-black text-3xl md:text-5xl text-[#8b1010] mb-16 text-center">
        Admission Process
      </h2>

      <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {STEPS.map((step, idx) => (
          <div key={idx} className="relative group flex flex-col items-center">
            {/* Connection Arrow (Except last) */}
            {idx < STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-[45px] left-[75%] translate-x-1/2 w-[40%] z-0">
                <svg
                  className="w-full h-4 text-gray-200"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 L95 5 L90 0 M95 5 L90 10"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            )}

            {/* Number Badge */}
            <div className="absolute -top-4 -left-4 z-20 bg-[#d4af37] text-white w-10 h-10 rounded-xl flex items-center justify-center font-heading font-black shadow-lg">
              {step.num}
            </div>

            {/* Card Content */}
            <div className="w-full bg-white/40 backdrop-blur-xl border border-gray-100 rounded-[40px] p-10 flex flex-col items-center text-center shadow-[0_15px_45px_rgba(0,0,0,0.03)] group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 z-10">
              <div className="w-24 h-24 rounded-full bg-[#8b1010] text-white flex items-center justify-center mb-8 shadow-xl">
                {step.icon}
              </div>
              <h3 className="font-heading font-extrabold text-[#1c1b1b] text-2xl mb-4 group-hover:text-[#a71515] transition-colors">
                {step.title}
              </h3>
              <p className="font-body text-gray-500 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
