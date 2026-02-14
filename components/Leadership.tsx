
import React from 'react';

const leaders = [
  {
    name: 'Pawan Gothwad',
    role: 'CEO & Principal Architect',
    bio: 'Pawan is the lead visionary behind Gothwad Technologies, specializing in ultra-high-capacity system architectures and secure digital ecosystems.',
    image: 'https://picsum.photos/seed/pawan_ceoo/600/800',
    quote: '"We build for stability first."'
  },
  {
    name: 'Vishnu Meena',
    role: 'Co-Founder & Head of Tech',
    bio: 'A master of backend performance, Vishnu ensures that every Gothwad product operates with zero-latency efficiency on the global stage.',
    image: 'https://picsum.photos/seed/vishnu_ctoo/600/800',
    quote: '"Code is the ultimate craft."'
  }
];

const Leadership: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Board of Directors</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-slate-900 leading-tight">Visionary Engineering</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-16 max-w-6xl mx-auto">
        {leaders.map((leader, i) => (
          <div key={i} className="group relative w-full md:w-1/2">
             <div className="relative rounded-[50px] overflow-hidden aspect-[3/4] shadow-2xl transition-all duration-700 hover:scale-[0.98]">
               <img 
                 src={leader.image} 
                 alt={leader.name} 
                 className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
               
               <div className="absolute bottom-10 left-10 right-10">
                  <span className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-3 block">{leader.role}</span>
                  <h3 className="text-4xl font-black text-white mb-4">{leader.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {leader.bio}
                  </p>
                  <p className="text-white font-bold italic text-lg opacity-80 border-l-4 border-blue-500 pl-4">
                    {leader.quote}
                  </p>
               </div>
             </div>
             
             {/* Social Links Badge */}
             <div className="absolute top-10 right-10 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all delay-300">
                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
                   <div className="w-5 h-5 bg-white rounded-sm"></div>
                </a>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
