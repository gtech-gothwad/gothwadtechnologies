
import React from 'react';

const SupportTiers: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
       <div className="text-center mb-24">
        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Sustainability Model</span>
        <h2 className="text-4xl md:text-6xl font-black mt-4 text-slate-900 tracking-tighter">Support Without Friction</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: 'Lite Protocol',
            target: 'For Startups',
            features: ['3 Months Bug Resolution', 'Installation Manifest', 'Full Documentation', 'Community Discord Access'],
            cta: 'Included',
            color: 'bg-white text-slate-900 border-slate-100'
          },
          {
            name: 'Core Maintenance',
            target: 'For Scaleups',
            features: ['Dedicated WhatsApp Node', '99.9% Server Monitoring', 'Quarterly Updates', 'Security Audits', 'G-Cloud Priority'],
            cta: '₹4,999 / Year',
            color: 'bg-[#0056B3] text-white border-transparent'
          },
          {
            name: 'Apex VIP',
            target: 'For Enterprises',
            features: ['Private Engineering Slack', 'Direct CEO Consultation', 'Custom UI/UX Expansion', 'Full IP Rights Transfer', 'On-Site Integration'],
            cta: 'Custom Quote',
            color: 'bg-slate-900 text-white border-transparent'
          }
        ].map((tier, i) => (
          <div key={i} className={`${tier.color} p-14 rounded-[54px] shadow-2xl border flex flex-col justify-between group hover:-translate-y-4 transition-all duration-500`}>
            <div>
              <div className="flex justify-between items-start mb-10">
                <h4 className="text-2xl font-black leading-tight">{tier.name}</h4>
                <div className={`w-3 h-3 rounded-full ${tier.color.includes('white') ? 'bg-[#0056B3]' : 'bg-white/20'}`}></div>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-10">{tier.target}</p>
              <ul className="space-y-5">
                {tier.features.map(f => (
                  <li key={f} className="text-sm font-medium flex items-center gap-4">
                    <span className={`w-1.5 h-1.5 rounded-full ${tier.color.includes('white') ? 'bg-[#0056B3]' : 'bg-blue-400'}`}></span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <button className={`w-full py-5 rounded-2xl font-black mt-14 transition-all uppercase text-[10px] tracking-[0.2em] ${
              tier.color.includes('white') ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
            } group-hover:scale-105 shadow-xl`}>
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportTiers;
