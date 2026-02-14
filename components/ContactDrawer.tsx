
import React from 'react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[150] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[200] shadow-2xl transition-transform duration-500 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900">Get in Touch</h2>
              <p className="text-slate-400 font-medium">Let's build something incredible.</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form className="space-y-6 flex-grow">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Name</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#0056B3] focus:bg-white transition-all outline-none" placeholder="John Doe" />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
              <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#0056B3] focus:bg-white transition-all outline-none" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Interest</label>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#0056B3] focus:bg-white transition-all outline-none">
                <option>School Management App</option>
                <option>Custom App Development</option>
                <option>Game Development</option>
                <option>Consultation with CEO</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
              <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#0056B3] focus:bg-white transition-all outline-none" placeholder="Tell us about your project..."></textarea>
            </div>

            <button type="button" className="w-full bg-[#0056B3] text-white py-5 rounded-xl font-bold text-lg hover:bg-[#004494] shadow-xl transition-all">
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-slate-100">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#0056B3]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase">Direct Helpline</p>
                   <p className="text-lg font-black text-slate-900">+91 GOTHWAD-01</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDrawer;
