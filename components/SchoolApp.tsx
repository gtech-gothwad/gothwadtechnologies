
import React from 'react';

const features = [
  {
    title: '2,000+ Student Capacity',
    description: 'Optimized database architecture capable of handling massive student loads without performance drops.',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Advanced Admin Panel',
    description: 'Full control over staff, fee management, exam scheduling, and real-time attendance tracking.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Student/Parent Portal',
    description: 'Interactive dashboard for students to access lectures, homework, and track their academic progress.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'Instant Notifications',
    description: 'Firebase Cloud Messaging integration for instant alerts to parents regarding attendance or events.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
  }
];

const SchoolApp: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Flagship Product</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
            School X: The Gold Standard in <span className="text-[#0056B3]">Campus Management</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed">
            Revolutionizing 21st-century education with a seamless, high-capacity platform that connects students, teachers, and administrators.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-[#0056B3] rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{f.title}</h4>
                  <p className="text-sm text-slate-500 mt-1">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-6">
            <button className="bg-[#0056B3] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">
              Request Demo
            </button>
            <div className="flex -space-x-3">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-10 h-10 bg-[#0056B3] rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                  {i === 5 ? '99+' : ''}
                  {i < 5 && <img src={`https://picsum.photos/seed/stu${i}/100/100`} className="rounded-full w-full h-full object-cover" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="bg-[#0056B3] absolute inset-0 rounded-[40px] transform rotate-3 scale-95 opacity-10"></div>
          <div className="relative bg-white p-4 rounded-[40px] premium-shadow border border-slate-50 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              alt="School X Demo" 
              className="w-full h-auto rounded-[32px]"
            />
            {/* Overlay stats */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                 </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">System Status</p>
                <p className="text-sm font-black text-slate-900">100% Operational</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolApp;
