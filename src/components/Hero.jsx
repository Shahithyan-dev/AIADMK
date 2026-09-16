import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { POLITICIAN } from '../data/config';

const IMGS = [
  '/hero1.jpeg',
  '/hero2.jpeg',
  '/hero3.jpeg'
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-cycle the carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMGS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-[#FDFBF7] flex flex-col lg:flex-row items-center overflow-hidden pt-20">
      
      {/* Image Container: Top on mobile, Right on desktop */}
      <div className="w-full h-[50vh] relative lg:absolute lg:top-0 lg:right-0 lg:w-3/5 lg:h-full z-0 pointer-events-none">
        {/* Gradient for desktop to blend into the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/50 to-transparent z-10 hidden lg:block" />
        
        {/* Gradient for mobile to blend into the bottom content smoothly */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FDFBF7] to-transparent z-10 lg:hidden" />
        
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={IMGS[index]}
              className="w-full h-full object-cover object-top brightness-150 contrast-105 saturate-110 opacity-100"
              alt={`Hero Background ${index + 1}`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container: Bottom on mobile, Left on desktop */}
      <div className="w-full lg:w-1/2 relative z-10 px-4 sm:px-6 lg:px-10 py-10 lg:py-16 flex flex-col items-start justify-center text-left flex-1 bg-[#FDFBF7] lg:bg-transparent">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4 sm:mb-6 bg-white/60 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-gray-200 self-start shadow-sm"
        >
          <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
          <span className="font-bold tracking-widest text-gray-800 text-[10px] sm:text-xs uppercase">
            {POLITICIAN.party} · {POLITICIAN.constituency}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="display-font text-gray-900 leading-none mb-4 sm:mb-6 drop-shadow-sm" 
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
        >
          C.KARTHI<span className="text-green-700">KEYAN</span>
        </motion.h1>

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px w-48 sm:w-64 max-w-full bg-gradient-to-r from-gray-400 to-transparent mb-5 sm:mb-8 origin-left" 
        />

        {/* Subtext */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl"
        >
          <p className="serif-font text-base ss:text-xl lg:text-xl text-gray-600 italic leading-relaxed mb-6 sm:mb-10">
            A vision of progress, grounded in grassroots reality. Committed to elevating the lives of everyone in Trichy East.
          </p>

          <a 
            href="#vision"
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold tracking-widest text-xs sm:text-sm transition-all duration-300 hover:scale-105 shadow-md"
          >
            DISCOVER THE VISION
          </a>
        </motion.div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-5 left-4 sm:left-6 lg:left-10 flex items-center gap-3 z-20">
          {IMGS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-500 rounded-full ${
                i === index ? 'w-8 h-1.5 bg-green-700' : 'w-2 h-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
