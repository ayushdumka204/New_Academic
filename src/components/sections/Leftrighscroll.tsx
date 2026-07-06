import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AcademicStepsSwiftHorizontal: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

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
      if (window.innerWidth >= 768) {
        // Total width of all 5 cards + gaps between them
        const totalCardsWidth = (5 * 740) + (4 * 24);
        // Viewport exact width allocated for the 60% slot
        const viewportWidth = Math.min(window.innerWidth * 0.6, 768);
        
        // Calculation ensures Step 5 fully enters the frame with an added padding buffer
        setScrollRange(totalCardsWidth - viewportWidth + 80);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // STRICT ENDLOCK: Travel fully to the end of the calculated pixel range
  const xTransform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <div className="w-full bg-[#090909] font-sans selection:bg-zinc-800 relative">
      
      {/* 650vh track provides enough scrolling timeline space for the full transition */}
      <section ref={targetRef} className="relative w-full h-[650vh]">
        
        {/* Sticky viewport locking screen */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-[#090909]">
          
          {/* Strict 40% (Left Static Box) and 60% (Right Cards Box) Split */}
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 relative">
            
            {/* LEFT SIDE (40%): Solid Backdrop Mask Area */}
            <div className="w-full md:w-[40%] text-left flex flex-col justify-center relative z-20 bg-[#090909] py-6 shrink-0">
              <span className="text-xs font-bold tracking-widest text-[#A3E635] uppercase block mb-3">
                Our Methodology
              </span>
              <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
                How We Execute Your Research Project
              </h3>
              <div className="mt-2">
                <a 
                  href="/contact"
                  className="bg-white hover:bg-zinc-200 text-black font-semibold px-7 py-4 rounded-full inline-flex items-center gap-2 transition text-xs uppercase tracking-wider"
                >
                  Start Your Project <span>→</span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE VIEWPORT (60%): Clips everything safely as soon as it translates left */}
            <div className="w-full md:w-[60%] overflow-hidden relative z-10 py-4 shrink-0">
              
              <motion.div 
                style={{ x: xTransform }} 
                className="flex gap-6 items-center will-change-transform pl-1"
              >
                {stepsData.map((item, index) => (
                  <div
                    key={item.id}
                    className="w-[640px] sm:w-[760px] h-[330px] shrink-0 bg-[#111111] p-6 rounded-2xl border border-zinc-800/60 shadow-xl grid grid-cols-12 gap-6 items-center"
                  >
                    
                    {/* LEFT HALF OF CARD: Pure White Image Graphic Container */}
                    <div className="col-span-6 h-full bg-white rounded-xl flex items-center justify-center text-zinc-500 text-xs font-medium border border-zinc-200/20 overflow-hidden shadow-inner">
                      <div className="p-4 text-center font-bold tracking-tight text-sm">
                        [ {item.step} Image / Visual ]
                      </div>
                    </div>

                    {/* RIGHT HALF OF CARD: Content Layout & Indicators */}
                    <div className="col-span-6 flex flex-col justify-between h-full py-2 text-left">
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs font-bold tracking-widest text-[#A3E635] uppercase block">
                            {item.step}
                          </span>
                          <div className="text-2xl font-bold text-zinc-800 select-none tracking-tighter leading-none">
                            0{index + 1}
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-bold tracking-tight text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed font-normal line-clamp-4">
                          {item.desc}
                        </p>
                      </div>

                      {/* Lower Inline Action */}
                      <div className="mt-2">
                        <a 
                          href="/services" 
                          className="text-xs font-bold text-[#A3E635] hover:text-white inline-flex items-center gap-1 transition-colors"
                        >
                          Learn more <span className="text-sm">→</span>
                        </a>
                      </div>
                    </div>

                  </div>
                ))}

                {/* 1cm Black Border Space: Step 5 के ठीक बाद ये स्पेस आएगा ताकि वो फ्रेम में पूरी तरह रुक सके */}
                <div className="w-[12px] h-[340px] shrink-0 bg-transparent block" />
              </motion.div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicStepsSwiftHorizontal;