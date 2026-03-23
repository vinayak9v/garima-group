"use client";

import Link from "next/link";

const INSTITUTIONS = [
  {
    name: "GARIMA VIDYA VIHAR",
    board: "CBSE School",
    id: "garima-vidya-vihar",
    icon: (
      <div className="flex items-center justify-center py-6">
        <svg
          className="w-16 h-16 text-[#444] stroke-current fill-none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            d="M9 7h6M9 10h6"
          />
        </svg>
      </div>
    ),
    features: ["Robotics Labs", "AI Learning", "Olympiad Programs"],
    btnText: "Explore GVV",
  },
  {
    name: "SHREE GARIMA VIDYA MANDIR",
    board: "MP Board School",
    id: "shree-garima-vidya-mandir",
    icon: (
      <div className="flex items-center justify-center py-6">
        <svg
          className="w-16 h-16 text-[#8b1010] fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 21l-3.2-6.4L2 12.8 12 12l10 .8-6.8 1.8L12 21z" />
          <path
            d="M12 3l3.2 6.4L22 11.2 12 12 2 11.2 8.8 9.4 12 3z"
            opacity="0.6"
          />
        </svg>
      </div>
    ),
    features: [
      "38 Years Legacy",
      "Academic Discipline",
      "Value-Based Education",
    ],
    btnText: "Explore SGVM",
  },
  {
    name: "THE LITTLE GARIMAYANS",
    board: "Preschool Franchise",
    id: "preschool",
    icon: (
      <div className="flex items-center justify-center py-6">
        <svg
          className="w-16 h-16 text-[#8b1010] fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="6px"
            fontWeight="bold"
          >
            SPARK
          </text>
        </svg>
      </div>
    ),
    features: [
      "Play-Based Learning",
      "Early Child Development",
      "Safe Environment",
    ],
    btnText: "Explore Preschool",
  },
];

const STATS = [
  { value: "38+", label: "Years Legacy" },
  { value: "5000+", label: "Students Studying" },
  { value: "25,000+", label: "Alumni Network" },
];

export default function InstitutionsHero() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-[#f8f9fa] flex flex-col items-center">
      <div className="w-full max-w-[1240px]">
        {/* Header with Title and Gold Underline */}
        <div className="mb-14 text-center md:text-left">
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-[#1c1b1b] relative inline-block">
            Explore Garima Institutions
            <div className="absolute -bottom-4 left-0 w-full">
              <div className="h-[2px] bg-[#d4af37] w-full mb-[2px]" />
              <div className="h-[1px] bg-[#d4af37] w-[90%]" />
            </div>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Institution Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSTITUTIONS.map((inst, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h3 className="font-heading font-black text-[#8b1010] text-xl leading-tight mb-1">
                  {inst.name}
                </h3>
                <span className="text-gray-500 font-medium text-sm mb-4">
                  {inst.board}
                </span>

                {inst.icon}

                <div className="flex flex-col gap-2 w-full mb-10">
                  {inst.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="bg-[#f0f2f5] px-4 py-2 rounded-full text-gray-700 text-xs font-bold whitespace-nowrap overflow-hidden text-ellipsis shadow-sm"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href={`/institutions#${inst.id}`}
                  className="mt-auto w-full"
                >
                  <button className="w-full py-3 bg-[#8b1010] text-white font-heading font-bold text-sm rounded-full shadow-[0_4px_15px_rgba(139,16,16,0.3)] hover:bg-[#a31a1a] transition-colors">
                    {inst.btnText}
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Stats Split Section */}
          <div className="w-full lg:w-64 flex flex-col gap-4">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center text-center flex-1"
              >
                <div className="text-[#d4af37] font-heading font-black text-3xl md:text-4xl leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 font-bold text-[10px] md:text-xs uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
