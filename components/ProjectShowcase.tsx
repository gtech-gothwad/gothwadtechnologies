
import React from 'react';

const cases = [
  {
    title: 'School X 2.0 Deployment',
    metric: '2,000+ Students',
    result: 'Zero Uptime Loss',
    desc: 'Successfully migrated a legacy institutional database to G-Cloud with real-time sync for parents.',
    tags: ['Cloud', 'React Native', 'Firebase']
  },
  {
    title: 'Gothwad Studio SDK',
    metric: '40% Dev Boost',
    result: 'Optimized Workflow',
    desc: 'Developed a proprietary internal framework that allows for rapid modular app development.',
    tags: ['TypeScript', 'Node.js', 'DevOps']
  }
];

const ProjectShowcase: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
        <div className="lg:w-1/2">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Case Studies</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 text-slate-900 leading-tight">
            Proven <span className="text-[#0056B3]">Performance.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {cases.map((c, i) => (
          <div key={i} className="group bg-slate-50 rounded-[40px] p-10 md:p-16 border border-slate-100 relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex gap-2 mb-8">
                {c.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white text-[10px] font-black uppercase text-slate-400 border border-slate-100 rounded-full tracking-widest">{tag}</span>
                ))}
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6">{c.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
                {c.desc}
              </p>
            </div>
            
            <div className="flex items-center gap-12 relative z-10">
              <div>
                <p className="text-[#0056B3] text-2xl font-black leading-none mb-1">{c.metric}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Capacity</p>
              </div>
              <div>
                <p className="text-slate-900 text-2xl font-black leading-none mb-1">{c.result}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">End Result</p>
              </div>
            </div>

            {/* Decorative Icon */}
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none">
              <svg className="w-64 h-64 text-slate-900" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"/></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
