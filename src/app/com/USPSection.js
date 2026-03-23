"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import Link from 'next/link';

const usps = [
  { id: 1, label: "Clarity in Concepts", desc: "Strong academic foundation", img: "https://cdn-icons-png.flaticon.com/512/3306/3306613.png" },
  { id: 2, label: "Confident Expression", desc: "Speak, present, participate", img: "https://cdn-icons-png.flaticon.com/512/2436/2436702.png" },
  { id: 3, label: "Active Classrooms", desc: "Learning through doing", img: "https://cdn-icons-png.flaticon.com/512/3429/3429150.png" },
  { id: 4, label: "Thinking Skills", desc: "Logic over memorisation", img: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
  { id: 5, label: "Personal Attention", desc: "Guided at every step", img: "https://cdn-icons-png.flaticon.com/512/1063/1063376.png" },
  { id: 6, label: "Creative Exposure", desc: "Arts, activities, exploration", img: "https://cdn-icons-png.flaticon.com/512/2177/2177275.png" },
  { id: 7, label: "Structured Growth", desc: "Age-appropriate learning journey", img: "https://cdn-icons-png.flaticon.com/512/1904/1904334.png" },
  { id: 8, label: "Supportive Environment", desc: "Safe, positive, encouraging", img: "https://cdn-icons-png.flaticon.com/512/3081/3081918.png" },
];

export default function USPSection() {
  return (
    <section className="relative bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-start gap-3"
          >
            <Quote className="text-[#D97706] shrink-0" size={32} />
            <p className="text-[#2D0A0A] italic text-base md:text-lg leading-relaxed font-medium">
             {"At Garima, we teach children to think, not just to remember."}
              <span className="block text-slate-400 not-italic text-sm mt-1">— Founders, Garima Group</span>
            </p>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black text-[#2D0A0A] leading-tight"
          >
         {"What If Your Child Didn’t Just Study… "}
            <span className="text-[#D97706]">But Grew?</span>
          </motion.h2>

          <div className="space-y-4 text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            <p>
             {"At Garima Group, learning goes beyond books."}
<span className="text-[#2D0A0A] font-bold">NEP 2020</span>
{"We focus on how your child thinks, speaks, and evolves every day—inside and outside the classroom."}
            </p>
            <p className="bg-slate-50 p-4 rounded-2xl border-l-4 border-[#D97706]">
              {"From early years to higher classes, your child experiences a system designed for real "}
              
              {"understanding, confidence, and lifelong success."}
            </p>
          </div>

         {/* <Link href="/innovation">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2D0A0A] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest shadow-lg shadow-red-900/20"
          >
            EXPLORE INNOVATION
          </motion.button>
         </Link> */}
        </div>

        {/* Right Side: Smaller Circular USP Diagram */}
      <div className="relative flex flex-col items-center w-full mt-10 lg:mt-0">
          <div className="relative flex justify-center items-center h-[400px] w-full">
            {/* Central Logo/Text */}
            <div className="z-20 text-center bg-white p-6 rounded-full shadow-2xl border border-slate-50 w-36 h-36 flex flex-col items-center justify-center">
              <Sparkles className="text-[#D97706] mx-auto mb-1" size={24} />
              <h3 className="text-sm font-black text-[#2D0A0A] tracking-tighter uppercase mt-1 text-center">The Journey</h3>
              <div className="w-8 h-1 bg-[#FBBF24] mx-auto mt-2 rounded-full"></div>
            </div>

            {/* Rotating Orbit Container */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] border border-dashed border-slate-200 rounded-full"
            >
              {usps.map((usp, index) => {
                const angle = (index * 45) * (Math.PI / 180);
                const radius = 140; // Smaller radius for "Small" requirement
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div 
                    key={usp.id}
                    className="absolute left-1/2 top-1/2"
                    style={{ 
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` 
                    }}
                  >
                    {/* Counter-rotate the icon so images stay upright */}
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="group relative flex justify-center"
                    >
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center shadow-md border border-slate-100 hover:border-[#D97706] hover:scale-110 transition-all duration-300 z-10 cursor-pointer">
                        <img 
                          src={usp.img} 
                          alt={usp.label} 
                          className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform" 
                        />
                      </div>
                      
                      {/* Tooltip on hover (Updated with label and description) */}
                      <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-[#2D0A0A] px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-300 pointer-events-none z-50 shadow-xl border border-[#D97706]/30 flex flex-col items-center translate-y-2 group-hover:translate-y-0">
                        <span className="text-[11px] font-bold text-[#FBBF24] uppercase tracking-wider mb-0.5">{usp.label}</span>
                        <span className="text-[10px] text-white/90">{usp.desc}</span>
                        {/* Tooltip Triangle */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2D0A0A] rotate-45 border-l border-t border-[#D97706]/30"></div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Decorative Outer Glow */}
            <div className="absolute w-[320px] h-[320px] bg-[#D97706]/5 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Closing Line added at the bottom */}
          <div className="mt-8 text-center px-4 w-full">
            <p className="text-xl md:text-2xl font-bold text-[#2D0A0A]">
              Because your child deserves <span className="text-[#D97706]">more than just schooling.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}