
import React from 'react';

interface LoginViewProps {
  onBack: () => void;
}

const roles = [
  {
    id: 'customer',
    title: 'Customer / User',
    desc: 'Manage projects & purchases.',
    icon: '👤',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'seller',
    title: 'Code Seller',
    desc: 'Warehouse assets & sales.',
    icon: '💰',
    color: 'from-emerald-500 to-emerald-700'
  },
  {
    id: 'developer',
    title: 'G-Developer',
    desc: 'SDKs, API nodes & docs.',
    icon: '💻',
    color: 'from-slate-700 to-slate-900'
  },
  {
    id: 'management',
    title: 'Management',
    desc: 'Corporate ops & reporting.',
    icon: '🏢',
    color: 'from-[#0056B3] to-[#004494]'
  },
  {
    id: 'admin',
    title: 'Administration',
    desc: 'Global node monitoring.',
    icon: '🔑',
    color: 'from-red-600 to-red-800'
  }
];

const LoginView: React.FC<LoginViewProps> = ({ onBack }) => {
  const logoUrl = "https://i.ibb.co/KxxyJK63/IMG-20260215-091905-778.webp";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0056B3] to-transparent opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200 rounded-full blur-[120px]"></div>
      </div>

      <div className="container max-w-4xl relative z-10 flex flex-col items-center">
        {/* Compact Header Section */}
        <div className="text-center mb-10 md:mb-14">
          <div 
            onClick={onBack}
            className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/10 mx-auto mb-6 hover:scale-110 transition-transform cursor-pointer overflow-hidden border border-slate-100"
          >
             <img src={logoUrl} alt="Gothwad Logo" className="w-full h-full object-cover scale-110" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-3">
            Gothwad Technologies <br /> <span className="text-[#0056B3]">Login Portal</span>
          </h1>
          <p className="text-slate-400 text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] max-w-lg mx-auto">
            Authorized Access Only • Select Identity
          </p>
        </div>

        {/* Tight Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full">
          {roles.map((role) => (
            <div 
              key={role.id}
              className={`group relative glass-card p-6 rounded-[24px] border border-white hover:border-blue-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer flex flex-col h-full`}
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center text-lg mb-5 shadow-md transition-transform group-hover:rotate-6`}>
                {role.icon}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">{role.title}</h3>
              <p className="text-slate-500 text-xs font-medium leading-tight flex-grow opacity-80">
                {role.desc}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-[8px] font-black uppercase tracking-widest text-[#0056B3]">Node 0{roles.indexOf(role) + 1}</span>
                <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-[#0056B3] group-hover:text-white transition-colors border border-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
          
          {/* Create Account Placeholder - Optimized */}
          <div className="lg:col-span-2 bg-slate-900 rounded-[24px] p-6 flex items-center justify-between gap-6 border border-white/5 shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <h4 className="text-white text-lg font-black mb-1 leading-none">New to Gothwad?</h4>
              <p className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">Join our engineering network.</p>
            </div>
            <button className="relative z-10 bg-white text-slate-900 px-6 py-3 rounded-xl font-black uppercase text-[9px] tracking-widest hover:bg-[#0056B3] hover:text-white transition-all shadow-lg active:scale-95">
              Create Now
            </button>
          </div>
        </div>

        {/* Minimal Footer Navigation */}
        <button 
          onClick={onBack}
          className="mt-12 text-slate-400 hover:text-slate-900 font-black uppercase text-[9px] tracking-[0.2em] flex items-center gap-3 transition-all group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Exit Secure Portal
        </button>
      </div>
    </div>
  );
};

export default LoginView;
