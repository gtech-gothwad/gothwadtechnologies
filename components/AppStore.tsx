
import React from 'react';

const apps = [
  {
    id: 'school-x',
    name: 'School X',
    tag: 'Flagship',
    category: 'Education ERP',
    description: 'A comprehensive campus management system handling 2,000+ students per entity.',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format&fit=crop',
    iconColor: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 'g-vpn',
    name: 'G-VPN Enterprise',
    tag: 'Privacy',
    category: 'Network Tool',
    description: 'Ultra-fast proprietary VPN protocol for secure corporate network bridging.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    iconColor: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'food-dash',
    name: 'G-Food Delivery',
    tag: 'E-commerce',
    category: 'Logistics',
    description: 'Complete multi-vendor delivery engine with real-time driver tracking.',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786486a9?q=80&w=1000&auto=format&fit=crop',
    iconColor: 'bg-orange-100 text-orange-600',
  },
  {
    id: 'g-crypto',
    name: 'Vault Wallet',
    tag: 'Fintech',
    category: 'Web 3.0',
    description: 'Non-custodial crypto wallet with institutional-grade hardware security.',
    image: 'https://images.unsplash.com/photo-1621416848440-236914c71695?q=80&w=1000&auto=format&fit=crop',
    iconColor: 'bg-indigo-100 text-indigo-600',
  },
  {
    id: 'gothwad-studio',
    name: 'Gothwad Studio',
    tag: 'Dev Favorite',
    category: 'IDE/Tools',
    description: 'The definitive SDK for React Native and TypeScript enterprise development.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
    iconColor: 'bg-blue-100 text-[#0056B3]',
  },
  {
    id: 'pixel-dash',
    name: 'Pixel Dash',
    tag: 'Gaming',
    category: 'Mobile Gaming',
    description: 'Ultra-responsive arcade experience with proprietary rendering logic.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252728f?q=80&w=1000&auto=format&fit=crop',
    iconColor: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'estate-pro',
    name: 'G-Estate',
    tag: 'Real Estate',
    category: 'Marketplace',
    description: '3D Virtual tour enabled property management and listing system.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    iconColor: 'bg-amber-100 text-amber-600',
  },
  {
    id: 'secure-vault',
    name: 'Secure Vault',
    tag: 'Security',
    category: 'Data Protection',
    description: 'Zero-knowledge encryption for student records and financial data.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    iconColor: 'bg-red-100 text-red-600',
  }
];

const AppStore: React.FC = () => {
  const storeUrl = "https://gtech-gothwad.github.io/gtech-store/";

  return (
    <div className="space-y-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {apps.map((app) => (
          <div key={app.id} className="group bg-white rounded-[40px] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] card-hover flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-6 right-6 z-10">
              <span className="px-3 py-1 bg-slate-900/50 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                {app.tag}
              </span>
            </div>
            
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 border border-slate-50">
              <img 
                src={app.image} 
                alt={app.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-2xl ${app.iconColor}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 leading-none mb-1">{app.name}</h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{app.category}</span>
              </div>
            </div>
            
            <p className="text-slate-500 text-sm mb-10 flex-grow leading-relaxed">
              {app.description}
            </p>
            
            <a 
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#0056B3]/5 hover:bg-[#0056B3] hover:text-white text-[#0056B3] py-4 rounded-2xl font-black transition-all border border-[#0056B3]/10 group-hover:border-transparent group-hover:shadow-xl group-hover:shadow-[#0056B3]/20 text-center block"
            >
              Get Source Code
            </a>
          </div>
        ))}
      </div>

      {/* Massive CTA for App Store - Updated with Blue Theme and External Link */}
      <div className="bg-white rounded-[60px] p-12 md:p-24 border border-slate-100 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[120px] -mr-48 -mt-48 group-hover:bg-blue-100 transition-colors"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
              Explore the full <br /> <span className="text-[#0056B3]">GTech Marketplace.</span>
            </h2>
            <p className="text-slate-500 text-xl font-medium mb-10 leading-relaxed">
              Don't reinvent the wheel. Visit the GTech App Store to browse 500+ production-ready source codes, UI kits, and backend modules.
            </p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
               <a 
                 href={storeUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-[#0056B3] text-white px-12 py-6 rounded-3xl font-black text-lg shadow-2xl shadow-blue-500/30 hover:-translate-y-2 transition-transform inline-block text-center"
               >
                 Visit GTech App Store
               </a>
               <button className="bg-slate-900 text-white px-12 py-6 rounded-3xl font-black text-lg shadow-2xl hover:-translate-y-2 transition-transform">
                 Become a Seller
               </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-slate-50 rounded-[50px] flex items-center justify-center p-12 border border-slate-100">
             <div className="text-9xl group-hover:scale-110 transition-transform duration-700">🛒</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
