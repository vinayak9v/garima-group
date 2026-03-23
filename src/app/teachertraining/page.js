"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  BookOpen, 
  Award, 
  Zap, 
  XCircle, 
  ChevronRight,
  MessageSquare,
  GraduationCap
} from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';

export default function TeacherTraining() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', qualification: '', experience: '', course: '', mode: 'Online'
  });

  return (
    <div className="bg-white font-sans text-slate-900">
      <Navbar/>
      {/* 🔷 HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center bg-[#2D0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FBBF24] font-black uppercase tracking-[0.4em] text-sm mb-4 block">Teacher Training Initiative</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Train Better. <br/>
              <span className="text-[#D97706]">Teach Better.</span>
            </h1>
            <p className="text-slate-300 text-xl mb-8 max-w-lg italic border-l-4 border-[#D97706] pl-6">
              "Not just training. Real classroom transformation."
            </p>
            <button className="bg-[#D97706] hover:bg-[#FBBF24] text-white hover:text-[#2D0A0A] px-10 py-4 rounded-xl font-black transition-all shadow-2xl uppercase tracking-widest text-sm flex items-center gap-3 group">
              Enroll Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
          <div className="hidden lg:block relative">
             <div className="w-[500px] h-[500px] bg-[#D97706]/10 rounded-full blur-3xl absolute -top-20 -right-20"></div>
             <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80" alt="Training" className="rounded-[3rem] shadow-2xl border-8 border-white/10 relative z-10 grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* 🔷 ABOUT & THE GAP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-[#2D0A0A] text-4xl font-black mb-6">Who We Are</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                A teacher training initiative by <span className="text-[#D97706] font-bold">Garima Group</span>. 
                We move beyond the blackboard to focus on practice, not theory. Our goal is to empower educators with tools that work in the real world.
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border-l-8 border-[#2D0A0A]">
                 <h3 className="text-[#2D0A0A] font-black mb-4 uppercase tracking-widest text-sm">Where Others Fail</h3>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-500">
                        <XCircle className="text-rose-500" /> Deliver content & Leave
                    </li>
                    <li className="flex items-center gap-3 text-[#2D0A0A] font-bold">
                        Result: No real classroom change.
                    </li>
                 </ul>
              </div>
            </div>

            {/* 🔷 OUR APPROACH */}
            <div className="bg-[#2D0A0A] rounded-[3rem] p-12 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706]/20 blur-3xl"></div>
               <h2 className="text-3xl font-black mb-8">What We Do Differently</h2>
               <div className="space-y-8">
                  {[
                    { t: "We Train", d: "Core conceptual clarity and modern pedagogy." },
                    { t: "We Support", d: "Continuous mentorship post-session." },
                    { t: "We Implement", d: "Handholding schools to apply learning in real classrooms." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-[#D97706] flex items-center justify-center font-black shrink-0">{i+1}</div>
                      <div>
                        <h4 className="font-black text-[#FBBF24] text-xl mb-1">{step.t}</h4>
                        <p className="text-slate-400 text-sm">{step.d}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 HOW WE TRAIN (PROCESS) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-[#2D0A0A] text-4xl font-black mb-16">The Training Lifecycle</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Zap />, label: "Demonstration" },
                { icon: <Users />, label: "Practice" },
                { icon: <MessageSquare />, label: "Feedback" },
                { icon: <GraduationCap />, label: "Implementation" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
                   <div className="text-[#D97706] mb-4 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                   <h4 className="font-black text-[#2D0A0A] uppercase text-xs tracking-widest">{item.label}</h4>
                </div>
              ))}
           </div>
           <p className="mt-12 text-[#D97706] font-bold italic text-xl">Result: Confident, effective teachers.</p>
        </div>
      </section>

      {/* 🔷 REGISTRATION FORM */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#2D0A0A] rounded-[3rem] shadow-2xl overflow-hidden grid md:grid-cols-5">
            <div className="md:col-span-2 bg-[#D97706] p-12 text-[#2D0A0A]">
               <h2 className="text-4xl font-black mb-6">Join the Training</h2>
               <p className="font-bold mb-8">Start your transformation journey today.</p>
               <ul className="space-y-4 font-medium text-sm">
                  <li className="flex items-center gap-2"><CheckCircle2 size={18} /> Professional Certificate</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={18} /> Practical Skills</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={18} /> Classroom Ready</li>
               </ul>
            </div>
            <div className="md:col-span-3 p-12 bg-white">
               <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D97706]" />
                    <input type="text" placeholder="Phone" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D97706]" />
                  </div>
                  <input type="email" placeholder="Email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D97706]" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Qualification" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D97706]" />
                    <input type="text" placeholder="Experience" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D97706]" />
                  </div>
                 <input
  type="text"
  placeholder="Topic of Training"
  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D97706]"
/>
                  <div className="flex gap-6 py-2">
                    <label className="flex items-center gap-2 font-bold text-sm"><input type="radio" name="mode" /> Online</label>
                    <label className="flex items-center gap-2 font-bold text-sm"><input type="radio" name="mode" /> Offline</label>
                  </div>
                  <button className="w-full bg-[#2D0A0A] text-white font-black py-4 rounded-xl hover:bg-[#D97706] transition-all uppercase tracking-widest shadow-xl shadow-red-900/20">
                    Submit Application
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 FINAL CTA */}
      <section className="py-20 text-center">
         <h2 className="text-4xl md:text-6xl font-black text-[#2D0A0A] mb-8">Don’t Just Learn. Implement.</h2>
         <button className="bg-[#D97706] text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl">
            APPLY NOW
         </button>
      </section>

    </div>
  );
}