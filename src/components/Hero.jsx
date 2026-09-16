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
    <section id="home" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={index}
            src={IMGS[index]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-top opacity-60"
            alt={`Hero Background ${index + 1}`}
          />
        </AnimatePresence>
        
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content Overlay */}
      <div className="w-full relative z-10 px-4 sm:px-6 lg:px-10 pb-16 flex flex-col items-start justify-center text-left">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/20 self-start"
        >
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-bold tracking-widest text-white text-[10px] sm:text-xs uppercase shadow-sm">
            {POLITICIAN.party} · {POLITICIAN.constituency}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="display-font text-white leading-none mb-4 sm:mb-6 drop-shadow-xl" 
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
        >
          C.KARTHI<span className="text-green-500">KEYAN</span>
        </motion.h1>

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px w-48 sm:w-64 max-w-full bg-gradient-to-r from-white/50 to-transparent mb-5 sm:mb-8 origin-left" 
        />

        {/* Subtext */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl"
        >
          <p className="serif-font text-base ss:text-xl lg:text-xl text-gray-200 italic leading-relaxed drop-shadow-md mb-6 sm:mb-10">
            A vision of progress, grounded in grassroots reality. Committed to elevating the lives of everyone in Trichy East.
          </p>

          <a 
            href="#vision"
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold tracking-widest text-xs sm:text-sm transition-all duration-300 hover:scale-105"
          >
            DISCOVER THE VISION
          </a>
        </motion.div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {IMGS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-500 rounded-full ${
                i === index ? 'w-8 h-1.5 bg-green-500' : 'w-2 h-1.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
