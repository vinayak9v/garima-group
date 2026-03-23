import React from "react";
import Image from "next/image";
// import Button from "./components/Button/Button";
import Button from "../Button/Button";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Futuristic education technology environment"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-academic-black/50 via-academic-black/40 to-academic-black/80 z-[1]" />
        {/* Subtle red tint */}
        <div className="absolute inset-0 bg-heritage-red/10 z-[1]" />
      </div>

      {/* Content — centered */}
      <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="font-heading font-bold text-white leading-[1.1] max-w-[800px] mb-6 animate-fade-in-up animation-delay-150 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-heritage-gold">38</span> Years of{" "}
          <br className="hidden sm:block" />
          Educational Excellence
        </h1>

        {/* Gold Separator Line */}
        <div className="w-full max-w-[800px] h-[2px] bg-gradient-to-r from-transparent via-heritage-gold to-transparent drop-shadow-[0_0_8px_rgba(201,162,39,0.8)] mb-6 animate-fade-in-up animation-delay-300" />

        {/* Subtitle */}
        <p className="font-body text-white/90 text-base sm:text-lg md:text-xl max-w-[600px] leading-relaxed mb-12 animate-fade-in-up animation-delay-450 tracking-wide">
          From Value-Based Education to AI-Powered Learning
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in-up animation-delay-600">
          <Button
            variant="gradient"
            size="lg"
            href="#schools"
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            }
          >
            Explore Schools
          </Button>

          <Button
            variant="gradient"
            size="lg"
            href="#franchise"
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5-4 5-4" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 4-5 4-5" />
              </svg>
            }
          >
            Start a School With Us
          </Button>

          <Button
            variant="gradient"
            size="lg"
            href="#visit"
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            }
          >
            Book Campus Visit
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-academic-black/90 to-transparent z-[2]" />
    </section>
  );
}
