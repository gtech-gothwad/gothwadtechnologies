
import React from 'react';

const CustomSoftware: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Tailored Engineering</span>
          <h2 className="text-4xl md:text-7xl font-black mt-4 mb-8 leading-tight">
            Custom Software <br /> <span className="text-blue-500">Concierge.</span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed mb-12">
            Ready-made code doesn't always fit. We build bespoke digital infrastructure from the ground up, designed to solve your specific business bottleneck.
          </p>
          
          <div className="space-y-8">
             {[
               { t: 'Microservices Architecture', d: 'Scalable backends that grow with your traffic.' },
               { t: 'Legacy Migration', d: 'Seamlessly move your old data to modern frameworks.' },
               { t: 'API Integration Hub', d: 'Connecting your software to the entire digital world.' }
             ].map((item, i) => (
               <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 border border-blue-500/20">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-white">{item.t}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="bg-slate-800 border border-slate-700 rounded-[50px] p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative z-10 space-y-6">
               <div className="flex items-center justify-between border-b border-slate-700 pb-6">
                 <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Project Status</span>
                 <span className="px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-black rounded-full border border-green-500/20">ACTIVE</span>
               </div>
               
               <div className="space-y-4">
                 <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-500 w-[75%] animate-pulse"></div>
                 </div>
                 <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                    <span>Database Syncing...</span>
                    <span>75%</span>
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="h-32 bg-slate-900 rounded-3xl border border-slate-700 p-4">
                     <div className="w-8 h-8 bg-slate-800 rounded-lg mb-4"></div>
                     <div className="w-full h-1 bg-slate-800 rounded-full mb-2"></div>
                     <div className="w-1/2 h-1 bg-slate-800 rounded-full"></div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSoftware;
