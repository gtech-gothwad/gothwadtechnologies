
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyAim from './components/CompanyAim';
import TrustBar from './components/TrustBar';
import Stats from './components/Stats';
import Services from './components/Services';
import CodeMarketplace from './components/CodeMarketplace';
import CustomSoftware from './components/CustomSoftware';
import GameEngine from './components/GameEngine';
import Process from './components/Process';
import Industries from './components/Industries';
import ProjectShowcase from './components/ProjectShowcase';
import AppStore from './components/AppStore';
import TechStack from './components/TechStack';
import Security from './components/Security';
import Comparison from './components/Comparison';
import SchoolApp from './components/SchoolApp';
import Roadmap from './components/Roadmap';
import DevTools from './components/DevTools';
import SupportTiers from './components/SupportTiers';
import Testimonials from './components/Testimonials';
import Leadership from './components/Leadership';
import FAQ from './components/FAQ';
import ContactDrawer from './components/ContactDrawer';
import Footer from './components/Footer';
import LoginView from './components/LoginView';

const App: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'landing' | 'login'>('landing');

  const logoUrl = "https://i.ibb.co/KxxyJK63/IMG-20260215-091905-778.webp";
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=gothwadtechnologies@gmail.com";
  const storeUrl = "https://gtech-gothwad.github.io/gtech-store/";

  const toggleLogin = () => {
    setCurrentView(currentView === 'landing' ? 'login' : 'landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'login') {
    return <LoginView onBack={() => setCurrentView('landing')} />;
  }

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden text-slate-900">
      <Navbar onOpenContact={() => setDrawerOpen(true)} onLogoClick={toggleLogin} />
      
      <main className="pt-[116px]">
        <Hero />
        <CompanyAim />
        <TrustBar />
        
        <section id="stats" className="py-24 relative overflow-hidden">
          <Stats />
        </section>

        {/* Quality Manifesto Section - Shining Glassmorphism */}
        <section id="manifesto" className="py-24 md:py-40 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-[120px] opacity-30"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="glass-card p-8 md:p-24 rounded-[40px] md:rounded-[60px] border border-white/50 shadow-2xl shadow-blue-500/5">
              <div className="max-w-4xl">
                <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-8">The Gothwad Manifesto</span>
                <h2 className="text-4xl md:text-8xl font-black mb-12 text-slate-900 leading-[0.95] tracking-tighter">
                  We Build Code That <br /> <span className="text-[#0056B3]">Never Sleeps.</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                  <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                    Every product leaving the Gothwad factory is a testament to rigorous engineering. We push for industrial-grade stability that handles millions of requests with zero latency.
                  </p>
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#0056B3] pl-6 py-2">
                      <h4 className="text-xl font-black text-slate-900 mb-2">Gothwad Accountability</h4>
                      <p className="text-slate-500 text-sm">Registered corporate-level protection for your business investment.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-6 py-2">
                      <h4 className="text-xl font-black text-slate-900 mb-2">Clean Engineering</h4>
                      <p className="text-slate-500 text-sm">Modular documentation designed for infinite scale.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 md:py-32">
          <Services />
        </section>

        {/* Email Direct Contact Section */}
        <section id="contact-email" className="py-16 md:py-24 bg-slate-200/50">
          <div className="container mx-auto px-6">
            <div className="glass-card p-8 md:p-12 rounded-[40px] md:rounded-[50px] border border-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-8">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#0056B3] rounded-[24px] md:rounded-[30px] flex items-center justify-center text-white shadow-2xl shadow-blue-500/30 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter">Get in Touch Directly</h3>
                  <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="text-lg md:text-2xl font-black text-[#0056B3] hover:text-slate-900 transition-colors flex items-center justify-center md:justify-start gap-2 underline decoration-2 md:decoration-4 underline-offset-8">
                    gothwadtechnologies@gmail.com
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              <button onClick={() => setDrawerOpen(true)} className="w-full lg:w-auto bg-slate-900 text-white px-10 md:px-14 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-[#0056B3] transition-all shadow-2xl hover:scale-105 active:scale-95">
                Open Project Desk
              </button>
            </div>
          </div>
        </section>

        <section id="code-marketplace" className="py-24 md:py-40">
          <CodeMarketplace />
        </section>

        <section id="impact" className="py-24 md:py-40 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 overflow-hidden rounded-[40px] md:rounded-[60px] border border-white/10 shadow-2xl">
              <div className="bg-slate-900 p-12 md:p-20 flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl md:text-5xl font-black mb-8 leading-none italic uppercase tracking-tighter">Global <br /> Architecture.</h3>
                  <p className="text-slate-400 text-lg">Powering institutional growth across 15+ countries with proprietary G-Cloud nodes.</p>
                </div>
                <div className="mt-20">
                  <div className="text-5xl md:text-6xl font-black text-[#0056B3]">24/7</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Uptime Reliability</p>
                </div>
              </div>
              <div className="lg:col-span-2 min-h-[300px] md:min-h-[400px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                  alt="Global Network" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="custom-software" className="py-24 md:py-32">
          <CustomSoftware />
        </section>

        <section id="game-engine" className="py-24 md:py-32">
          <GameEngine />
        </section>

        <section id="process" className="py-24 md:py-32">
          <Process />
        </section>

        <section id="tech-matrix" className="py-24 md:py-32">
          <TechStack />
        </section>

        <section id="industries" className="py-24 md:py-32">
          <Industries />
        </section>

        <section id="project-showcase" className="py-24 md:py-32">
          <ProjectShowcase />
        </section>

        <section id="comparison" className="py-24 md:py-32">
          <Comparison />
        </section>

        <section id="app-store" className="py-24 md:py-40">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 md:mb-24">
              <span className="text-[#0056B3] font-black uppercase tracking-[0.4em] text-xs">Official GTech Repository</span>
              <h2 className="text-5xl md:text-9xl font-black mt-4 text-slate-900 tracking-tighter uppercase leading-[0.85]">
                The <span className="text-[#0056B3]">Warehouse</span>
              </h2>
              <p className="text-slate-500 mt-6 md:mt-10 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                Elite software architecture, full-source code bundles, and production-ready assets.
              </p>
            </div>
            <AppStore />
          </div>
        </section>

        <section id="security" className="py-24 md:py-32">
          <Security />
        </section>

        <section id="school-x" className="py-24 md:py-32">
          <SchoolApp />
        </section>

        <section id="roadmap" className="py-24 md:py-32">
          <Roadmap />
        </section>

        <section id="studio" className="py-24 md:py-32">
          <DevTools />
        </section>

        <section id="support-tiers" className="py-24 md:py-32">
          <SupportTiers />
        </section>

        <section id="testimonials" className="py-24 md:py-32">
          <Testimonials />
        </section>

        <section id="leadership" className="py-24 md:py-32">
          <Leadership />
        </section>

        <section id="faq" className="py-24 md:py-32">
          <FAQ />
        </section>
      </main>

      <Footer onOpenContact={() => setDrawerOpen(true)} />

      {/* Left Side: Floating Buttons Stack (Logo + Warehouse) */}
      <div className="fixed bottom-6 left-6 z-[140] flex flex-col gap-4">
        {/* Identity Portal Button - Perfect Circle for Logo - ZOOMED IN */}
        <button 
          onClick={toggleLogin}
          className="bg-white p-4 md:p-5 rounded-full shadow-[0_15px_45px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform active:scale-95 group relative flex items-center justify-center border border-slate-200 overflow-hidden w-14 h-14 md:w-16 md:h-16"
        >
          <img src={logoUrl} alt="Gothwad Logo" className="w-full h-full object-cover scale-[1.7]" />
          <span className="absolute left-full ml-6 glass-card text-slate-900 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none hidden md:block">
            Access Identity Portal
          </span>
        </button>

        {/* Warehouse Button - Vibrant Green Theme */}
        <a 
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#22C55E] text-white p-4 md:p-5 rounded-full md:rounded-[24px] shadow-[0_15px_45px_rgba(34,197,94,0.3)] hover:scale-110 transition-transform active:scale-95 group relative flex items-center justify-center border border-white/20 w-14 h-14 md:w-16 md:h-16"
        >
          <span className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-white border-2 border-[#22C55E] rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-black text-[#22C55E] animate-bounce shadow-lg z-10">
            5
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="absolute left-full ml-6 glass-card text-slate-900 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none hidden md:block">
            GTech Warehouse
          </span>
        </a>
      </div>

      {/* Right Side: Floating Action Buttons Stack */}
      <div className="fixed bottom-6 right-6 z-[140] flex flex-col gap-4">
        <a 
          href="https://arena.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 md:p-5 rounded-[20px] md:rounded-[24px] shadow-[0_15px_45px_rgba(99,102,241,0.4)] hover:scale-110 transition-transform active:scale-95 group relative flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
          </svg>
          <span className="absolute right-full mr-6 glass-card text-slate-900 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none hidden md:block">
            Launch G-AI Assistant
          </span>
        </a>

        <a 
          href="https://wa.me/91XXXXXXXXXX" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 md:p-5 rounded-[20px] md:rounded-[24px] shadow-[0_15px_45px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform active:scale-95 group relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 448 512" fill="currentColor">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
          <span className="absolute right-full mr-6 glass-card text-slate-900 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none hidden md:block">
            Chat on WhatsApp
          </span>
        </a>

        <a 
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0056B3] text-white p-4 md:p-5 rounded-[20px] md:rounded-[24px] shadow-[0_15px_45px_rgba(0,86,179,0.4)] hover:scale-110 transition-transform active:scale-95 group relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="absolute right-full mr-6 glass-card text-slate-900 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none hidden md:block">
            Direct Gmail Dispatch
          </span>
        </a>
      </div>

      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default App;
