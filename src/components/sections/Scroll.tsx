import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AcademicStatsSticky: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // पूरे सेक्शन की स्क्रॉल प्रोग्रेस ट्रैक करने के लिए
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // तीनों इमेजेस की रील को स्क्रॉल स्पीड के हिसाब से ऊपर खींचने के लिए (0% से -68% तक की स्मूथ रील)
  const yReel = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  const cardConfigs = [
    { id: 1, bgColor: "bg-[#EAF2F0]", label: "Average", value: "38%", desc: "Increase Productivity. Deliver Real Results.", textCol: "text-slate-900" },
    { id: 2, bgColor: "bg-[#EAE4FC]", label: "Market Score", value: "73%", desc: "This score forms the benchmark for 2026 collections.", textCol: "text-slate-900" },
    { id: 3, bgColor: "bg-[#1E2E2A]", label: "Global Scale", value: "12K+", desc: "Verified responses logged across primary Indian nodes.", textCol: "text-white" }
  ];

  return (
    <div className="w-full bg-white font-sans selection:bg-[#9EFF9E]">
      
      {/* 250vh हाइट ताकि सिंगल-वे स्क्रॉल रील एकदम मक्खन और नेचुरल फील हो */}
      <section ref={containerRef} className="relative w-full h-[250vh]">
        
        {/* स्टिकी कंटेनर जो स्क्रीन पर लॉक रहेगा */}
        <div className="sticky top-0 h-screen w-full flex items-center max-w-7xl mx-auto px-6 sm:px-8 overflow-hidden">
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* LEFT COLUMN: Extremely compact layout, taking minimal vertical space (1-2 lines of text) */}
            <div className="md:col-span-5 text-left flex flex-col justify-center h-auto max-w-md">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-2">
                Academic Integrity
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                Why Smart Scholars Choose NexGen
              </h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                Built for speed, structured for growth, and engineered to deliver 100% verified research data for top-tier international journals.
              </p>
              
              <div>
                <button className="bg-[#9EFF9E] hover:bg-[#8ae88a] text-black font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition text-xs shadow-sm uppercase tracking-wider">
                  Talk to an Advisor <span>→</span>
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Large premium visual reel block container */}
            <div className="hidden md:block md:col-span-7 h-[550px] w-full rounded-[32px] overflow-hidden relative">
              
              {/* मोशन डिब जो तीनों कार्ड्स को एक के नीचे एक रखकर सीधे ऊपर स्क्रॉल कराता है */}
              <motion.div style={{ y: yReel }} className="w-full flex flex-col gap-6">
                {cardConfigs.map((card, index) => (
                  <div
                    key={card.id}
                    className={`w-full h-[550px] shrink-0 ${card.bgColor} p-10 flex flex-col justify-between rounded-[32px] shadow-md border border-slate-100`}
                  >
                    <div className="flex justify-between items-start">
                      <div className={card.textCol}>
                        <span className="text-xs font-bold tracking-widest uppercase opacity-60 block mb-1">
                          {card.label}
                        </span>
                        <h4 className="text-6xl font-light tracking-tight">{card.value}</h4>
                        <p className="text-sm font-semibold mt-3 opacity-80 max-w-xs">{card.desc}</p>
                      </div>
                      <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center font-bold text-sm text-slate-500">
                        0{index + 1}
                      </div>
                    </div>
                    
                    {/* इमेज कंटेनर का अंदर वाला हिस्सा - बिल्कुल साफ़ सफेद (Pure White) */}
                    <div className="w-full h-[55%] bg-white rounded-2xl flex items-center justify-center text-slate-400 text-xs font-medium border border-slate-200/50 shadow-inner">
                      [ Place Graphic Visualisation Box {card.id} Here ]
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

export default AcademicStatsSticky;