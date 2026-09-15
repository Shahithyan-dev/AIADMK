import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { IconFacebook, IconInstagram, IconYoutube, IconTwitter } from './SocialIcons';
import { POLITICIAN } from '../data/config';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Vision', href: '#vision' },
  { label: 'Trichy East', href: '#constituency' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (href) => { 
    setOpen(false); 
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); 
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white ${
          scrolled ? 'shadow-md py-2' : 'py-4 border-b border-gray-200'
        }`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-700 via-red-600 to-green-700" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Logo Section */}
          <button onClick={() => go('#home')} className="flex items-center gap-3 group text-left">
            <div className="w-12 h-12 bg-green-700 flex items-center justify-center text-white font-bold text-2xl display-font shrink-0">
              K
            </div>
            <div className="hidden sm:block">
              <div className="display-font text-gray-900 text-2xl tracking-widest leading-none">
                {POLITICIAN.name.toUpperCase()}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-bold tracking-widest text-red-600 uppercase">{POLITICIAN.party}</span>
                <span className="text-gray-300 text-xs">|</span>
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">{POLITICIAN.constituency}</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {LINKS.map(l => (
              <button 
                key={l.href} 
                onClick={() => go(l.href)}
                className="text-[11px] font-bold uppercase tracking-widest text-gray-600 hover:text-green-700 transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <div className="hidden xl:flex items-center gap-3 border-l border-gray-200 pl-5">
              {[IconFacebook, IconInstagram, IconYoutube, IconTwitter].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-green-700 transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            
            <button 
              onClick={() => go('#contact')}
              className="hidden md:flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white font-bold text-[10px] tracking-widest uppercase px-5 py-2.5 transition-colors"
            >
              Connect <ChevronRight size={14} />
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setOpen(!open)} className="lg:hidden text-gray-900 p-2">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-8 pb-12 shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-700 via-red-600 to-green-700" />
            <nav className="flex flex-col gap-2 mt-8">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => go(l.href)}
                  className="display-font text-4xl text-gray-900 text-left py-3 border-b border-gray-100 hover:text-green-700 transition-colors tracking-widest"
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-8 flex gap-4 justify-center">
               {[IconFacebook, IconInstagram, IconYoutube, IconTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-full transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <button onClick={() => go('#contact')} className="mt-auto bg-green-700 text-white font-bold text-xs tracking-widest uppercase py-4 w-full text-center transition-colors hover:bg-green-800">
              Connect With Kartikeyan
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
