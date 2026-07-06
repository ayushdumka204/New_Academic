import React from 'react';

const ResearchHero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[500px] flex flex-col justify-center items-center px-4 overflow-hidden select-none">
      
      {/* Background Image Layer with Fallback Soft Gradient */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/20 via-transparent to-white/10 mix-blend-overlay" />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center justify-center space-y-8">
        
        {/* Headline - Updated with your real data collection and academic workflow focus */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-3xl drop-shadow-sm">
          We help you collect verified data and accelerate your academic research
        </h1>

        {/* CTA Button */}
        <button 
          type="button"
          onClick={() => console.log('Navigating to portal...')}
          className="group relative inline-flex items-center justify-center bg-[#E31E24] hover:bg-[#C21419] text-white font-semibold text-sm md:text-base tracking-wide uppercase px-8 py-3.5 rounded shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200 ease-out cursor-pointer"
        >
          <span>Start Your Field Project</span>
          <svg 
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200 ease-out" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>

      {/* Optional Side Fixed Button (Like "Request Demo" in image) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden md:block">
        <button 
          type="button"
          className="bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold uppercase tracking-widest px-4 py-3 origin-bottom-right transform rotate-90 translate-x-[42px] -translate-y-1/2 transition-colors rounded-t-md shadow-md cursor-pointer"
        >
          Get Free Quote
        </button>
      </div>

    </section>
  );
};

export default ResearchHero;