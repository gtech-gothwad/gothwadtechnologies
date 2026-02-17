
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Shining Glow Background Elements */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px] opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[1000px] h-[1000px] bg-slate-200 rounded-full mix-blend-multiply filter blur-[150px] opacity-40 animate-pulse delay-1000"></div>

      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0056B3 0.5px, transparent 0.5px)', backgroundSize: '48px 48px' }}></div>

      <div className="container mx-auto px-6 relative z-10 text-center py-20">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 glass-card border border-white/80 rounded-full mb-12 group cursor-default shadow-sm transition-all hover:shadow-md">
          <div className="w-2 h-2 bg-[#0056B3] rounded-full animate-ping"></div>
          <span className="text-slate-900 text-[9px] font-black tracking-[0.3em] uppercase italic">Pioneering Digital Architectures / 2025 EDITION</span>
        </div>
        
        <h1 className="text-7xl md:text-[160px] font-black text-slate-900 leading-[0.75] mb-14 tracking-tighter">
          Apps. Games. <br /> <span className="text-[#0056B3]">Source Code.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 max-w-4xl mx-auto mb-20 leading-relaxed font-medium">
          The definitive software factory for enterprise management and high-performance gaming. <br className="hidden md:block" />
          <span className="text-slate-900 font-black">Verified Engineering Excellence</span> at market-redefining pricing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-slate-900 text-white px-16 py-7 rounded-[28px] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#0056B3] transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
            Buy Premium Code
          </button>
          <button className="glass-card text-[#0056B3] border border-white px-16 py-7 rounded-[28px] text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all active:scale-95 shadow-lg">
            Custom Engineering
          </button>
        </div>

        <div className="mt-40 relative max-w-6xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0056B3] to-blue-300 rounded-[64px] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,86,179,0.1)] border-[1px] border-white/50 bg-white/40 backdrop-blur-md p-6">
             <div className="aspect-[21/9] bg-slate-50/50 rounded-[48px] overflow-hidden relative border border-white/50 shadow-inner">
               <img 
                 src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                 alt="Gothwad Engineering Center" 
                 className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[8s]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
               
               <div className="absolute bottom-10 left-10 flex gap-10">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-white leading-none">100%</span>
                    <span className="text-[9px] font-black text-blue-300 uppercase tracking-widest mt-2">Legal Security</span>
                  </div>
                  <div className="flex flex-col border-l border-white/20 pl-10">
                    <span className="text-4xl font-black text-white leading-none">24/7</span>
                    <span className="text-[9px] font-black text-blue-300 uppercase tracking-widest mt-2">Active Support</span>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
