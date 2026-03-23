import React from 'react';
import { PlayCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    title: "Parent Speaks",
    image: "/parent-image.jpg", 
    bgColor: "bg-[#D97706]", // Amber
  },
  {
    id: 2,
    title: "Franchisee Speaks",
    image: "/franchisee-image.jpg",
    bgColor: "bg-[#B45309]", // Darker Amber
  },
  {
    id: 3,
    title: "Celebrity Speaks",
    image: "/celebrity-image.jpg",
    bgColor: "bg-[#2D0A0A]", // Dark Brown
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="relative group cursor-pointer overflow-hidden rounded-[1.5rem] shadow-lg hover:shadow-xl transition-all duration-300 max-w-[320px] mx-auto">
    {/* Card Image - Reduced aspect ratio to make it shorter */}
    <div className="aspect-[4/4.5] relative bg-[#FBBF24]/10">
      <img 
        src={testimonial.image} 
        alt={testimonial.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Footer Bar - Smaller padding and text */}
    <div className={`${testimonial.bgColor} p-3 flex items-center justify-between`}>
      <span className="text-white font-bold text-base tracking-wide pl-2">
        {testimonial.title}
      </span>
      <div className="bg-white rounded-full p-0.5">
        <PlayCircle className="text-[#D97706] fill-[#D97706]/10" size={24} />
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="relative bg-[#FFF9F5] pt-16 pb-12 px-6">
      {/* Smaller Wave Top Effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Header Section - Smaller text and margins */}
        <p className="text-[#D97706] italic text-lg font-medium mb-1" style={{ fontFamily: 'cursive, "Dancing Script"' }}>
          Our educational excellence is applauded by everyone!
        </p>
        <h2 className="text-[#2D0A0A] text-3xl md:text-4xl font-bold leading-tight mb-8">
          Why Our Preschool is the Trusted Choice
        </h2>

        {/* Grid Container - Smaller gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}