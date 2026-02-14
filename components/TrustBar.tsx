
import React from 'react';

const TrustBar: React.FC = () => {
  const partners = ["Firebase", "AWS", "Google Cloud", "Razorpay", "GitHub", "Vercel", "Apple Dev", "Unity"];
  
  return (
    <div className="py-8 bg-slate-50 border-y border-slate-100 overflow-hidden select-none">
      <div className="flex gap-20 animate-infinite-scroll whitespace-nowrap items-center">
        {[...partners, ...partners, ...partners].map((p, i) => (
          <span key={i} className="text-slate-300 text-xl font-black uppercase tracking-[0.2em]">{p}</span>
        ))}
      </div>
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TrustBar;
