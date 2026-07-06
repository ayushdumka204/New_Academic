import React from 'react';

const AcademicStatsSection: React.FC = () => {
  return (
    <div className="w-full bg-white font-sans py-20">
      {/* max-w-7xl with strict padding alignment for perfect left-edge start */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Us Tag - Left aligned right above the heading */}
        <span className="bg-slate-100 text-slate-800 text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full uppercase inline-block mb-4">
          About Us
        </span>
        
        {/* Main Section Heading - Premium Dark Slate and Bold */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.25] max-w-5xl text-left pl-0">
          NexGen is a modern academic research and growth partner built for researchers who value <span className="text-slate-400">speed, clarity, and compliance.</span>
        </h2>

        {/* 4 Cards Grid Layout - Completely flat and crisp layout with zero blur effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 items-start">
          
          {/* Card 1: Happy Clients */}
          <div className="bg-[#fcc5c9] p-6 rounded-2xl h-28 flex flex-col justify-between text-left">
            <h3 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tighter">1000+</h3>
            <p className="text-xs font-semibold text-slate-800 tracking-wide uppercase">Happy Clients</p>
          </div>
          
          {/* Card 2: Projects Completed */}
          <div className="bg-[#E2ECE9] p-6 rounded-2xl h-28 flex flex-col justify-between text-left">
            <h3 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tighter">5000+</h3>
            <p className="text-xs font-semibold text-slate-800 tracking-wide uppercase">Projects Completed</p>
          </div>
          
          {/* Card 3: Main Advisor Card (Converted Button to fully functioning HTML anchor tag) */}
          <div className="bg-[#E1CCFF] p-8 rounded-2xl h-60 lg:h-[16.5rem] flex flex-col justify-between text-left relative z-10 border border-purple-300/40">
            <div>
              <h3 className="text-5xl md:text-6xl font-medium text-slate-900 tracking-tighter">99%</h3>
              <p className="text-xs font-semibold text-slate-800 tracking-wide uppercase mt-1">Client Satisfaction Rate</p>
            </div>
            
            {/* Talk to an Advisor - Converted to <a> with /contact href and bigger 15px font (No color change on hover) */}
            <a 
              href="/contact" 
              className="w-full bg-black text-white py-3.5 px-5 rounded-full flex items-center justify-between font-semibold text-[15px] tracking-wide transition-all duration-300 ease-in-out group mt-4 active:scale-[0.98] select-none text-center cursor-pointer"
            >
              {/* Text Slider Container - Perfectly sized for 15px text layer flip */}
              <div className="relative h-6 overflow-hidden flex flex-col text-left">
                {/* पहला टेक्स्ट (Default View) */}
                <span className="inline-block transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full">
                  Talk to an Advisor
                </span>
                {/* दूसरा टेक्स्ट (Hover View) */}
                <span className="absolute inset-x-0 top-0 inline-block transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                  Let's Connect Now
                </span>
              </div>

              {/* राइट साइड का एरो सर्कल (जो हल्का सा राइट साइड स्लाइड होगा) */}
              <span className="w-6 h-6 bg-[#9EFF9E] group-hover:bg-[#8ae88a] rounded-full flex items-center justify-center text-black font-bold text-sm transition-all duration-300 ease-in-out transform group-hover:translate-x-1 shrink-0">
                →
              </span>
            </a>
          </div>

          {/* Card 4: Data Quality */}
          <div className="bg-[#FFEAD1] p-6 rounded-2xl h-28 flex flex-col justify-between text-left">
            <h3 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tighter">96%</h3>
            <p className="text-xs font-semibold text-slate-800 tracking-wide uppercase">Data Quality</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AcademicStatsSection;