"use client";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function InnovationPage() {
  return (
    <>
      <Navbar theme="light" />
      <main className="min-h-screen bg-[#f1f3f6] pt-32 pb-20 w-full overflow-hidden">
        <div className="w-full max-w-[1200px] px-6 mx-auto flex flex-col gap-16">
          <div className="text-center mb-10">
            <h1 className="font-heading font-bold text-4xl text-[#1c1b1b] mb-4">
              Innovation & Technology
            </h1>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              See how Garima Group is pioneering future-ready skills through
              robotics, AI, and STEM education.
            </p>
          </div>

          <section
            id="g-vyas-robot"
            className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
          >
            <h2 className="font-heading font-bold text-2xl text-[#a71515] mb-4">
              G-VYAS Humanoid Robot
            </h2>
            <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-medium border border-dashed border-gray-300">
              [Content Placeholder: Details about MP&apos;s First Humanoid
              Robot]
            </div>
          </section>

          <section
            id="robotics-ai-labs"
            className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
          >
            <h2 className="font-heading font-bold text-2xl text-[#a71515] mb-4">
              Robotics & AI Labs
            </h2>
            <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-medium border border-dashed border-gray-300">
              [Content Placeholder: Information on state-of-the-art lab
              facilities]
            </div>
          </section>

          <section
            id="garima-innovation-club"
            className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
          >
            <h2 className="font-heading font-bold text-2xl text-[#a71515] mb-4">
              Garima Innovation Club (GIC)
            </h2>
            <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-medium border border-dashed border-gray-300">
              [Content Placeholder: Student clubs, projects, and innovation
              challenges]
            </div>
          </section>

          <section
            id="stem-programs"
            className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
          >
            <h2 className="font-heading font-bold text-2xl text-[#a71515] mb-4">
              STEM Programs
            </h2>
            <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-medium border border-dashed border-gray-300">
              [Content Placeholder: Curriculum integration of Science,
              Technology, Engineering, and Math]
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
