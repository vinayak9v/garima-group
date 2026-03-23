"use client";

export default function VisionMission() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white flex flex-col items-center">
      <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Our Vision */}
        <div className="relative group p-8 bg-[#fdfdfd] border border-gray-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          {/* Red Side Accent */}
          <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#8b1010]" />

          <h2 className="font-heading font-extrabold text-[#8b1010] text-3xl mb-4">
            Our Vision
          </h2>
          <p className="font-body text-gray-700 leading-relaxed text-lg">
            To become a global leader in education, recognized for our
            unwavering commitment to academic excellence, moral values, and the
            preservation of Indian cultural heritage, while empowering future
            generations to be responsible and innovative global citizens.
          </p>
        </div>

        {/* Our Mission */}
        <div className="relative group p-8 bg-[#fdfdfd] border border-gray-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          {/* Red Side Accent */}
          <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#8b1010]" />

          <h2 className="font-heading font-extrabold text-[#8b1010] text-3xl mb-4">
            Our Mission
          </h2>
          <p className="font-body text-gray-700 leading-relaxed text-lg">
            We dedicate ourselves to providing a comprehensive learning
            environment that encourages critical thinking, creativity, and
            ethical leadership. We strive to instill a lifelong love for
            learning, respecting diverse perspectives, and preparing students
            for the challenges of a dynamic world through an integrated and
            future-ready curriculum.
          </p>
        </div>
      </div>
    </section>
  );
}
