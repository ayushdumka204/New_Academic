import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  { 
    id: 1, 
    name: "Alexander Vance", 
    role: "FOUNDER & CEO", 
    size: "w-[150px] h-[150px] md:w-[210px] md:h-[210px]", 
    position: "mt-0", 
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500" 
  },
  { 
    id: 2, 
    name: "Marcus Brody", 
    role: "LEAD DEVELOPER", 
    size: "w-[100px] h-[100px] md:w-[130px] md:h-[130px]", 
    position: "mt-20 md:mt-24", 
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500" 
  },
  { 
    id: 3, 
    name: "Ahmad George", 
    role: "DESIGNER", 
    size: "w-[130px] h-[130px] md:w-[170px] md:h-[170px]", 
    position: "mt-32 md:mt-40", 
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500" 
  },
  { 
    id: 4, 
    name: "Elena Rostova", 
    role: "PRODUCT MANAGER", 
    size: "w-[100px] h-[100px] md:w-[130px] md:h-[130px]", 
    position: "mt-4 md:mt-8", 
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500" 
  },
  { 
    id: 5, 
    name: "Devon Lane", 
    role: "MARKETING HEAD", 
    size: "w-[160px] h-[160px] md:w-[220px] md:h-[220px]", 
    position: "mt-24 md:mt-32", 
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500" 
  },
  { 
    id: 6, 
    name: "Liam Sterling", 
    role: "QA LEAD", 
    size: "w-[90px] h-[90px] md:w-[120px] md:h-[120px]", 
    position: "mt-12 md:mt-16", 
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=500" 
  },
  { 
    id: 7, 
    name: "Sarah Jenkins", 
    role: "HR MANAGER", 
    size: "w-[160px] h-[160px] md:w-[220px] md:h-[220px]", 
    position: "mt-8 md:mt-12", 
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500" 
  },
];

const InteractiveTeamSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    /* FIX: py-20 को हटाकर pt-20 और pb-4 किया गया है ताकि नीचे का स्पेस बिल्कुल कम हो जाए */
    <div className="w-full min-h-fit bg-white font-sans flex flex-col justify-start items-center pt-20 pb-4 overflow-hidden select-none">
      
      {/* HEADER AREA */}
      <div className="text-center mb-12 flex flex-col items-center z-10">
        <span className="text-xs font-bold tracking-widest text-zinc-400 bg-zinc-100 px-3 py-1 rounded-full uppercase block mb-4">
          Team
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-[56px] font-medium text-slate-950 tracking-tight leading-tight">
          We have Huge Expert Team
        </h2>
      </div>

      {/* HORIZONTAL ZIG-ZAG TRACK */}
      {/* FIX: min-h-[500px] को कम करके min-h-[380px] किया गया है ताकि अनचाहा बॉटम गैप खत्म हो जाए */}
      <div className="w-full max-w-7xl mx-auto px-[1cm] flex flex-row items-start justify-center gap-x-3 sm:gap-x-5 md:gap-x-8 relative min-h-[380px]">
        {teamMembers.map((member) => {
          const isHovered = hoveredId === member.id;
          const isAnythingHovered = hoveredId !== null;
          const isDimmed = isAnythingHovered && !isHovered;

          return (
            <div
              key={member.id}
              className={`relative flex flex-col items-center transition-all duration-500 ease-out ${member.position}`}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Circle Container */}
              <motion.div
                animate={{
                  scale: isHovered ? 1.15 : isDimmed ? 0.88 : 1,
                  filter: isDimmed ? 'blur(8px) grayscale(15%)' : 'blur(0px) grayscale(0%)',
                  opacity: isDimmed ? 0.35 : 1,
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className={`${member.size} rounded-full overflow-hidden shadow-sm cursor-pointer border border-zinc-200/40 will-change-transform z-10`}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </motion.div>

              {/* Name & Designation Card */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: -4, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-[#E2D2FF] text-slate-950 px-5 py-3.5 rounded-2xl shadow-xl min-w-[210px] text-center border border-purple-200/40 z-30 pointer-events-none"
                  >
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#E2D2FF] rotate-45" />
                    
                    <h4 className="text-base sm:text-lg font-semibold tracking-tight whitespace-nowrap leading-tight">
                      {member.name}
                    </h4>
                    <p className="text-[10px] font-bold tracking-widest text-purple-800 uppercase mt-1">
                      {member.role}
                    </p>
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

export default InteractiveTeamSection;