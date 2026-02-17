
import React from 'react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=gothwadtechnologies@gmail.com";
  const storeUrl = "https://gtech-gothwad.github.io/gtech-store/";

  const shortcuts = [
    { label: 'Direct Gmail', icon: '📧', action: () => { window.open(gmailUrl, '_blank'); onClose(); } },
    { label: 'About Gothwad', icon: '🏢', action: () => { window.location.href = '#manifesto'; onClose(); } },
    { label: 'GTech App Store', icon: '🛒', action: () => { window.open(storeUrl, '_blank'); onClose(); } },
    { label: 'Technical Feedback', icon: '💬', action: () => { alert('Feedback module coming soon!'); onClose(); } },
    { label: 'Report an Issue', icon: '⚠️', action: () => { alert('Bug report module coming soon!'); onClose(); } },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - Instant appearance */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[150]"
        onClick={onClose}
      />
      
      {/* Drawer - Instant appearance, non-full screen width */}
      <div className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-[200] shadow-2xl flex flex-col border-l border-slate-100">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">Command Center</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-slate-400 font-bold text-[8px] uppercase tracking-widest">Gothwad Ecosystem Access</p>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-8">
          {/* Shortcuts Section */}
          <section>
            <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0056B3] mb-4">Quick Links</h4>
            <div className="grid grid-cols-1 gap-2">
              {shortcuts.map((s, i) => (
                <button 
                  key={i} 
                  onClick={s.action}
                  className="w-full flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:border-[#0056B3] hover:shadow-md transition-all text-left group"
                >
                  <span className="text-xl">{s.icon}</span>
                  <span className="font-bold text-slate-700 text-xs group-hover:text-slate-900 tracking-tight">{s.label}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-auto text-slate-300 group-hover:text-[#0056B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </section>

          {/* Contact Form Section */}
          <section>
            <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Inquiry</h4>
            <form className="space-y-3">
              <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3 py-3 focus:ring-1 focus:ring-[#0056B3] focus:bg-white outline-none text-[11px]" placeholder="Name" />
              <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3 py-3 focus:ring-1 focus:ring-[#0056B3] focus:bg-white outline-none text-[11px]" placeholder="Email" />
              <textarea rows={3} className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3 py-3 focus:ring-1 focus:ring-[#0056B3] focus:bg-white outline-none text-[11px]" placeholder="Message..."></textarea>
              <button type="button" className="w-full bg-slate-900 text-white py-3.5 rounded-lg font-black text-[9px] uppercase tracking-widest hover:bg-[#0056B3] transition-all">
                Send Request
              </button>
            </form>
          </section>
        </div>

        <div className="p-6 bg-slate-900 text-white">
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#0056B3] rounded-xl flex items-center justify-center text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Support</p>
              <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold hover:text-blue-300 transition-colors truncate block">gothwadtechnologies@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDrawer;
