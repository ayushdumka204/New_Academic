import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Academic Research & Data Collection से संबंधित FAQ डेटा
const faqData = [
  {
    id: 1,
    question: "How long does it take to deploy a full-scale field data collection network?",
    answer: "Typically, digital mapping and parameters are aligned within 48 hours. Full ground network deployment and live tracker link generation take 3 to 5 business days, depending on the target geographic parameters."
  },
  {
    id: 2,
    question: "What protocols do you use to ensure academic data reliability and validity?",
    answer: "We employ double-pass verification on all ground data. Before full deployment, a pilot survey run is executed to calculate scale reliability coefficients, ensuring 100% data compliance and zero structural anomalies."
  },
  {
    id: 3,
    question: "Do you provide real-time metrics tracking for live field research?",
    answer: "Yes. Once the optimized digital survey links are active, live field data is streamed directly into an analytical dashboard featuring custom metrics and automated rating scales for ongoing tracking."
  },
  {
    id: 4,
    question: "Are there any hidden infrastructure or cloud storage fees in your packages?",
    answer: "No, our pricing model is fully transparent. All costs associated with data cleaning, digital link creation, verified ground networks, and database hosting are bundled into the upfront quote."
  }
];

const AcademicFAQSection: React.FC = () => {
  // ट्रैक करने के लिए कि कौन सा सवाल खुला हुआ है (null मतलब सब बंद हैं)
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans flex flex-col justify-start items-center py-20 px-6 sm:px-12 select-none">
      
      {/* HEADER AREA */}
      <div className="text-center mb-16 max-w-2xl">
        <h2 className="text-4xl sm:text-5xl md:text-[56px] font-medium text-slate-900 tracking-tight leading-tight">
          Frequently asked <br /> questions
        </h2>
      </div>

      {/* FAQ ACCORDION LIST */}
      <div className="w-full max-w-4xl flex flex-col gap-4">
        {faqData.map((faq) => {
          const isOpen = activeId === faq.id;

          return (
            <div
              key={faq.id}
              className="w-full bg-[#EBF1EF] rounded-2xl overflow-hidden border border-slate-200/5 transition-all duration-300"
            >
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer focus:outline-none group"
              >
                <span className="text-base sm:text-lg md:text-[19px] font-medium text-slate-900 tracking-tight pr-6">
                  {faq.question}
                </span>
                
                {/* Plus / Minus Icon Container */}
                <div className="shrink-0 relative w-7 h-7 flex items-center justify-center bg-black rounded-full text-white">
                  {/* Horizontal Line */}
                  <div className="w-3.5 h-[2px] bg-white rounded-full" />
                  {/* Vertical Line (ओपन होने पर रोटेट होकर गायब हो जाएगी) */}
                  <motion.div 
                    animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="absolute w-[2px] h-3.5 bg-white rounded-full"
                  />
                </div>
              </button>

              {/* Animated Answer Wrapper */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl font-normal">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default AcademicFAQSection;