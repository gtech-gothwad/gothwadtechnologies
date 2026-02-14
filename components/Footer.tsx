
import React from 'react';

interface FooterProps {
  onOpenContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0056B3] to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#0056B3] rounded-xl flex items-center justify-center">
                 <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">GOTHWAD</h1>
                <p className="text-[10px] uppercase font-bold text-[#0056B3] tracking-widest leading-none">Technologies</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Pioneering enterprise software and high-capacity digital ecosystems from the heart of Rajasthan to the global stage.
            </p>
            <div className="flex gap-4">
               {['fb', 'tw', 'yt', 'li'].map(social => (
                 <a key={social} href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-[#0056B3] hover:border-transparent transition-all">
                   <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Ecosystem</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">School X Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gothwad Studio (IDE)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App Store Marketplace</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developer SDK</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="https://youtube.com/@aitricker" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                Ai Tricker (YouTube)
                <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-full">Subscribe</span>
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sketchware Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-6">Stay updated with our latest releases and tech insights.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-slate-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#0056B3] flex-grow" />
              <button className="bg-[#0056B3] p-3 rounded-lg hover:bg-[#004494] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-xs">
            © 2025 Gothwad Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500 uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-[#0056B3]">Privacy Policy</a>
            <a href="#" className="hover:text-[#0056B3]">Terms of Service</a>
            <a href="#" className="hover:text-[#0056B3]">Legal Mention</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
