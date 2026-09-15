import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, ChevronRight } from 'lucide-react';
import { POLITICIAN } from '../data/config';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section id="home" ref={ref} className="relative min-h-screen bg-white flex items-center overflow-hidden pt-20 border-b border-gray-200">
      
      {/* Mobile Background Image (Visible only on mobile) */}
      <div className="absolute inset-0 lg:hidden z-0">
        <img src="/hero1.jpeg" alt="" className="w-full h-full object-cover object-top opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/95" />
      </div>

      <div className="wrap w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div style={{ y: textY }} className="py-20">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-16 bg-red-600" />
            <span className="label text-red-700">{POLITICIAN.party} · {POLITICIAN.constituency}</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-font text-gray-900 leading-none mb-6" 
            style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
          >
            C.KARTHI<span className="text-green-700">KEYAN</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, w: 0 }}
            animate={{ opacity: 1, w: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px w-full bg-gradient-to-r from-green-600 via-red-600 to-transparent mb-8" 
          />

          {/* Subtext */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-lg"
          >
            <p className="serif-font text-2xl text-gray-800 italic leading-relaxed mb-6 border-l-4 border-green-600 pl-6">
              "{POLITICIAN.tagline}"
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {POLITICIAN.shortBio}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:-translate-y-0.5"
            >
              Know C.Karthikeyan <ChevronRight size={15} />
            </button>
            <button
              onClick={() => document.querySelector('#vision')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-green-700 text-gray-800 font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:bg-gray-50"
            >
              Vision for Trichy East
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image (Clear and prominent) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-full hidden lg:block"
        >
          <div className="absolute inset-0 bg-green-700/5 translate-x-4 -translate-y-4" />
          <img 
            src="/hero1.jpeg" 
            alt="C.Karthikeyan"
            className="w-full h-[80vh] object-cover object-center shadow-2xl relative z-10 border border-gray-200" 
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => document.querySelector('#first-time')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 right-8 z-10 flex items-center gap-2 cursor-pointer group hidden md:flex"
      >
        <span className="label text-gray-500 group-hover:text-green-700 transition-colors">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ArrowDownRight size={20} className="text-green-700" />
        </motion.div>
      </motion.div>
    </section>
  );
}

