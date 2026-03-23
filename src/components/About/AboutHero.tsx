"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="w-full py-20 px-6 md:px-12 flex flex-col items-center max-w-[1200px] mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16 w-full">
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#8b1010] mb-4">
          The Journey of Garima Group.
        </h1>
        <div className="w-32 h-[1px] bg-[#d4af37] mx-auto relative mt-4">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 transform rotate-45 border-r border-b border-[#d4af37] w-4 h-4" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-12 w-full">
        
        {/* Modern Leadership Image Grid */}
        <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 relative">
          
          {/* Main Founder Image (Left side, full height on desktop) */}
          <div className="sm:col-span-7 relative h-[400px] sm:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg group">
            <Image
              src="/main.jpeg" // Replace with Mrs. Santosh Bagora's image
              alt="Mrs. Santosh Bagora"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Premium Frosted Glass Label */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 transform transition-transform translate-y-0">
              <h3 className="font-heading font-black text-[#8b1010] text-lg sm:text-xl leading-tight">
                Mrs. Santosh Bagora
              </h3>
              <p className="text-[#d4af37] font-bold uppercase tracking-widest text-[10px] sm:text-xs mt-1">
                Founder & Visionary
              </p>
            </div>

            {/* Founded Badge overlaying the top corner */}
            <div className="absolute top-4 left-4 z-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#8b1010] rounded-full border-2 border-white shadow-lg flex flex-col items-center justify-center text-white p-1 text-center">
              <span className="text-[8px] uppercase tracking-widest font-bold leading-tight">
                Since
              </span>
              <span className="text-sm sm:text-base font-heading font-black text-[#d4af37]">1988</span>
            </div>
          </div>

          {/* Right Column: Director & Executive Director */}
          <div className="sm:col-span-5 flex flex-col gap-4 sm:gap-6">
            
            {/* Top Right: Director */}
            <div className="relative h-[250px] sm:h-1/2 rounded-3xl overflow-hidden shadow-lg group">
              <Image
                src="/dd.jpeg" // Replace with Rama Bagora's image
                alt="Director Rama Bagora"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 object-top"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50">
                <h3 className="font-heading font-bold text-[#8b1010] text-base leading-tight">
                  Rama Bagora
                </h3>
                <p className="text-gray-600 font-bold uppercase tracking-wider text-[9px] mt-0.5">
                  Director
                </p>
              </div>
            </div>

            {/* Bottom Right: Executive Director */}
            <div className="relative h-[250px] sm:h-1/2 rounded-3xl overflow-hidden shadow-lg group">
              <Image
                src="/Untitled design.png" // Replace with Prakhar Bagora's image
                alt="Prakhar Bagora"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 object-top"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50">
                <h3 className="font-heading font-bold text-[#8b1010] text-base leading-tight">
                  Prakhar Bagora
                </h3>
                <p className="text-gray-600 font-bold uppercase tracking-wider text-[9px] mt-0.5">
                  Executive Director
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Narrative Text Side */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-4">
          <h3 className="font-heading font-bold text-3xl text-[#1c1b1b] mb-6 relative">
            Our Story
            <span className="absolute -bottom-2 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-12 h-1 bg-[#d4af37] rounded-full"></span>
          </h3>
          <p className="font-body text-gray-600 leading-relaxed text-lg mb-6">
            Founded in 1988, Garima Group began with a visionary dream by Mrs.
            Santosh Bagora to provide a transformative, value-based education
            deeply rooted in rich Indian culture and heritage. Her unwavering
            commitment was to nurture holistic development, fostering intellect,
            compassion, and integrity in every student, blending traditional
            wisdom with modern knowledge.
          </p>
          <p className="font-body text-gray-600 leading-relaxed text-lg mb-8">
            Today, guided by the dynamic leadership of Director Rama Bagora and 
            Executive Director Prakhar Bagora, what started as a single seed has 
            grown into a vast ecosystem of excellence, empowering thousands of 
            young minds to lead with purpose and excel in a dynamic world.
          </p>

          {/* Optional: Add a call to action or signature here if needed */}
          <div className="flex items-center gap-4 mt-2">
            <div className="w-12 h-[1px] bg-[#8b1010]"></div>
            <p className="text-[#8b1010] font-heading font-bold italic text-lg">Tradition meets Innovation</p>
            <div className="w-12 h-[1px] bg-[#8b1010]"></div>
          </div>
        </div>

      </div>
    </section>
  );
}