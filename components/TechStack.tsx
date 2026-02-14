
import React from 'react';

const TechStack: React.FC = () => {
  const categories = [
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Flutter', 'Redux', 'Vue.js'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'Laravel', 'Python', 'Go', 'PHP', 'Strapi'] },
    { name: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'MySQL', 'DynamoDB'] },
    { name: 'Mobile', items: ['React Native', 'Swift', 'Kotlin', 'Java', 'Capacitor', 'Expo'] },
    { name: 'DevOps', items: ['AWS', 'Docker', 'Nginx', 'Vercel', 'DigitalOcean', 'Cloudflare'] }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Weapons</span>
        <h2 className="text-4xl md:text-6xl font-black mt-4 text-slate-900">The Gothwad Tech Matrix</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {categories.map((cat, i) => (
          <div key={i} className="space-y-6">
            <h4 className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] border-b border-slate-100 pb-4">{cat.name}</h4>
            <div className="flex flex-col gap-4">
              {cat.items.map(item => (
                <div key={item} className="flex items-center gap-3 group cursor-default">
                  <div className="w-1.5 h-1.5 bg-slate-200 rounded-full group-hover:bg-[#0056B3] group-hover:scale-150 transition-all"></div>
                  <span className="text-slate-500 font-bold text-sm group-hover:text-slate-900 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
