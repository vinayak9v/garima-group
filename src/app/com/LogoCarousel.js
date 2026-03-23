"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const logoData = [
  { id: 1, src: '/UNICEF_Logo.png', alt: 'CBSE' },
  { id: 2, src: '/sof_logo-01_-_copy.jpg.jpeg', alt: 'Cambridge' },
  { id: 3, src: '/lq-logo.png', alt: 'British Council' },

  { id: 4, src: '/CBSE logo.png', alt: 'International Award' },
  
  { id: 5, src: '/images (11).jpeg', alt: 'EI' },
  
];

export default function LogoCarousel() {
  return (
    <section className="py-20 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h3 className="text-[#2D0A0A] text-sm font-black uppercase tracking-[0.4em] mb-3">
            Accreditations & Partners
          </h3>
          <div className="h-1 w-16 bg-[#D97706] mx-auto rounded-full"></div>
        </div>
<Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          centerInsufficientSlides={true} // <-- Added this to center the logos
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="pb-24 !px-4 flex justify-center" // <-- Added flex justify-center here as a fallback
        >
          {logoData.map((logo) => (
            <SwiperSlide key={logo.id}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center h-full"
              >
                {/* Circular Container */}
                <div className="relative group">
                  {/* Rotating Border Glow (Hover only) */}
                  <div className="absolute inset-[-4px] rounded-full border-2 border-dashed border-[#D97706]/0 group-hover:border-[#D97706]/40 group-hover:rotate-180 transition-all duration-1000 ease-in-out"></div>
                  
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:border-[#D97706]/20 relative z-10 overflow-hidden">
                    
                    {/* Inner Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#D97706]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Logo Image */}
                    <div className="relative w-full h-full transition-all duration-700">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Garima Style Pagination Dots */}
 
    </section>
  );
}