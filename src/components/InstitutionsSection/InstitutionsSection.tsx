"use client";

import Image from "next/image";
import Link from "next/link";

const INSTITUTIONS = [
  {
    name: "Garima Vidya Vihar (CBSE)",
    tags: ["CBSE", "G-12", "Global Curriculum"],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    link: "/institutions#garima-vidya-vihar",
    buttonText: "Explore School",
  },
  {
    name: "Shree Garima Vidya Mandir (MP)",
    tags: ["MP Board", "Hindi/English Medium", "Cultural Roots"],
    image:
      "https://images.unsplash.com/photo-1523240715632-d984bc31b211?q=80&w=1200&auto=format&fit=crop",
    link: "/institutions#shree-garima-vidya-mandir",
    buttonText: "Discover More",
  },
  {
    name: "Little Garimayans [Preschool]",
    tags: ["Preschool", "Play-Way Method", "Early Development"],
    image:
      "https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=1200&auto=format&fit=crop",
    link: "/institutions#preschool",
    buttonText: "Visit Preschool",
  },
];

export default function InstitutionsSection() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-[#f8f9fa] relative overflow-hidden">
      {/* Background Decor */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#8b1010 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#8b1010] mb-12 text-center drop-shadow-sm">
          Institutions
        </h2>

        {/* Cards Container */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6 xl:gap-8">
          {INSTITUTIONS.map((inst, index) => (
            <div
              key={index}
              className="group relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(139,16,16,0.15)] border-[4px] border-[#9b1515] transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-end p-6"
            >
              {/* Background Image */}
              <Image
                src={inst.image}
                alt={inst.name}
                fill
                className="object-cover object-center z-0 transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Subtle top red glow inside border */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#8b1010]/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Content */}
              <div className="relative z-20 flex flex-col items-start w-full transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                {/* Title */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-3 leading-tight drop-shadow-md">
                  {inst.name}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {inst.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[10px] sm:text-xs font-medium text-[#ffd700] border border-[#ffd700]/30 bg-black/40 backdrop-blur-sm rounded-full tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="w-full flex justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={inst.link}
                    className="px-6 py-2.5 bg-white text-[#1c1b1b] font-heading font-bold text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    {inst.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
