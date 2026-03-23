"use client";

const TIERS = [
  {
    type: "Preschool Franchise",
    investment: "₹15-20 Lakhs",
    area: "2000-3000 sq. ft",
    roi: "30-40%",
    badge: "Premium",
    isRecommended: false,
  },
  {
    type: "School Franchise",
    investment: "₹1-5 Crore",
    area: "1-5 Acres",
    roi: "20-30%",
    badge: "Premium",
    isRecommended: true,
  },
];

export default function InvestmentTiers() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#fdfdfd] flex flex-col items-center">
      <h2 className="font-heading font-black text-3xl md:text-5xl text-[#1c1b1b] mb-20 text-center">
        Investment Tiers
      </h2>

      <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {TIERS.map((tier, idx) => (
          <div
            key={idx}
            className="relative bg-white border border-gray-100 p-10 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.04)] overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Top Badge Overlay */}
            <div className="flex justify-between items-start mb-12">
              <div className="bg-[#fcf3d9] text-[#d4af37] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                {tier.badge}
              </div>
              {/* Ornate Star Badge */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8b1c1c] p-0.5 shadow-lg">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#d4af37]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="font-heading font-bold text-2xl text-[#1c1b1b] mb-2">
              {tier.type}
            </h3>
            <div className="text-[#8b1010] font-heading font-black text-4xl md:text-5xl mb-8">
              {tier.investment}
            </div>

            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-3 text-gray-500 font-medium">
                <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                Area: {tier.area}
              </div>
              <div className="flex items-center gap-3 text-gray-500 font-medium">
                <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                ROI: {tier.roi}
              </div>
            </div>

            <div className="inline-block bg-[#8b1010] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
              Limited Slots Available
            </div>

            {/* Hover Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  );
}
