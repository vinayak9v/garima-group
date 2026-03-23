"use client";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar theme="light" />
      <main className="min-h-screen bg-[#f1f3f6] pt-32 pb-20 w-full overflow-hidden">
        <div className="w-full max-w-[1200px] px-6 mx-auto flex flex-col gap-16">
          <div className="text-center mb-10">
            <h1 className="font-heading font-bold text-4xl text-[#1c1b1b] mb-4">
              Blog & Insights
            </h1>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Read our latest articles on education, parenting, and preparing
              kids for the future.
            </p>
          </div>

          <section
            id="ai-in-education"
            className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
          >
            <h2 className="font-heading font-bold text-2xl text-[#a71515] mb-4">
              AI in Education
            </h2>
            <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-medium border border-dashed border-gray-300">
              [Content Placeholder: Blog posts related to AI tools and learning]
            </div>
          </section>

          <section
            id="parenting-guide"
            className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
          >
            <h2 className="font-heading font-bold text-2xl text-[#a71515] mb-4">
              Parenting Guide
            </h2>
            <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-medium border border-dashed border-gray-300">
              [Content Placeholder: Tips for parents on supporting their
              child&apos;s education]
            </div>
          </section>

          <section
            id="stem-education"
            className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
          >
            <h2 className="font-heading font-bold text-2xl text-[#a71515] mb-4">
              STEM Education
            </h2>
            <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-medium border border-dashed border-gray-300">
              [Content Placeholder: Importance of Science, Technology,
              Engineering, and Math]
            </div>
          </section>

          <section
            id="future-skills"
            className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
          >
            <h2 className="font-heading font-bold text-2xl text-[#a71515] mb-4">
              Future Skills
            </h2>
            <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-medium border border-dashed border-gray-300">
              [Content Placeholder: Critical thinking, collaboration, and life
              skills]
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
