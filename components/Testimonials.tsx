
import React from 'react';

const reviews = [
  { name: 'Dr. Ramesh Sharma', org: 'Global Public School', text: 'School X has reduced our administrative workload by 60%. Highly recommend Gothwad Tech!' },
  { name: 'Sameer Verma', org: 'EduStart Solutions', text: 'The Gothwad Studio SDK is a masterpiece. It literally cut our development time in half.' },
  { name: 'Ankita Meena', org: 'Gamerz Zone', text: 'Working with Pawan was a breeze. They delivered a high-performance game in record time.' },
  { name: 'Rahul Chaudhary', org: 'S.R. Academy', text: 'The attendance and fee module in School X is the most stable we have ever used.' }
];

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
       <div className="text-center mb-16">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Success Stories</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-slate-900 leading-tight">Trusted by Industry Leaders</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-12 rounded-[40px] soft-shadow border border-slate-50 relative">
            <div className="text-[#0056B3] mb-6">
              {[1,2,3,4,5].map(star => (
                <span key={star} className="text-2xl">★</span>
              ))}
            </div>
            <p className="text-slate-600 text-lg italic leading-relaxed mb-8">"{r.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-100 rounded-full overflow-hidden">
                <img src={`https://picsum.photos/seed/rev${i}/100/100`} alt={r.name} />
              </div>
              <div>
                <h5 className="font-bold text-slate-900">{r.name}</h5>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">{r.org}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
