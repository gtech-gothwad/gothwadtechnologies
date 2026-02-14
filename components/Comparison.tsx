
import React from 'react';

const Comparison: React.FC = () => {
  const features = [
    { name: 'Source Code Quality', gothwad: 'Modular & Scalable', others: 'Generic / Messy' },
    { name: 'Average Delivery Time', gothwad: '2-4 Weeks', others: '3-6 Months' },
    { name: 'Support Post-Launch', gothwad: '24/7 Priority', others: 'Email Only / Slow' },
    { name: 'Pricing Architecture', gothwad: 'Lowest in Market', others: 'High Hidden Costs' },
    { name: 'Security Audits', gothwad: 'ISO 27001 Ready', others: 'Basic / None' },
    { name: 'Technology Stack', gothwad: 'Modern & Native', others: 'Legacy / Hybrid' }
  ];

  return (
    <div className="container mx-auto px-6">
       <div className="text-center mb-20">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Decision Making</span>
        <h2 className="text-4xl md:text-6xl font-black mt-4 text-slate-900">Why Gothwad Tech?</h2>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-[50px] shadow-2xl border border-slate-50 overflow-hidden">
        <div className="grid grid-cols-3 bg-slate-900 text-white p-8">
           <div className="text-xs font-black uppercase tracking-widest text-slate-400">Features</div>
           <div className="text-center text-xs font-black uppercase tracking-widest text-[#0056B3]">Gothwad Technologies</div>
           <div className="text-right text-xs font-black uppercase tracking-widest text-slate-400">Other Agencies</div>
        </div>
        
        <div className="divide-y divide-slate-50">
           {features.map((f, i) => (
             <div key={i} className="grid grid-cols-3 p-8 items-center hover:bg-slate-50 transition-colors">
                <div className="text-slate-900 font-bold text-sm">{f.name}</div>
                <div className="text-center">
                   <span className="bg-blue-50 text-[#0056B3] text-[10px] font-black px-4 py-2 rounded-full border border-blue-100 uppercase tracking-widest">
                     {f.gothwad}
                   </span>
                </div>
                <div className="text-right text-slate-400 font-medium text-sm">{f.others}</div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Comparison;
