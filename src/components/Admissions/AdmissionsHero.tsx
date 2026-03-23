"use client";

import Image from "next/image";

export default function AdmissionsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] pt-16 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-[1240px] w-full flex flex-col items-center">
        {/* Title with decorative flourish */}
        <div className="text-center mb-10">
          <h1 className="font-heading font-black text-4xl md:text-6xl text-[#8b1010] leading-tight mb-4 tracking-tight drop-shadow-sm">
            Begin Your <br className="sm:hidden" /> Garima Journey
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-[#d4af37]" />
            <svg
              className="w-8 h-8 text-[#d4af37]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21l-3.2-6.4L2 12.8 12 12l10 .8-6.8 1.8L12 21z" />
            </svg>
            <div className="w-12 h-[1px] bg-[#d4af37]" />
          </div>
        </div>

        {/* Hero Image Container with styled rounded corners */}
        <div className="relative w-full h-[400px] md:h-[550px] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src="https://images.unsplash.com/photo-1577891729319-f4871c6ec08f?q=80&w=2669&auto=format&fit=crop"
            alt="Smiling children on Garima Campus"
            fill
            className="object-cover"
            priority
          />

          {/* Glassmorphism sub-heading overlay */}
          <div className="absolute left-6 md:left-12 bottom-8 md:bottom-12 max-w-[500px] bg-white/20 backdrop-blur-xl border border-white/40 p-6 md:p-8 rounded-3xl shadow-xl">
            <p className="font-body font-medium text-white text-lg md:text-xl leading-relaxed drop-shadow-sm">
              Embark on a transformative educational experience. Discover the
              path to your future at Garima Group.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
