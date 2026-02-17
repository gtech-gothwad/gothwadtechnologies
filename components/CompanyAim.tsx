
import React from 'react';

const CompanyAim: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 translate-x-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
            <div className="lg:w-1/3">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#0056B3] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
                Strategic Vision
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                The Gothwad <br /> <span className="text-[#0056B3]">Commitment.</span>
              </h2>
            </div>
            
            <div className="lg:w-2/3 border-l-2 border-slate-100 pl-8 lg:pl-16">
              <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-snug mb-10 tracking-tight">
                "Our aim is to <span className="text-[#0056B3] font-black underline decoration-blue-100 underline-offset-8">democratize high-performance engineering</span> by providing institutional-grade software ecosystems that are both accessible and unbreakable."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#0056B3]">The Mission</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    To eliminate the barrier between complex digital requirements and small-to-midscale enterprises. We build tools that allow institutions to scale from 100 to 100,000 users without rebuilding their core infrastructure.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#0056B3]">The Standard</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Every line of code shipped from Gothwad Technologies must adhere to the 'Zero-Lag' principle. We prioritize data integrity and user experience over rapid, unstable deployment.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 flex items-center gap-4">
                <div className="w-12 h-1 bg-[#0056B3]"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 italic">Engineering the future, today.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAim;
