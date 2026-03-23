"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const schoolsData = [
  {
    id: 1,
    estd: "1988",
    logo: "/SGVM_Logo.png",
    name: "Shree Garima Vidya Mandir",
    type: "MP Board School – Nursery – XII",
    address: "32/15 Kila Maidan Road Kamla Nehru Colony, Indore",
    link: "https://www.garimaschool.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAQraflleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacGOzmmu9-BEmVwrbbX8Vsv5_uivfLok0WCHCOGHXwUvDx12Gx74eY8OnsVbg_aem_PDqm7C4gsbt5hNpskC5xrg"
  },
  {
    id: 2,
    estd: "2007",
    logo: "/Screenshot 2026-03-21 165705.png",
    name: "Garima Vidya Vihar Sr. Sec. School",
    type: "Aff. to CBSE – Nursery – XII",
    address: "Paul Hill, Opp. Bijasan Mata Temple, Airport Road, Indore",
    link: "https://www.shreegarimavidyamandir.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAQranhleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacc7odgqeatufNvldNITFCm2mbeiaFJwudC96PVWSt9fx86ni0nwg20UQx1xQ_aem_kkvATPzvQKCLPfBMlpvX4w"
  },
  {
    id: 3,
    estd: "2009",
    logo: "/Screenshot 2026-03-21 170459.png",
    name: "The Little Garimayans",
    type: "Playgroup – UKG",
    address: "Indore, Madhya Pradesh",
    link: "/schools/little-garimayans"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const SchoolCard = ({ school }) => {
  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="group relative bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-2xl border border-white/10 h-full overflow-hidden"
    >
      {/* 1. Animated Radial Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D97706]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* 2. Floating Logo container */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="mb-6 relative w-32 h-32 z-10"
      >
        <div className="w-full h-full rounded-full border-2 border-[#FBBF24]/40 shadow-[0_0_30px_rgba(217,119,6,0.2)] overflow-hidden bg-white relative">
            {/* --- ACTUAL IMAGE LOGO --- */}
            <Image 
              src={school.logo} 
              alt={`${school.name} Logo`}
              fill
              className="object-contain p-6" // p-6 keeps the logo from touching the edges
              priority
            />
        </div>
        {/* Logo Orbit Ring */}
        <div className="absolute inset-[-8px] border border-[#FBBF24]/20 rounded-full animate-spin-slow"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col flex-grow items-center w-full">
        <motion.p 
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 1, color: "#FBBF24" }}
          className="text-[#FBBF24]/80 font-bold text-xs mb-2 tracking-[0.25em] uppercase"
        >
          ESTD. {school.estd}
        </motion.p>

        <h3 className="text-white text-2xl font-extrabold leading-tight mb-4 min-h-[64px] flex items-center justify-center px-2">
          {school.name}
        </h3>

        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent mb-4 group-hover:w-full transition-all duration-700"></div>

        <p className="text-[#FBBF24] font-bold text-[11px] tracking-[0.15em] mb-6 uppercase">
          {school.type}
        </p>

        <div className="flex items-start justify-center gap-2 text-slate-400 text-sm mb-8 px-2 flex-grow group-hover:text-slate-200 transition-colors">
          <MapPin size={16} className="shrink-0 mt-1 text-[#D97706]" />
          <p>{school.address}</p>
        </div>

        {/* 3. The Shimmering Button */}
        {/* <button className="relative w-full py-4 bg-gradient-to-r from-[#D97706] to-[#B45309] text-white rounded-xl font-bold text-sm uppercase tracking-[0.2em] shadow-lg shadow-orange-900/40 overflow-hidden group/btn transition-all active:scale-95"> */}
        <Link href={school.link} className="w-full">
  <button className="relative w-full py-4 bg-gradient-to-r from-[#D97706] to-[#B45309] text-white rounded-xl font-bold text-sm uppercase tracking-[0.2em] shadow-lg shadow-orange-900/40 overflow-hidden group/btn transition-all active:scale-95">
    
    <span className="relative z-10 flex items-center justify-center gap-2">
      Explore School <ArrowUpRight size={18} />
    </span>

    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-shimmer" />
  
  </button>
</Link>
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-shimmer" />
        {/* </button> */}
      </div>
    </motion.div>
  );
};

export default function SchoolsSection() {
  return (
    <section className="relative min-h-screen py-32 px-6 lg:px-20 bg-[#1A0505] overflow-hidden">
      
      {/* Background Animated Blobs */}
      <motion.div 
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#4A0E0E] rounded-full blur-[150px] opacity-40 pointer-events-none"
      />
      <motion.div 
        animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#D97706]/10 rounded-full blur-[120px] opacity-20 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-[#FBBF24] text-xs font-black uppercase tracking-[0.6em] block mb-4">GARIMA GROUP</span>
          <h2 className="text-white text-4xl md:text-5xl font-black mb-4 tracking-tight">World Class Institutions</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent mx-auto"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {schoolsData.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes shimmer { 100% { left: 150%; } }
        .animate-shimmer { animation: shimmer 1.5s infinite; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      `}</style>
    </section>
  );
}