"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, GraduationCap } from 'lucide-react';

// New data strictly from the provided image
const learningData = [
  {
    name: "OUR APPROACH",
    items: [
      { program: "SPARK Curriculum", grades: "NURSERY – UKG" },
      { program: "Activity-Based Learning", grades: "FOUNDATION STAGE" },
      { program: "Enquiry-Based Learning", grades: "PREPARATORY STAGE" },
      { program: "Experiential Learning", grades: "MIDDLE STAGE" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function LearningApproach() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-6xl text-[#2D0A0A] italic font-light" 
              style={{ fontFamily: 'cursive, "Dancing Script", serif' }}
            >
              Our Learning Approach<span className="text-[#D97706]">.</span>
            </motion.h2>
            <div className="h-1 w-32 bg-[#FBBF24] mt-4 rounded-full"></div>
          </div>
          <p className="text-slate-400 font-bold text-xs tracking-[0.3em] mt-6 md:mt-0 uppercase">
            Educational Methodology
          </p>
        </div>

        {/* Card Container - Adjusted to center the single card */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto items-start"
        >
          {learningData.map((data, idx) => (
            <motion.div key={idx} variants={columnVariants} className="flex flex-col group w-full">
              
              {/* Premium Header Card */}
              <div className="bg-[#2D0A0A] text-white p-6 text-center rounded-t-2xl shadow-xl border-b-4 border-[#D97706] relative overflow-hidden">
                {/* Decorative Icon - Swapped to GraduationCap to better fit the 'approach' theme */}
                <GraduationCap className="absolute -right-2 -top-2 text-white/10" size={64} />
                
                <h3 className="text-xl font-black tracking-widest leading-tight relative z-10">
                  {data.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mt-2 opacity-60">
                   <div className="h-[1px] w-4 bg-[#FBBF24]"></div>
                   <span className="text-[10px] font-bold tracking-[0.2em]">STAGES</span>
                   <div className="h-[1px] w-4 bg-[#FBBF24]"></div>
                </div>
              </div>

              {/* Curriculum Rows */}
              <div className="bg-slate-50 rounded-b-2xl shadow-sm border-x border-b border-slate-100 overflow-hidden">
                {data.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ backgroundColor: "#2D0A0A", color: "#FFFFFF" }}
                    className="grid grid-cols-2 border-b border-slate-200 last:border-0 transition-colors duration-300 group/row"
                  >
                    <div className="p-6 text-sm font-black text-[#2D0A0A] border-r border-slate-200 flex items-center group-hover/row:text-[#FBBF24]">
                      {item.program}
                    </div>
                    <div className="p-6 text-xs font-bold text-slate-500 flex items-center group-hover/row:text-white/80 uppercase">
                      {item.grades}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Decoration */}
              <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <BookOpen size={20} className="text-[#D97706]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}