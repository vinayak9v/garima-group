"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  CheckCircle, 
  Stamp, 
  GraduationCap, 
  Users, 
  Globe, 
  School,
  Star,
  Plus
} from 'lucide-react';

// Animation variants for the grid items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const highlights = [
  { 
    category: "QUALIFIED EDUCATORS", 
    value: "Expert", 
    suffix: "Faculty", 
    description: "Continuous training in modern pedagogy & classroom practices", 
    icon: <Users /> 
  },
  { 
    category: "STUDENT-TEACHER RATIO", 
    value: "1:20", 
    suffix: "", 
    description: "Ensuring individual attention to every child", 
    icon: <Users /> 
  },
  { 
    category: "ACTIVITY-BASED LEARNING", 
    value: "100%", 
    suffix: "Practical", 
    description: "Learning by doing, not rote memorisation", 
    icon: <School /> 
  },
  { 
    category: "STRONG RESULTS", 
    value: "Consistent", 
    suffix: "Excellence", 
    description: "Proven track record in board results", 
    icon: <Award /> 
  },
  { 
    category: "SPARK CURRICULUM", 
    value: "Early", 
    suffix: "Foundation", 
    description: "Focus on literacy, numeracy & life skills", 
    icon: <GraduationCap /> 
  },
  { 
    category: "INDIVIDUAL ATTENTION", 
    value: "Every Child", 
    suffix: "Matters", 
    description: "Personalised support for each learner", 
    icon: <Star /> 
  },
  { 
    category: "AFFORDABLE QUALITY", 
    value: "High Value", 
    suffix: "Learning", 
    description: "Quality education accessible to all", 
    icon: <Stamp /> 
  },
  { 
    category: "HOLISTIC DEVELOPMENT", 
    value: "Beyond", 
    suffix: "Academics", 
    description: "Sports, arts, life skills & personality development", 
    icon: <Globe /> 
  },
];

export default function HighlightsSection() {
  return (
    <section className="bg-[#1A0505] py-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white/90 italic" 
              style={{ fontFamily: 'cursive, "Dancing Script"' }}>
            Our Highlights<span className="text-[#FBBF24]">.</span>
          </h2>
          <div className="h-[1px] w-40 bg-gradient-to-r from-[#D97706] to-transparent mt-4"></div>
        </motion.div>

        {/* The Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10"
        >
          {highlights.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ backgroundColor: "rgba(217, 119, 6, 0.1)" }}
              className="bg-[#2D0A0A]/40 backdrop-blur-sm p-8 flex flex-col justify-between gap-6 border-r border-b border-white/10 min-h-[220px] group transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                {/* Icon */}
                <div className="text-[#FBBF24] group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(item.icon, { size: 40, strokeWidth: 1.5 })}
                </div>
                {/* Category Tag */}
                {item.category && (
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#FBBF24]/50 uppercase text-right max-w-[120px]">
                    {item.category}
                  </span>
                )}
              </div>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                   <span className="text-white text-2xl lg:text-3xl font-bold tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-[#FBBF24] text-lg lg:text-xl font-bold uppercase">
                    {item.suffix}
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mt-2 group-hover:text-white/90 transition-colors">
                  {item.description}
                </p>
              </div>
              
              {/* Animated bottom line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FBBF24] group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}