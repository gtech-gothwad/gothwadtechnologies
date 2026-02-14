
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Horizontal Top Announcement Bar */}
      <div className="bg-slate-900 text-white py-2 px-6 hidden md:block border-b border-white/5">
        <div className="container mx-auto flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em]">
          <div className="flex gap-8">
            <a href="#app-store" className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              GTech App Store
            </a>
            <a href="#school-x" className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              School X
            </a>
            <a href="#studio" className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              Gothwad Studio
            </a>
          </div>
          <div className="flex items-center gap-2 opacity-60">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            G-Node Active: Jaipur / Delhi / Mumbai
          </div>
        </div>
      </div>

      <nav className={`transition-all duration-500 border-b ${
        isScrolled ? 'bg-slate-100/95 backdrop-blur-xl py-3 shadow-2xl border-slate-200' : 'bg-slate-50 py-5 border-slate-100'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-12 h-12 bg-[#0056B3] rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
               <span className="text-white font-black text-2xl italic">G</span>
            </div>
            <div className="leading-tight">
              <h1 className="text-2xl font-black text-slate-900 tracking-tighter">GOTHWAD</h1>
              <p className="text-[10px] uppercase font-black text-[#0056B3] tracking-[0.4em]">Technologies</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {['Services', 'App Store', 'Marketplace', 'Tech Matrix', 'Timeline'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-[10px] font-black text-slate-500 hover:text-[#0056B3] transition-colors uppercase tracking-[0.2em] relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0056B3] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={onOpenContact}
              className="p-3 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-slate-700 hover:text-[#0056B3] group"
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-current rounded-full group-hover:w-8 transition-all"></div>
                <div className="w-8 h-0.5 bg-current rounded-full"></div>
                <div className="w-5 h-0.5 bg-current rounded-full group-hover:w-8 transition-all"></div>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
