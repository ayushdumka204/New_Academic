import React from 'react';

const BrandCarousel: React.FC = () => {
  // 6 Colorful Local Images की लिस्ट (Filenames updated)
  const logos = [
    { id: 1, name: "Client 1", url: "/images/images.png" }, 
    { id: 2, name: "Client 2", url: "/images/images1.png" },
    { id: 3, name: "Client 3", url: "/images/images2.png" },
    { id: 4, name: "Client 4", url: "/images/images3.png" },
    { id: 5, name: "Client 5", url: "/images/images4.png" },
    { id: 6, name: "Client 6", url: "/images/images.jpg" },
  ];

  return (
    <div className="w-full bg-white pt-4 pb-12 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Heading Text */}
      <p className="text-center text-[20px] font-bold tracking-wide text-slate-800 mb-12">
        Trusted by thousands of organizations worldwide
      </p>

      {/* Infinite scrolling container (Faded edges) */}
      <div className="relative w-full max-w-7xl overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-white after:to-transparent">
        
        {/* Inline CSS Animation Track - No Change */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-custom-marquee {
            display: flex;
            width: max-content; /* ज़बरदस्ती सिकुड़ने से बचाने के लिए */
            animation: marquee 35s linear infinite;
          }
          .animate-custom-marquee:hover {
            animation-play-state: paused;
          }
        `}} />

        {/* Main Animated Track - Spacing reduced with gap-12 */}
        <div className="animate-custom-marquee items-center gap-12 py-6">
          
          {/* First Set (6 Badi aur Colorful Images) - Spacing reduced to gap-12 & pr-12 */}
          <div className="flex items-center gap-12 shrink-0 pr-12">
            {logos.map((logo) => (
              <div 
                key={`set1-${logo.id}`} 
                className="h-32 w-64 flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-105 shrink-0"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  // यहाँ साइज बढ़ाकर h-28 और max-w-[260px] कर दिया है
                  className="h-28 max-w-[260px] object-contain shrink-0" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Second Duplicate Set (Infinite loop banaye rakhne ke liye) - Spacing reduced to gap-12 & pr-12 */}
          <div className="flex items-center gap-6 shrink-0 pr-6">
            {logos.map((logo) => (
              <div 
                key={`set2-${logo.id}`} 
                className="h-32 w-64 flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-105 shrink-0"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  // यहाँ भी साइज बढ़ाकर h-28 और max-w-[260px] कर दिया है
                  className="h-28 max-w-[260px] object-contain shrink-0" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;