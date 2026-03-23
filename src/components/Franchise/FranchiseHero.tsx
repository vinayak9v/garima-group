"use client";

import Image from "next/image";

export default function FranchiseHero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2670&auto=format&fit=crop"
        alt="Modern School Architecture"
        fill
        className="object-cover"
        priority
      />

      {/* Modern Gradient Overlay: Blue to Red */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#8b1010]/70 to-transparent flex items-center px-6 md:px-20">
        <div className="max-w-[700px] text-white">
          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl leading-tight drop-shadow-lg mb-6">
            Start Your Own School <br />
            With Garima Group
          </h1>

          <div className="flex items-center gap-3 mb-10 group cursor-default">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all group-hover:bg-[#d4af37]/20 group-hover:border-[#d4af37]/40 shadow-xl">
              <svg
                className="w-6 h-6 text-[#d4af37]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl text-[#d4af37] tracking-wider drop-shadow-md">
              Franchise Opportunity
            </span>
          </div>

          <button className="flex items-center gap-3 bg-gradient-to-r from-[#8b1010] to-[#b71c1c] text-white px-8 py-4 rounded-full font-heading font-bold text-lg shadow-2xl transition-all hover:scale-105 hover:shadow-[#8b1010]/40 group">
            Become Franchise Partner
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
