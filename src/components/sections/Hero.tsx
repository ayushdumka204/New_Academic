import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  // NexGen Academic Research के हिसाब से बिल्कुल सटीक एनिमेटेड वर्ड्स
  const words = ["expert field surveys", "precision data collection", "advanced data analysis", "academic excellence"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        // अक्षर टाइप करना
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        
        if (currentText === fullWord) {
          // पूरा शब्द लिखने के बाद स्क्रीन पर होल्ड रखना (2 सेकंड)
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // अक्षर बैकस्पेस करना/मिटाना
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="w-full bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
      {/* एनिमेटेड हेडिंग (Typing Effect - Fully matching words, NO STYLE CHANGE) */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 tracking-tight min-h-[60px] flex flex-wrap justify-center items-center gap-2">
        <span>Your Partner for</span>
        <span className="relative bg-green-500 text-white px-3 py-1 rounded-md inline-block font-medium">
          {currentText}
          {/* ब्लिंकिंग कर्सर लाइन */}
          <span className="absolute right-1 top-1/2 -translate-y-1/2 w-[2px] h-[70%] bg-white animate-pulse"></span>
        </span>
      </h1>

        {/* सब-डिस्क्रिप्शन - Scaled up font sizes to look more prominent and premium */}
        <p className="mt-8 max-w-5xl text-gray-900 text-lg md:text-[22px] leading-relaxed md:leading-[1.45] mx-auto text-center font-normal tracking-tight">
          <strong className="text-gray-900 font-semibold">NexGen Academic Research Platform</strong> empowers scholars and researchers with end-to-end support in 
          <span className="text-cyan-500 font-semibold"> Data collection</span>, 
          <span className="text-purple-500 font-semibold"> Precise Field Surveys</span>, and advanced 
          <span className="text-orange-500 font-semibold"> Statistical Tools</span> to ensure your study is grounded in high-quality, verified insights. 
        </p>

        {/* बटन */}
        <button className="mt-10 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition shadow-md hover:shadow-lg flex items-center gap-2 text-base">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
          Book a Free Consultation
        </button>

        {/* बड़ा वीडियो कंटेनर (NO STYLE CHANGE) */}
        <div className="mt-16 w-full max-w-6xl rounded-2xl p-2 sm:p-3 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 shadow-2xl shadow-purple-200/50">
          <div className="w-full rounded-xl overflow-hidden bg-gray-50 aspect-video md:aspect-[21/9] border border-white/20">
            <video 
              className="w-full h-full object-cover" 
              autoPlay 
              loop 
              muted 
              playsInline
              src="/Videos/Hero.mp4"
            />
          </div>
        </div>

        {/* ---- AFTER VIDEO SECTION ---- */}
        
        {/* 2-कॉलम वाइड और स्लीक फीचर्स */}
        <div className="mt-8 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Feature 1: Data Collection */}
          <div className="flex items-center gap-4 p-5 rounded-xl border border-slate-300 shadow-sm bg-white hover:border-slate-400 hover:shadow-md transition text-left h-auto md:h-24">
            <div className="p-2 text-purple-600 bg-purple-50 rounded-lg shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-slate-900 text-[16px]">Data Collection</h3>
              <p className="text-[14px] text-slate-500 mt-0.5 font-medium">Qualitative Data collection and Quantitative Data collection.</p>
            </div>
          </div>

          {/* Feature 2: Data Analysis */}
          <div className="flex items-center gap-4 p-5 rounded-xl border border-slate-300 shadow-sm bg-white hover:border-slate-400 hover:shadow-md transition text-left h-auto md:h-24">
            <div className="p-2 text-blue-600 bg-blue-50 rounded-lg shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-slate-900 text-[16px]">Data Analysis</h3>
              <p className="text-[14px] text-slate-500 mt-0.5 font-medium">Using advanced tools like SPSS, AMOS, and STATA.</p>
            </div>
          </div>

        </div>

{/* मुख्य कॉल-टू-एक्शन हेडिंग - Increased font size and crisp, short text with matching icon */}
<h2 className="mt-8 text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 tracking-tight flex items-center justify-center gap-4 leading-tight">
  {/* Light Blue Circle Wrapper with Green Upward Arrow */}
  <span className="w-10 h-10 md:w-11 md:h-11 bg-[#F0F7FF] rounded-full flex items-center justify-center shrink-0 shadow-sm">
    <svg 
      className="w-5 h-5 md:w-6 md:h-6 text-[#00C853]" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  </span>
  
  <span>Empowering researchers with international standards</span>
</h2>

      </div>
    </section>
  );
};

export default Hero;