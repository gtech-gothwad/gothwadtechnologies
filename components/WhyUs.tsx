
import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Why Visionaries Choose <br /> <span className="text-[#0056B3]">Gothwad Technologies</span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed mb-12 font-light">
            We don't just deliver projects; we build partnerships. Our DNA is rooted in technical excellence and absolute reliability.
          </p>
          
          <div className="space-y-10">
            {[
              { t: 'High Trust Philosophy', d: 'Operating as a Pvt. Ltd. entity ensures legal safety and enterprise commitment.' },
              { t: 'Performance First', d: 'Our apps are optimized for low-end devices and slow internet connections.' },
              { t: 'Visionary Leadership', d: 'Direct guidance from Pawan Gothwad on architecture and strategy.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0056B3]/20 flex items-center justify-center text-[#0056B3]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{item.t}</h4>
                  <p className="text-slate-500">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-8 rounded-[32px] flex flex-col justify-between aspect-square">
               <div className="w-12 h-12 bg-[#0056B3] rounded-xl"></div>
               <p className="text-sm font-bold text-slate-300">24/7 Technical Support & Monitoring</p>
            </div>
            <div className="bg-[#0056B3] p-8 rounded-[32px] flex flex-col justify-between aspect-square translate-y-8">
               <div className="w-12 h-12 bg-white rounded-xl"></div>
               <p className="text-sm font-bold text-white">99.9% Uptime SLA for All Enterprise Apps</p>
            </div>
            <div className="bg-white p-8 rounded-[32px] flex flex-col justify-between aspect-square">
               <div className="w-12 h-12 bg-slate-100 rounded-xl"></div>
               <p className="text-sm font-bold text-slate-900 text-center">Modern Tech Stack Mastery</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-[32px] flex flex-col justify-between aspect-square translate-y-8">
               <div className="w-12 h-12 bg-[#0056B3]/50 rounded-xl"></div>
               <p className="text-sm font-bold text-slate-300">Scalability-First Database Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
