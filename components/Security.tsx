
import React from 'react';

const Security: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-slate-900 rounded-[50px] p-12 md:p-24 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-200">Enterprise Security Grade</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Your Data. <br /> Our <span className="text-blue-400">Fortress.</span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-12">
              We integrate military-grade encryption and zero-trust security protocols into every line of code we ship.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-blue-400 font-black mb-2 uppercase text-xs tracking-widest">Encryption</h4>
                <p className="text-sm text-slate-300">AES-256 Bit Data-at-Rest Protection</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-black mb-2 uppercase text-xs tracking-widest">Compliance</h4>
                <p className="text-sm text-slate-300">ISO-Ready Infrastructure & Audits</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-black mb-2 uppercase text-xs tracking-widest">Privacy</h4>
                <p className="text-sm text-slate-300">GDPR & PDPB Compliant Architectures</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-black mb-2 uppercase text-xs tracking-widest">Monitoring</h4>
                <p className="text-sm text-slate-300">Real-time DDoS Shielding (G-Cloud)</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
             <div className="relative group">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all duration-1000"></div>
                <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center relative z-10">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 md:h-40 md:w-40 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                   </svg>
                   {/* Orbiting particles */}
                   <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                   <div className="absolute top-1/2 left-0 w-4 h-4 bg-blue-500 rounded-full -ml-2 -mt-2 shadow-lg shadow-blue-500"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
