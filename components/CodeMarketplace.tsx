
import React from 'react';

const products = [
  {
    title: 'Uber-Like Multi-Service App',
    category: 'Full Source Code',
    features: ['Real-time Tracking', 'Payment Gateway', 'Driver Panel'],
    price: '₹2,499',
    oldPrice: '₹9,999',
    tag: 'Best Seller'
  },
  {
    title: 'E-commerce Multi-Vendor',
    category: 'React Native + Node.js',
    features: ['Inventory System', 'Coupon Logic', 'Admin Panel'],
    price: '₹1,999',
    oldPrice: '₹7,499',
    tag: 'Trending'
  },
  {
    title: 'Social Media Engine (Instagram Clone)',
    category: 'Flutter/Firebase',
    features: ['Stories', 'Video Reels', 'Direct Chat'],
    price: '₹3,499',
    oldPrice: '₹12,000',
    tag: 'Enterprise'
  },
  {
    title: 'LMS - School Management App',
    category: 'PHP/Laravel Core',
    features: ['Attendance', 'Fees', 'Exam Reports'],
    price: '₹2,999',
    oldPrice: '₹15,000',
    tag: 'Educational'
  }
];

const CodeMarketplace: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20">
        <div className="max-w-2xl">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Source Code Hub</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 text-slate-900 leading-tight">
            Premium Assets. <br /> <span className="text-[#0056B3]">Lowest Prices.</span>
          </h2>
        </div>
        <div className="mt-8 md:mt-0">
          <button className="bg-[#0056B3] text-white px-8 py-4 rounded-2xl font-black hover:shadow-xl transition-all">
            View All 200+ Projects
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((p, i) => (
          <div key={i} className="group bg-white p-10 rounded-[40px] border border-slate-100 hover:border-blue-200 shadow-sm transition-all flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 aspect-square bg-slate-50 rounded-[30px] flex items-center justify-center p-8">
               <div className="text-5xl group-hover:scale-110 transition-transform">📦</div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest">{p.category}</span>
                <span className="bg-red-50 text-red-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{p.tag}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{p.title}</h3>
              <ul className="space-y-2 mb-8">
                {p.features.map(f => (
                  <li key={f} className="text-slate-500 text-sm flex items-center gap-2">
                    <span className="text-blue-500">✔</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-slate-400 text-xs line-through">{p.oldPrice}</p>
                  <p className="text-3xl font-black text-slate-900">{p.price}</p>
                </div>
                <button className="flex-grow bg-slate-900 text-white py-4 rounded-2xl font-black hover:bg-blue-600 transition-colors">
                  Get Source Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeMarketplace;
