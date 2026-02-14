
import React from 'react';

const steps = [
  {
    title: 'Discovery & Audit',
    desc: 'We analyze your business needs, target audience, and current technical debt.',
    icon: '01'
  },
  {
    title: 'UX/UI Architecture',
    desc: 'Designing high-fidelity prototypes focused on user retention and brand authority.',
    icon: '02'
  },
  {
    title: 'Agile Development',
    desc: 'Bi-weekly sprints with full transparency. You see the code as it is written.',
    icon: '03'
  },
  {
    title: 'Vulnerability Testing',
    desc: 'Rigorous QA and penetration testing to ensure zero-day security resilience.',
    icon: '04'
  },
  {
    title: 'Seamless Deployment',
    desc: 'Optimized launch on App Stores and G-Cloud infrastructure with 24/7 monitoring.',
    icon: '05'
  },
  {
    title: 'Scale & Support',
    desc: 'Post-launch optimization and feature expansion to handle millions of users.',
    icon: '06'
  }
];

const Process: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-end justify-between mb-20">
        <div className="lg:w-2/3">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Methodology</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 text-slate-900 leading-tight">
            The Gothwad <span className="text-[#0056B3]">Blueprint.</span>
          </h2>
        </div>
        <p className="lg:w-1/3 text-slate-500 mt-6 lg:mt-0 font-medium">
          A disciplined, engineering-first approach to building software that never fails under pressure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
        {steps.map((s, i) => (
          <div key={i} className="group relative">
            <div className="text-[120px] font-black text-slate-50 absolute -top-20 -left-4 z-0 pointer-events-none select-none">
              {s.icon}
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#0056B3] transition-colors">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {s.desc}
              </p>
              <div className="w-12 h-1 bg-slate-100 mt-6 group-hover:w-full group-hover:bg-[#0056B3] transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
