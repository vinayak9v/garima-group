"use client";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function MediaPage() {
  return (
    <>
      <Navbar theme="light" />
      <main className="min-h-screen bg-[#f1f3f6] pt-32 pb-20 w-full overflow-hidden">
        <div className="w-full max-w-[1200px] px-6 mx-auto flex flex-col gap-16">
          <div className="text-center mb-10">
            <h1 className="font-heading font-bold text-4xl text-[#1c1b1b] mb-4">
              Media & Events
            </h1>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Stay up to date with the latest happenings, news, and celebrations
              across our campuses.
            </p>
          </div>

          <section
            id="annual-events"
            className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
          >
            <h2 className="font-heading font-bold text-2xl text-[#a71515] mb-4">
              Annual Events
            </h2>
            <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-medium border border-dashed border-gray-300">
              [Content Placeholder: Sports day, annual function, science fairs]
            </div>
          </section>

          <section
            id="achievements"
            className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
          >
            <h2 className="font-heading font-bold text-2xl text-[#a71515] mb-4">
              Recent Achievements
            </h2>
            <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-medium border border-dashed border-gray-300">
              [Content Placeholder: Student accolades, inter-school competition
              results]
            </div>
          </section>

          <section
            id="news-coverage"
            className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
          >
            <h2 className="font-heading font-bold text-2xl text-[#a71515] mb-4">
              News Coverage
            </h2>
            <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-medium border border-dashed border-gray-300">
              [Content Placeholder: Newspaper clippings and PR features]
            </div>
          </section>

          <section
            id="gallery"
            className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
          >
            <h2 className="font-heading font-bold text-2xl text-[#a71515] mb-4">
              Photo & Video Gallery
            </h2>
            <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-medium border border-dashed border-gray-300">
              [Content Placeholder: Masonry grid of images and embedded video
              highlights]
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
