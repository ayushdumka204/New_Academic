import React from 'react';

const ResearchProcess: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001C41] tracking-tight max-w-4xl mx-auto leading-tight">
            Steps how NexGen Academic Research Conduct Data collection
          </h2>
        </div>

        {/* Process Steps Containers */}
        <div className="space-y-24 md:space-y-36">

          {/* STEP 1: Briefing from client */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 text-left">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-2">STEP 01</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                Briefing from client
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                In this first step, we connect with the client to understand their specific research goals, target audience, and core academic guidelines before starting the project.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition">
                Learn more <span>→</span>
              </a>
            </div>
            {/* Gradient Border and White Inside */}
            <div className="md:col-span-7 w-full rounded-2xl p-[3px] bg-gradient-to-br from-blue-600 to-cyan-400 shadow-2xl shadow-blue-100">
              <div className="w-full aspect-video md:aspect-[16/10] bg-white rounded-xl flex items-center justify-center text-slate-400 font-medium">
                [ Place Step 1 Image Here ]
              </div>
            </div>
          </div>

          {/* STEP 2: Questionnaire design */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Gradient Border and White Inside */}
            <div className="grid grid-cols-1 md:grid-cols-12 md:col-span-7 w-full rounded-2xl p-[3px] bg-gradient-to-br from-indigo-600 to-purple-500 shadow-2xl shadow-indigo-100 order-2 md:order-1">
              <div className="col-span-12 w-full aspect-video md:aspect-[16/10] bg-white rounded-xl flex items-center justify-center text-slate-400 font-medium">
                [ Place Step 2 Image Here ]
              </div>
            </div>
            <div className="md:col-span-5 text-left order-1 md:order-2">
              <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase block mb-2">STEP 02</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                Questionnaire design
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Our experts structure and design a reliable questionnaire with precise metrics, items, and rating scales required to capture data effectively for your research variables.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition">
                Learn more <span>→</span>
              </a>
            </div>
          </div>

          {/* STEP 3: Digital Survey Link Created */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 text-left">
              <span className="text-xs font-bold tracking-wider text-cyan-600 uppercase block mb-2">STEP 03</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                Digital Survey Link Created
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                We transform the approved questionnaire into an optimized digital survey platform, creating responsive and clean online links to start tracking live responses.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition">
                Learn more <span>→</span>
              </a>
            </div>
            {/* Gradient Border and White Inside */}
            <div className="md:col-span-7 w-full rounded-2xl p-[3px] bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-100">
              <div className="w-full aspect-video md:aspect-[16/10] bg-white rounded-xl flex items-center justify-center text-slate-400 font-medium">
                [ Place Step 3 Image Here ]
              </div>
            </div>
          </div>

          {/* STEP 4: Pilot Survey Conduct */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Gradient Border and White Inside */}
            <div className="grid grid-cols-1 md:grid-cols-12 md:col-span-7 w-full rounded-2xl p-[3px] bg-gradient-to-br from-violet-600 to-pink-500 shadow-2xl shadow-violet-100 order-2 md:order-1">
              <div className="col-span-12 w-full aspect-video md:aspect-[16/10] bg-white rounded-xl flex items-center justify-center text-slate-400 font-medium">
                [ Place Step 4 Image Here ]
              </div>
            </div>
            <div className="md:col-span-5 text-left order-1 md:order-2">
              <span className="text-xs font-bold tracking-wider text-violet-600 uppercase block mb-2">STEP 04</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                Pilot Survey Conduct
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Before full deployment, we execute a preliminary small-scale survey to check data validity, test scale reliability, and remove any anomalies from the questions.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition">
                Learn more <span>→</span>
              </a>
            </div>
          </div>

          {/* STEP 5: Final Data Collection */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 text-left">
              <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase block mb-2">STEP 05</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                Final Data Collection
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                After the pilot run passes quality checks, we roll out full-scale data collection through our expansive ground networks to deliver accurate, 100% verified research data.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition">
                Learn more <span>→</span>
              </a>
            </div>
            {/* Gradient Border and White Inside */}
            <div className="md:col-span-7 w-full rounded-2xl p-[3px] bg-gradient-to-br from-emerald-500 to-teal-600 shadow-2xl shadow-emerald-100">
              <div className="w-full aspect-video md:aspect-[16/10] bg-white rounded-xl flex items-center justify-center text-slate-400 font-medium">
                [ Place Step 5 Image Here ]
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResearchProcess;