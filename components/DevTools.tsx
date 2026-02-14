
import React from 'react';

const DevTools: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
        <div className="lg:w-1/2">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Developer Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
            Built with <span className="text-[#0056B3]">Elite</span> Technologies
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            At Gothwad Technologies, we don't just write code; we architect experiences. Our engineering team utilizes the most robust frameworks to ensure performance, scalability, and security.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-blue-200 transition-all">
              <div className="w-14 h-14 bg-blue-50 text-[#0056B3] rounded-xl flex items-center justify-center text-2xl font-bold">TS</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">TypeScript & React Native</h4>
                <p className="text-sm text-slate-500">Industry-standard type safety for flawless mobile and web deployment.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-blue-200 transition-all">
              <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center text-2xl">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Semantic Web 3.0</h4>
                <p className="text-sm text-slate-500">Accessible, SEO-optimized, and lightening fast HTML5/Tailwind architectures.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-blue-200 transition-all">
               <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center text-2xl">
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3m14.47 15.74c1.1-.35 1.5-.95 1.5-1.9s-.4-1.55-1.5-1.9c-1.1-.35-2.2-.4-2.2-.4s-.1-.05-.1-.1c0-.05.1-.1.1-.1s1.1-.05 2.2-.4c1.1-.35 1.5-.95 1.5-1.9s-.4-1.55-1.5-1.9c-1.1-.35-2.2-.4-2.2-.4H12v11h2.27s1.1-.05 2.2-.4M10 12.5H8V15h2c.8 0 1.5-.4 1.5-1.25S10.8 12.5 10 12.5M10 8H8v2.5h2c.8 0 1.5-.4 1.5-1.25S10.8 8 10 8z"/></svg>
               </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Gothwad Studio (SDK)</h4>
                <p className="text-sm text-slate-500">Our proprietary development toolkit that speeds up app generation by 40%.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
           <div className="space-y-4 pt-12">
             <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-50">
               <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" className="rounded-xl w-full h-40 object-cover" />
             </div>
             <div className="bg-slate-900 p-8 rounded-2xl text-white">
               <h5 className="text-3xl font-black mb-2">99.9%</h5>
               <p className="text-xs text-slate-400 uppercase font-bold">Code Reliability</p>
             </div>
           </div>
           <div className="space-y-4">
             <div className="bg-[#0056B3] p-8 rounded-2xl text-white">
               <h5 className="text-3xl font-black mb-2">40+</h5>
               <p className="text-xs text-blue-200 uppercase font-bold">Active Libraries</p>
             </div>
             <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-50">
               <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" className="rounded-xl w-full h-64 object-cover" />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DevTools;
