
import React from 'react';

const leaders = [
  {
    name: 'Pawan Gothwad',
    role: 'CEO & Principal Architect',
    bio: 'Pawan is the lead visionary behind Gothwad Technologies, specializing in ultra-high-capacity system architectures and secure digital ecosystems.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    quote: '"We build for stability first."'
  },
  {
    name: 'Vishnu Meena',
    role: 'Co-Founder & Head of Tech',
    bio: 'A master of backend performance, Vishnu ensures that every Gothwad product operates with zero-latency efficiency on the global stage.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop',
    quote: '"Code is the ultimate craft."'
  }
];

const Leadership: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20">
        <div className="max-w-2xl">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Board of Directors</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 text-slate-900 leading-tight">Visionary Engineering</h2>
        </div>
        <button className="mt-8 md:mt-0 px-8 py-4 glass-card border border-slate-200 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-3 shadow-sm hover:shadow-md">
          View Full Team 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-12 max-w-6xl mx-auto">
        {leaders.map((leader, i) => (
          <div key={i} className="group relative w-full md:w-1/2">
             <div className="relative rounded-[50px] overflow-hidden aspect-[4/5] shadow-2xl transition-all duration-700 hover:scale-[0.99] border border-white/50">
               <img 
                 src={leader.image} 
                 alt={leader.name} 
                 className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-90"></div>
               
               <div className="absolute bottom-10 left-10 right-10">
                  <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">{leader.role}</span>
                  <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">{leader.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {leader.bio}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-8 bg-blue-500"></div>
                    <p className="text-white font-bold italic text-lg opacity-90">
                      {leader.quote}
                    </p>
                  </div>
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
