
import React from 'react';

const milestones = [
  {
    year: '2020',
    title: 'The Seed Phase',
    description: 'Pawan Gothwad begins developing custom Android kernels and utility modules. First 10,000 users reached.'
  },
  {
    year: '2021',
    title: 'Enterprise Frameworks',
    description: 'Transitioned to TypeScript and React Native. Established Gothwad Studio as our internal SDK engine.'
  },
  {
    year: '2022',
    title: 'EdTech Domination',
    description: 'School X V1.0 launched. Successfully digitized 50+ high-capacity coaching centers in Rajasthan.'
  },
  {
    year: '2023',
    title: 'Institutional Expansion',
    description: 'Established as a premier technology developer. Received national recognition for data-secure software architectures.'
  },
  {
    year: '2024',
    title: 'Global G-Cloud',
    description: 'Launched our private cloud infrastructure (G-Cloud) offering 99.9% uptime for institutional clients.'
  },
  {
    year: '2025',
    title: 'AI Revolution',
    description: 'Developing proprietary GenAI modules for School X and advanced game simulation physics.'
  }
];

const Roadmap: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Legacy</span>
        <h2 className="text-4xl md:text-6xl font-black mt-2 text-slate-900 leading-tight">Timeline of Excellence</h2>
        <p className="text-slate-500 mt-6 max-w-2xl mx-auto font-medium text-lg italic">
          "From a single line of code to a premier powerhouse of digital innovation."
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Central Line with Gradient */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-100 rounded-full hidden md:block overflow-hidden">
           <div className="h-full w-full bg-gradient-to-b from-[#0056B3] via-blue-200 to-transparent"></div>
        </div>

        <div className="space-y-24">
          {milestones.map((m, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Pulsing Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center z-10 hidden md:block">
                 <div className="absolute inset-0 bg-[#0056B3]/20 rounded-full animate-ping"></div>
                 <div className="w-4 h-4 bg-white border-4 border-[#0056B3] rounded-full relative z-20"></div>
              </div>
              
              <div className="w-full md:w-[42%] p-10 bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-blue-200 transition-all duration-500 group">
                <span className="text-5xl font-black text-slate-100 mb-6 block group-hover:text-[#0056B3]/10 transition-colors">{m.year}</span>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{m.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {m.description}
                </p>
              </div>
              
              <div className="hidden md:block w-[16%]"></div>
              <div className="hidden md:block w-[42%]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
