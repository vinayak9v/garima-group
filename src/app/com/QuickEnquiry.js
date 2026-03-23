"use client"; // <--- Add this line at the very top

import React from 'react';

const QuickEnquiry = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <button 
        className="bg-[#f38100] hover:bg-[#d67100] text-white font-bold py-4 px-3 rounded-l-xl shadow-lg transition-all duration-300 flex items-center justify-center"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        // Now this onClick will work!
        onClick={() => alert("Enquiry Form Opening...")}
      >
        <span className="rotate-180 uppercase tracking-widest text-sm">
          Quick Enquiry
        </span>
      </button>
    </div>
  );
};

export default QuickEnquiry;