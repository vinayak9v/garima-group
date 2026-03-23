"use client";

import Image from "next/image";

const LEADERS = [
  {
    name: "Ravina Mehta",
    role: "CEO",
    image: "/1.jpeg",
  },
  {
    name: "Garima Ostwal",
    role: "Treasurer",
    image: "/2.jpeg",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white flex flex-col items-center">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#8b1010] mb-16 text-center drop-shadow-sm">
        Leadership Team
      </h2>

      {/* Changed from 'grid' to 'flex flex-wrap justify-center' */}
      <div className="w-full max-w-[1100px] flex flex-wrap justify-center gap-12 md:gap-24">
        {LEADERS.map((leader, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-[6px] border-[#8b1010] overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8b1010]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="mt-6 text-center">
              <h3 className="font-heading font-bold text-xl text-[#1c1b1b] mb-1">
                {leader.name}
              </h3>
              <p className="font-body text-gray-400 font-bold uppercase tracking-widest text-[11px] sm:text-xs">
                {leader.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}