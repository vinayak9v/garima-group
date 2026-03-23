"use client";

const MILESTONES = [
  {
    year: "1989",
    title: "Garima Vidya Vihar Established",
    position: "above",
  },
  {
    year: "1995",
    title: "Shree Garima Vidya Mandir Launched",
    position: "below",
  },
  {
    year: "2005",
    title: "Little Garimayans Preschool",
    position: "above",
  },
  {
    year: "2015",
    title: "10,000+ Alumni Reached",
    position: "below",
  },
  {
    year: "2020",
    title: "MP's First Humanoid Robot",
    position: "above",
  },
  {
    year: "2025",
    title: "Vision for Global Campus & AI Integration",
    position: "below",
    isFuture: true,
  },
];

export default function TimelineSection() {
  return (
    <section className="w-full py-24 bg-[#f8faff] relative overflow-hidden flex flex-col items-center">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 0.5px, transparent 0.5px)",
          backgroundSize: "20px 20px",
        }}
      />

      <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#8b1010] mb-20 text-center relative z-10">
        Timeline
      </h2>

      <div className="w-full max-w-[1200px] px-4 md:px-8 overflow-x-auto no-scrollbar relative z-10">
        <div className="relative min-w-[1000px] md:min-w-0 md:w-full h-[300px] flex items-center justify-between px-10">
          {/* Main Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gradient-to-r from-[#d4af37] via-[#d4af37] to-[#a31a1a] -translate-y-1/2 z-0 shadow-sm" />

          {MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center z-10 w-32"
            >
              {/* Content Above Line */}
              {item.position === "above" && (
                <div className="absolute bottom-6 flex flex-col items-center text-center w-40">
                  <span className="font-heading font-extrabold text-[#d4af37] text-xl mb-1 drop-shadow-sm">
                    {item.year}
                  </span>
                  <p className="font-body font-bold text-[14px] text-[#1c1b1b] leading-tight px-2 drop-shadow-sm">
                    {item.title}
                  </p>
                </div>
              )}

              {/* Dot on the line */}
              <div
                className={`w-5 h-5 rounded-full border-2 border-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] relative z-20
                ${item.isFuture ? "bg-[#8b1010] scale-125" : "bg-[#d4af37]"}
              `}
              >
                {item.isFuture && (
                  <div className="absolute inset-0 rounded-full animate-ping bg-[#8b1010] opacity-40" />
                )}
              </div>

              {/* Content Below Line */}
              {item.position === "below" && (
                <div className="absolute top-7 flex flex-col items-center text-center w-40">
                  <span className="font-heading font-extrabold text-[#d4af37] text-xl mb-1 drop-shadow-sm">
                    {item.year}
                  </span>
                  <p className="font-body font-bold text-[14px] text-[#1c1b1b] leading-tight px-2 drop-shadow-sm">
                    {item.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
