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
        
        {/* Main Section Heading - Premium & Light Weight */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-normal text-slate-900 tracking-tight leading-[1.25] max-w-5xl text-left pl-0">
          NexGen is a modern academic research and growth partner built for researchers who value <span className="text-slate-400">speed, clarity, and compliance.</span>
        </h2>

        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 items-start">
          
          {/* Card 1: Happy Clients */}
          <div className="bg-[#FFD1D4] p-7 rounded-2xl h-36 flex flex-col justify-between text-left">
            <h3 className="text-5xl md:text-6xl font-normal text-slate-800 tracking-tighter">1000+</h3>
            <p className="text-xs font-medium text-slate-800 tracking-wide uppercase">Happy Clients</p>
          </div>
          
          {/* Card 2: Projects Completed */}
          <div className="bg-[#E2ECE9] p-7 rounded-2xl h-36 flex flex-col justify-between text-left">
            <h3 className="text-5xl md:text-6xl font-normal text-slate-800 tracking-tighter">5000+</h3>
            <p className="text-xs font-medium text-slate-800 tracking-wide uppercase">Projects Completed</p>
          </div>
          
          {/* Card 3: Main Advisor Card (Extends downwards with a premium pill button) */}
          <div className="bg-[#E1CCFF] p-7 rounded-2xl h-56 lg:h-[15.5rem] flex flex-col justify-between text-left shadow-xl shadow-purple-100/50 relative z-10 border border-purple-200/10">
            <div>
              <h3 className="text-5xl md:text-6xl font-normal text-slate-800 tracking-tighter">99%</h3>
              <p className="text-xs font-medium text-slate-800 tracking-wide uppercase mt-1">Client Satisfaction Rate</p>
            </div>
            
            {/* Talk to an Advisor Premium Rounded Button */}
            <button className="w-full bg-black hover:bg-slate-900 text-white py-3.5 px-5 rounded-full flex items-center justify-between font-semibold text-[11px] tracking-wide transition-all group mt-3">
              <span>Talk to an Advisor</span>
              <span className="w-6 h-6 bg-[#9EFF9E] group-hover:bg-[#8ae88a] rounded-full flex items-center justify-center text-black font-bold text-sm transition-colors">
                →
              </span>
            </button>
          </div>

          {/* Card 4: Data Quality */}
          <div className="bg-[#FFEAD1] p-7 rounded-2xl h-36 flex flex-col justify-between text-left">
            <h3 className="text-5xl md:text-6xl font-normal text-slate-800 tracking-tighter">96%</h3>
            <p className="text-xs font-medium text-slate-800 tracking-wide uppercase">Data Quality</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AcademicStatsSection;