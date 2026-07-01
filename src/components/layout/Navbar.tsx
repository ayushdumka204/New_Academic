import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
      {/* Left: Logo Area (Image Replaced) */}
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 cursor-pointer">
            {/* Branding Logo Image */}
            <img 
              src="/images/logo.png" 
              alt="NexGen Logo" 
              className="h-9 w-auto object-contain shrink-0" 
              onError={(e) => {
                // अगर इमेज लोड न हो तो बैकअप में ब्रांड नेम दिखेगा
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          {/* Center: Dynamic Navigation Links (Thoda Bada Text Size) */}
          <nav className="hidden lg:flex items-center gap-8 text-[16px] font-semibold text-[#001C41]">
            <a href="#home" className="hover:text-[#6320EE] transition duration-200">Home</a>
            <a href="#services" className="hover:text-[#6320EE] transition duration-200">Services</a>
            <a href="#research-areas" className="hover:text-[#6320EE] transition duration-200">Research Areas</a>
            <a href="#resources" className="hover:text-[#6320EE] transition duration-200">Resources</a>
            <a href="#company" className="hover:text-[#6320EE] transition duration-200">Company</a>
            <a href="#pricing" className="hover:text-[#6320EE] transition duration-200">Pricing</a>
          </nav>
        </div>

        {/* Right: Icons, Language Pill & Contact Button */}
        <div className="flex items-center gap-5">
          
          {/* Search Icon */}
          <button className="text-[#001C41] hover:text-[#6320EE] transition p-1.5" aria-label="Search">
            <svg className="w-[22px] h-[22px] stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* User/Login Icon with Outer Circle */}
          <button className="text-[#001C41] hover:text-[#6320EE] hover:border-[#6320EE] transition p-2 border-2 border-[#001C41] rounded-full flex items-center justify-center w-9 h-9" aria-label="Account">
            <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          {/* Language Pill (EN ⬇) */}
          <div className="flex items-center gap-1.5 bg-[#E5E8ED] hover:bg-[#D9DDE3] transition text-[#001C41] text-[14px] font-bold px-4 py-2 rounded-full cursor-pointer select-none">
            <span>EN</span>
            <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Contact Us Button (Left-to-Right Purple Fill Animation) */}
          <a 
            href="#contact" 
            className="relative inline-block border-2 border-[#6320EE] text-[#6320EE] font-bold text-[15px] px-6 py-2 rounded-full tracking-wide transition-all duration-300 ease-out overflow-hidden bg-gradient-to-r from-[#6320EE] from-50% to-transparent to-50% bg-[length:200%_100%] bg-[100%_0] hover:bg-[0_0] hover:text-white"
          >
            Contact us
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;