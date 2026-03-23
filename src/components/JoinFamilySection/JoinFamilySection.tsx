"use client";

import Link from "next/link";

export default function JoinFamilySection() {
  return (
    <section className="w-full relative py-12 md:py-14 bg-gradient-to-r from-[#b58e2a] via-[#8b1010] to-[#8b1010] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[1200px]">
        <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-2 drop-shadow-md">
          Join the Garima Family
        </h2>
        <p className="font-body text-xs md:text-sm lg:text-base text-white/90 mb-8 drop-shadow-sm font-medium">
          Shape the Future with Us
        </p>

        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center">
          <Link href="/admissions">
            <button className="min-w-[170px] lg:min-w-[190px] px-8 py-2.5 bg-[#6e0b0b] text-white font-heading font-bold text-sm lg:text-base rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:bg-[#5a0909] transition-all transform hover:scale-105 border border-white/5">
              Apply Now
            </button>
          </Link>
          <Link href="/contact">
            <button className="min-w-[170px] lg:min-w-[190px] px-8 py-2.5 bg-white text-[#1c1b1b] font-heading font-bold text-sm lg:text-base rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-all transform hover:scale-105">
              Schedule a Visit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
