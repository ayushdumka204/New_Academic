import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AcademicStatsSticky: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // पूरे सेक्शन की स्क्रॉल प्रोग्रेस ट्रैक करने के लिए
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 6 कार्ड्स की लंबी रील को एकदम परफेक्ट और स्मूथली ऊपर खींचने के लिए ट्रांसफॉर्म कैलकुलेशन
  const yReel = useTransform(scrollYProgress, [0, 1], ["0%", "-83.8%"]);

  // 6 अलग-अलग प्रीमियम हैवी डार्क न्यूट्रल कलर्ड कार्ड्स और कस्टमाइज्ड एकेडमिक कंटेंट डेटा
  const cardConfigs = [
    { id: 1, bgColor: "bg-[#1E293B]", label: "Average Efficiency", value: "38%", desc: "Increase Productivity. Deliver Real Results.", textCol: "text-white", descCol: "text-slate-300", tagCol: "text-slate-400" },
    { id: 2, bgColor: "bg-[#0F172A]", label: "Market Score", value: "73%", desc: "This score forms the benchmark for 2026 collections.", textCol: "text-white", descCol: "text-slate-300", tagCol: "text-slate-400" },
    { id: 3, bgColor: "bg-[#18181B]", label: "Global Scale", value: "12K+", desc: "Verified responses logged across primary Indian nodes.", textCol: "text-white", descCol: "text-zinc-300", tagCol: "text-zinc-400" },
    { id: 4, bgColor: "bg-[#1E293B]", label: "Retention Rate", value: "94%", desc: "Scholars returning for secondary analysis data modeling.", textCol: "text-white", descCol: "text-slate-300", tagCol: "text-slate-400" },
    { id: 5, bgColor: "bg-[#0F172A]", label: "Publication Success", value: "85%", desc: "Studies successfully indexed in top-tier global journals.", textCol: "text-white", descCol: "text-slate-300", tagCol: "text-slate-400" },
    { id: 6, bgColor: "bg-[#18181B]", label: "Global Indexing", value: "98%", desc: "Research paper drafts meeting international quality benchmarks.", textCol: "text-white", descCol: "text-zinc-300", tagCol: "text-zinc-400" }
  ];

  return (
    <div className="w-full bg-white font-sans selection:bg-blue-100">
      
      {/* 6 कार्ड्स के हिसाब से 400vh हाइट दी है ताकि पूरी रील बिना किसी झटके के एकदम नेचुरल और मक्खन जैसी स्क्रॉल हो */}
      <section ref={containerRef} className="relative w-full h-[400vh]">
        
        {/* स्टिकी कंटेनर जो स्क्रीन पर लॉक रहेगा */}
        <div className="sticky top-0 h-screen w-full flex items-center max-w-7xl mx-auto px-6 sm:px-8 overflow-hidden">
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* LEFT COLUMN: Highly compact layout, fully fixed space (1-2 lines of text) */}
            <div className="md:col-span-5 text-left flex flex-col justify-center h-auto max-w-md">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block mb-2">
                Academic Integrity
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                Why Smart Scholars Choose NexGen
              </h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                Built for speed, structured for growth, and engineered to deliver 100% verified research data for top-tier international journals.
              </p>
              
              <div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition text-xs shadow-sm uppercase tracking-wider">
                  Talk to an Advisor <span>→</span>
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Large premium visual 6-card reel block container with sharp corners */}
            <div className="hidden md:block md:col-span-7 h-[550px] w-full rounded-2xl overflow-hidden relative">
              
              {/* मोशन डिब जो छहों कार्ड्स को एक सिंगल रील में सीधे ऊपर स्क्रॉल कराता है */}
              <motion.div style={{ y: yReel }} className="w-full flex flex-col gap-6">
                {cardConfigs.map((card, index) => (
                  <div
                    key={card.id}
                    className={`w-full h-[550px] shrink-0 ${card.bgColor} p-10 flex flex-col justify-between rounded-2xl shadow-lg border border-white/5`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className={`text-xs font-bold tracking-widest uppercase block mb-1 ${card.tagCol}`}>
                          {card.label}
                        </span>
                        <h4 className={`text-6xl font-light tracking-tight ${card.textCol}`}>{card.value}</h4>
                        <p className={`text-sm font-semibold mt-3 max-w-xs ${card.descCol}`}>{card.desc}</p>
                      </div>
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center font-bold text-sm text-slate-400 border border-white/10">
                        0{index + 1}
                      </div>
                    </div>
                    
                    {/* इमेज कंटेनर का अंदर वाला हिस्सा - बिल्कुल साफ़ सफेद (Pure White Interior Layout for high contrast) */}
                    <div className="w-full h-[55%] bg-white rounded-xl flex items-center justify-center text-slate-400 text-xs font-medium border border-slate-200/40 shadow-inner">
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