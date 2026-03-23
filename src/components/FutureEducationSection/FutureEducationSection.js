"use client";

import Image from "next/image";

export default function FutureEducationSection() {
  return (
    <section className="w-full bg-[#1c1b1b] relative overflow-hidden flex flex-col items-center">
      {/* Top subtle gradient to blend from previous white/light sections if needed */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[1400px] w-full px-4 md:px-8 py-16 md:py-24 flex flex-col items-center justify-center">
        {/* The Graphic Wrapper */}
        <div className="relative w-full max-w-[1100px] aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 bg-black/50">
          {/* We use an img tag with object-contain so the entire graphic is visible without cropping,
              while the container holds the dark sophisticated background. 
              Since we do not have the actual image asset yet, we will use a placeholder or the nearest possible image link.
              For now, we will use a dark tech placeholder from Unsplash until the real asset is uploaded to the public folder.
          */}
          <Image
            src="/future-education.png" // Temporary placeholder: Robot/AI theme
            alt="Future Education at Garima featuring G-VYAS Robot, STEM, and Innovation Clubs"
            fill
            className="object-cover md:object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 1100px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
