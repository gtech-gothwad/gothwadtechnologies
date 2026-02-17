
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenContact: () => void;
  onLogoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const logoUrl = "https://i.ibb.co/KxxyJK63/IMG-20260215-091905-778.webp";
  const storeUrl = "https://gtech-gothwad.github.io/gtech-store/";

  // Light, accessible colors that maintain text visibility. 
  const lightColors = [
    'bg-red-50/95',      // Light Red (Default)
    'bg-green-50/95',    // Light Green
    'bg-orange-50/95',   // Light Orange
    'bg-blue-50/95',     // Light Blue
    'bg-purple-50/95',   // Light Purple
    'bg-amber-50/95',    // Light Amber
    'bg-slate-100/90',   // Light Slate
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHeaderClick = () => {
    setColorIndex((prev) => (prev + 1) % lightColors.length);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]" onClick={handleHeaderClick}>
      {/* Horizontal Top Announcement Bar */}
      <div className="bg-slate-900 text-white py-2 px-6 hidden md:block border-b border-white/5">
        <div className="container mx-auto flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em]">
          <div className="flex gap-8">
            <a href={storeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              GTech App Store
            </a>
            <a href="#school-x" className="hover:text-blue-400 transition-colors flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              School X
            </a>
            <a href="#studio" className="hover:text-blue-400 transition-colors flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              Gothwad Studio
            </a>
          </div>
          <div className="flex items-center gap-2 opacity-60">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            G-Node Active: Global Infrastructure
          </div>
        </div>
      </div>

      {/* Main Navigation with visible Thin Blue Separation Line */}
      <nav className={`transition-all duration-300 border-b border-blue-500 cursor-pointer select-none ${
        isScrolled ? 'backdrop-blur-xl py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)]' : 'py-5'
      } ${lightColors[colorIndex]}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 md:gap-4 group cursor-pointer" 
            onClick={(e) => {
              e.stopPropagation();
              onLogoClick ? onLogoClick() : window.scrollTo({top: 0, behavior: 'smooth'});
              handleHeaderClick();
            }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full overflow-hidden shadow-lg group-hover:rotate-12 transition-transform duration-500 shrink-0 border border-slate-100">
               <img src={logoUrl} alt="Gothwad Logo" className="w-full h-full object-cover scale-110" />
            </div>
            <div className="leading-tight">
              <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">GOTHWAD</h1>
              <p className="text-[8px] md:text-[10px] uppercase font-black text-[#0056B3] tracking-[0.4em]">Technologies</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {['Services', 'App Store', 'Marketplace', 'Tech Stack', 'Roadmap'].map(item => {
              const isAppStore = item === 'App Store';
              return (
                <a 
                  key={item} 
                  href={isAppStore ? storeUrl : `#${item.toLowerCase().replace(' ', '-')}`} 
                  target={isAppStore ? "_blank" : undefined}
                  rel={isAppStore ? "noopener noreferrer" : undefined}
                  onClick={(e) => e.stopPropagation()}
                  className="text-[11px] font-black text-slate-500 hover:text-[#0056B3] transition-colors uppercase tracking-[0.2em] relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0056B3] transition-all group-hover:w-full"></span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onOpenContact();
                handleHeaderClick();
              }}
              className="bg-[#0056B3] text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
            >
              Start<span className="hidden sm:inline"> Project</span>
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onOpenContact();
                handleHeaderClick();
              }}
              className="p-2.5 md:p-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-slate-700 hover:text-[#0056B3] group"
              aria-label="More Options"
            >
              <div className="space-y-1 md:space-y-1.5 flex flex-col items-end">
                <div className="w-5 md:w-6 h-0.5 bg-current rounded-full group-hover:w-8 transition-all"></div>
                <div className="w-7 md:w-8 h-0.5 bg-current rounded-full"></div>
                <div className="w-4 md:w-5 h-0.5 bg-current rounded-full group-hover:w-8 transition-all"></div>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
