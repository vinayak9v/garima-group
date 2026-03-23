"use client";

const TRUST_INDICATORS = [
  {
    value: "38+ Years Legacy",
    sub: "Proven Track Record",
    icon: (
      <svg
        className="w-10 h-10 text-[#8b1010]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    value: "25,000+ Alumni Network",
    sub: "Strong Network",
    icon: (
      <svg
        className="w-10 h-10 text-[#8b1010]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    value: "Successful Partners",
    sub: "Pan India Presence",
    icon: (
      <svg
        className="w-10 h-10 text-[#8b1010]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

export default function FranchiseTrustEnquiry() {
  return (
    <section className="w-full">
      {/* Trust Indicators */}
      <div className="py-20 px-6 md:px-12 bg-white flex flex-col items-center">
        <h2 className="font-heading font-black text-3xl md:text-5xl text-[#1c1b1b] mb-16 text-center">
          Trust Indicators
        </h2>
        <div className="max-w-[1240px] w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {TRUST_INDICATORS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="mb-4">{item.icon}</div>
              <div className="font-heading font-black text-[#1c1b1b] text-2xl lg:text-3xl mb-1">
                {item.value}
              </div>
              <div className="font-body text-gray-400 font-bold text-xs lg:text-sm tracking-widest uppercase">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Enquiry Form Section */}
      <div className="relative py-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
        {/* Background Dynamic Shapes */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#f8f9fa] -z-20" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#8b1010]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#003366]/5 rounded-full blur-3xl -z-10" />

        <h2 className="font-heading font-black text-3xl md:text-5xl text-[#1c1b1b] mb-12 text-center">
          Professional Enquiry
        </h2>

        <div className="max-w-[900px] w-full bg-white/40 backdrop-blur-xl border border-white/60 p-8 md:p-12 rounded-[40px] shadow-2xl">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#f0f2f5] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#8b1010] outline-none transition-all font-body font-medium"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#f0f2f5] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#8b1010] outline-none transition-all font-body font-medium"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-[#f0f2f5] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#8b1010] outline-none transition-all font-body font-medium"
            />
            <input
              type="text"
              placeholder="City/Location"
              className="w-full bg-[#f0f2f5] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#8b1010] outline-none transition-all font-body font-medium"
            />

            <div className="md:col-span-2">
              <button className="w-full bg-gradient-to-r from-[#8b1010] to-[#b71c1c] text-white py-5 rounded-2xl font-heading font-black text-lg shadow-xl hover:shadow-[#8b1010]/30 transition-all active:scale-[0.98]">
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
