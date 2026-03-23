"use client";

export default function FounderQuote() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-[#fdfdfd] flex flex-col items-center">
      <div className="max-w-[800px] w-full text-center relative">
        {/* Decorative Lotus icons before/after quote */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-10 h-10 text-[#d4af37]/40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
          </svg>
        </div>

        <blockquote className="italic text-2xl md:text-3xl font-heading font-medium text-[#1c1b1b] leading-snug mb-8">
          &ldquo;Education is not merely the imparting of knowledge, but the
          Illumination of the mind and the kindling of the soul. Our endeavor is
          to create not just successful individuals, but virtuous human beings
          who contribute meaningfully to society.&rdquo;
        </blockquote>

        <cite className="not-italic font-heading font-bold text-[#8b1010] block text-xl">
          - Mrs. Santosh Bagora
        </cite>
        <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs mt-1">
          Founder & Visionary
        </p>

        <div className="flex justify-center mt-6">
          <svg
            className="w-10 h-10 text-[#d4af37]/40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21l2.81-6.63L22 13.76l-5.46-4.73L18.18 2 12 5.73 5.82 2l1.64 7.03L2 13.76l7.19.61L12 21z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
