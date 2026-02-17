
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
       <div className="text-center mb-16 md:mb-20">
        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Decision Matrix</span>
        <h2 className="text-4xl md:text-6xl font-black mt-4 text-slate-900 tracking-tighter">Why Gothwad Tech?</h2>
        <p className="text-slate-500 mt-4 text-sm md:text-lg font-medium">Comparing our industrial standards against the market average.</p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-[32px] md:rounded-[50px] shadow-2xl border border-slate-100 overflow-hidden">
        {/* Table Header - Hidden on Small Screens */}
        <div className="hidden md:grid grid-cols-3 bg-slate-900 text-white p-8">
           <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Features</div>
           <div className="text-center text-[10px] font-black uppercase tracking-widest text-blue-400">Gothwad Technologies</div>
           <div className="text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Others</div>
        </div>
        
        <div className="divide-y divide-slate-100">
           {features.map((f, i) => (
             <div key={i} className="flex flex-col md:grid md:grid-cols-3 p-6 md:p-8 items-center hover:bg-slate-50/50 transition-colors gap-4 md:gap-0">
                {/* Feature Label */}
                <div className="w-full text-center md:text-left md:col-span-1">
                  <div className="md:hidden text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Standard</div>
                  <div className="text-slate-900 font-black text-base md:text-sm">{f.name}</div>
                </div>

                {/* Gothwad Value */}
                <div className="flex flex-col items-center w-full md:w-auto">
                   <div className="md:hidden text-[9px] font-black text-blue-500 uppercase tracking-widest mb-1">Gothwad</div>
                   <span className="w-full md:w-auto text-center bg-blue-50 text-[#0056B3] text-[10px] md:text-[11px] font-black px-4 py-2.5 rounded-xl md:rounded-full border border-blue-100 uppercase tracking-widest shadow-sm">
                     {f.gothwad}
                   </span>
                </div>

                {/* Others Value */}
                <div className="flex flex-col items-center w-full md:w-auto text-right md:text-center">
                   <div className="md:hidden text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Market Average</div>
                   <div className="text-slate-400 font-bold text-xs md:text-sm">{f.others}</div>
                </div>
             </div>
           ))}
        </div>
        
        {/* Footer Note */}
        <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Based on internal corporate audit data 2024-2025</p>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
