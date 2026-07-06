import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AcademicStepsSwiftHorizontal: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  // Updated steps data exactly matching your provided content mapping
  const stepsData = [
    {
      id: 1,
      step: "STEP 01",
      title: "Research Planning",
      desc: "We align with your core research objectives, defining the target demographics, sampling methods, and exact field parameters before execution starts."
    },
    {
      id: 2,
      step: "STEP 02",
      title: "Questionnaire design",
      desc: "Our experts structure and design a reliable questionnaire with precise metrics, items, and rating scales required to capture data effectively for your research variables."
    },
    {
      id: 3,
      step: "STEP 03",
      title: "Digital Survey Link Created",
      desc: "We transform the approved questionnaire into an optimized digital survey platform, creating responsive and clean online links to start tracking live responses."
    },
    {
      id: 4,
      step: "STEP 04",
      title: "Pilot Survey Conduct",
      desc: "Before full deployment, we execute a preliminary small-scale survey to check data validity, test scale reliability, and remove any anomalies from the questions."
    },
    {
      id: 5,
      step: "STEP 05",
      title: "Final Data Collection",
      desc: "After the pilot run passes quality checks, we roll out full-scale data collection through our expansive ground networks to deliver accurate, 100% verified research data."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const totalScrollableWidth = containerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Strict border lock for Step 5 right corner alignment
        setScrollRange(totalScrollableWidth - viewportWidth);
      }
    };

    const timer = setTimeout(handleResize, 100);
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // start offset allows smooth transition adjusting for the custom navbar space
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.10", "end end"]
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <div className="w-full bg-white font-sans selection:bg-zinc-100 relative">
      
      {/* 450vh total travel track layout */}
      <section ref={targetRef} className="relative w-full h-[450vh]">
        
        {/* Nav-bar adjustment block matching image positions perfectly */}
        <div className="sticky top-[72px] h-[calc(100vh-72px)] w-full flex flex-col justify-start bg-white overflow-hidden box-border pt-10 md:pt-[5vh]">
          
          {/* Main content grid alignment wrapper */}
          <div className="w-full max-w-7xl mx-auto flex flex-col items-start relative gap-8 lg:gap-10">
            
            {/* TOP AREA: Header Section mapping provided content structures */}
            <div className="w-full px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 shrink-0 text-left">
              <div className="max-w-3xl">
                <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase block mb-2 select-none">
                  Our Methodology
                </span>
                <h3 className="text-4xl sm:text-5xl md:text-[52px] font-medium text-slate-900 tracking-tight leading-[1.15]">
                  How We Execute Your <br /> Research Project
                </h3>
              </div>
              
              <div className="shrink-0 text-left sm:text-right mb-1">
                <a 
                  href="/contact"
                  className="bg-[#9EFF9E] hover:bg-[#8ae88a] text-black font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-3 transition text-sm tracking-tight shadow-sm"
                >
                  <span>Start Your Project</span>
                  <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* BOTTOM AREA: Horizontal Track Slider rendering your premium large compact cards layout */}
            <div className="w-full overflow-visible flex items-center shrink-0">
              <motion.div 
                ref={containerRef}
                style={{ x: xTransform }} 
                className="flex gap-3 px-6 sm:px-12 lg:px-16 items-center will-change-transform"
              >
                {stepsData.map((item) => (
                  <div
                    key={item.id}
                    className="w-[690px] sm:w-[790px] h-[370px] shrink-0 bg-[#E3EBE8] rounded-2xl border border-slate-200/10 shadow-sm grid grid-cols-12 overflow-hidden items-center"
                  >
                    
                    {/* LEFT PANEL: Clean Full-height visual layout block */}
                    <div className="col-span-6 h-full bg-zinc-900 flex items-center justify-center text-zinc-400 text-xs font-medium overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-90 select-none flex items-center justify-center font-semibold text-xs tracking-wider uppercase">
                        [ {item.step} Image / Visual ]
                      </div>
                    </div>

                    {/* RIGHT PANEL: Text Details Container featuring tight typography gaps */}
                    <div className="col-span-6 flex flex-col justify-start h-full p-8 text-left">
                      <span className="text-[11px] font-bold tracking-widest text-zinc-500 uppercase block mb-4 select-none">
                        {item.step}
                      </span>
                      
                      <h4 className="text-2xl md:text-[26px] font-medium tracking-tight text-slate-900 leading-tight mb-3">
                        {item.title}
                      </h4>
                      
                      <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-sm">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicStepsSwiftHorizontal;