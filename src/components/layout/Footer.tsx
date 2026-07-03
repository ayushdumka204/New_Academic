import React from 'react';

const Footer: React.FC = () => {
  // सोशल मीडिया लोकल इमेजेस की लिस्ट (Aapke saved filenames ke hisab se)
  const socialIcons = [
    { id: 1, name: "facebook", url: "/images/facebook.png" },
    { id: 2, name: "instagram", url: "/images/instagram.png" },
    { id: 3, name: "linkedin", url: "/images/linkedin.png" },
    { id: 4, name: "twitter", url: "/images/twitter.png" },
    { id: 5, name: "Youtube", url: "/images/Youtube.png" },
  ];

  return (
    <footer className="w-full bg-[#0B132B] text-slate-300 pt-12 pb-6 border-t border-slate-800">
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        
        {/* Column 1: Company Logo & About */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-bold text-white tracking-wide mb-4">
              NexGen Market Research
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed text-justify text-justify-inter-word max-w-[320px]">
              Providing premium qualitative and quantitative data collection, advanced data analysis, and market insights worldwide.
            </p>
          </div>

          {/* ISO Logos */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              Certified Organization
            </p>
            <div className="flex items-center gap-5">
              <img 
                src="/images/ISO.jpg" 
                alt="ISO Certified" 
                className="h-24 w-24 object-contain shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <img 
                src="/images/ISOq2.jpg" 
                alt="ISO Quality Certified" 
                className="h-24 w-24 object-contain shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* Column 2: Services Links */}
        <div className="md:col-span-2">
          <h3 className="text-white font-semibold text-[15px] tracking-wider uppercase mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Qualitative Collection</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Quantitative Research</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">SPSS & AMOS Analysis</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">STATA Data Modeling</a></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="md:col-span-2">
          <h3 className="text-white font-semibold text-[15px] tracking-wider uppercase mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Careers Portal</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Our Clients</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Support</a></li>
          </ul>
        </div>

        {/* Column 4: Location Addresses & Support Info (md:pl-[18px] added for exact additional 0.15cm shift) */}
        <div className="md:col-span-4 flex flex-col gap-6 w-full md:pl-[18px]">
          <div>
            <h3 className="text-white font-semibold text-[15px] tracking-wider uppercase mb-4">Location</h3>
            <div className="space-y-3 text-sm leading-relaxed text-slate-400">
              <div className="max-w-[340px]">
                <strong className="text-purple-400 block text-[14px] mb-0.5">New Delhi:</strong> 
                A 26, Block B, Mohan Cooperative Industrial Estate, New Delhi, Delhi 110044
              </div>
              <div className="max-w-[340px]">
                <strong className="text-purple-400 block text-[14px] mb-0.5">Haldwani:</strong> 
                Nainital Rd, Gorapadao, Haldwani, UK - 263139
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-[15px] tracking-wider uppercase mb-4">Direct Support</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="text-purple-400 font-medium">Email:</span>
                <a href="mailto:mail@nexgenint.com" className="hover:underline">mail@nexgenint.com</a>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-purple-400 font-medium">Phone:</span>
                <a href="tel:+918630831208" className="hover:underline">+91 86308 31208</a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-800/60 grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-xs text-slate-500">
        
        {/* Left Section: Social Media Local Images */}
        <div className="flex justify-center md:justify-start items-center gap-4">
          {socialIcons.map((icon) => (
            <a 
              key={icon.id} 
              href="#" 
              className="w-9 h-9 flex items-center justify-center transition-transform transform hover:scale-110"
              aria-label={icon.name}
            >
              <img 
                src={icon.url} 
                alt={icon.name} 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </a>
          ))}
        </div>

        {/* Center Section: Copyright Text */}
        <div className="text-center">
          <p>© 2026 NexGen Market Research Services Pvt Ltd. All rights reserved.</p>
        </div>

        {/* Right Section: Legal Links */}
        <div className="flex justify-center md:justify-end items-center gap-4">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <span className="text-slate-700">•</span>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;