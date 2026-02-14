
import React from 'react';

const GameEngine: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Game Studio</span>
        <h2 className="text-4xl md:text-6xl font-black mt-4 text-slate-900">Immersive Digital Worlds</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-50 rounded-[50px] p-12 md:p-20 relative overflow-hidden border border-slate-100 group">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Next-Gen Game <br /> <span className="text-[#0056B3]">Physics & Rendering.</span>
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-xl">
              From arcade simulations to competitive multiplayer experiences, we engineer games that maintain 60FPS even on mid-range hardware.
            </p>
            <div className="flex flex-wrap gap-4">
               {["Cocos Creator", "Unity 3D", "React Native Game Engine", "Socket.io", "WASM"].map(tech => (
                 <span key={tech} className="px-4 py-2 bg-white text-[10px] font-black uppercase text-slate-400 border border-slate-100 rounded-xl tracking-widest">{tech}</span>
               ))}
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
            <svg className="w-full h-full text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"/></svg>
          </div>
        </div>

        <div className="bg-[#0056B3] rounded-[50px] p-12 flex flex-col justify-between text-white shadow-2xl">
           <div>
             <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
             <h4 className="text-2xl font-black mb-4">Zero-Latency Multiplayer</h4>
             <p className="text-blue-100 text-sm leading-relaxed">
               Proprietary synchronization algorithms for flawless real-time competitive gaming.
             </p>
           </div>
           <button className="w-full bg-white text-[#0056B3] py-4 rounded-2xl font-black mt-12 hover:bg-blue-50 transition-colors">
              Request Game Deck
           </button>
        </div>
      </div>
    </div>
  );
};

export default GameEngine;
