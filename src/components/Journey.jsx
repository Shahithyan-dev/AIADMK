import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { TIMELINE } from '../data/config';

// Using the requested images instead of hero images
const EVENT_IMAGES = [
  '/journey.png',
  '/i1.png',
  '/i2.png',
  '/journey_image.png'
];

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = TIMELINE[activeIndex];

  return (
    <section id="journey" className="py-16 lg:py-24 relative overflow-hidden bg-[#FDFBF7]">
      
      {/* Decorative Leaf Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl opacity-[0.03] pointer-events-none z-0">
        <img src="/leaf.png" alt="Leaf Background" className="w-full h-auto" />
      </div>

      <div className="wrap relative z-10">
        
        {/* Section Header */}
        <div className="section-header mb-16">
          <div className="section-label-row">
            <div className="section-label-line" />
            <span className="section-label-text">First Electoral Journey</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-h2 text-green-800"
          >
            OUR <span className="text-gray-900">JOURNEY</span>
          </motion.h2>
        </div>

        {/* Horizontal Timeline Navigation */}
        <div className="relative mb-20 max-w-4xl mx-auto">
          {/* Continuous Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0 hidden md:block" />

          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 relative z-10">
            {TIMELINE.map((event, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="flex flex-col items-center group relative focus:outline-none"
                >
                  {/* Two Leaves Icon Node */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border-2 ${
                    isActive 
                      ? 'bg-green-50 border-green-700 scale-110 shadow-lg' 
                      : 'bg-white border-gray-300 group-hover:border-green-400'
                  }`}>
                    <img 
                      src="/leaf.png" 
                      alt="Leaf Icon" 
                      className={`w-8 h-8 object-contain transition-all duration-300 mix-blend-multiply ${isActive ? 'opacity-100 scale-110' : 'opacity-40 group-hover:opacity-100'}`} 
                    />
                  </div>
                  
                  {/* Year Label */}
                  <span className={`mt-3 font-bold transition-colors duration-300 ${
                    isActive ? 'text-green-700 text-lg' : 'text-gray-400 text-sm'
                  }`}>
                    {event.year}
                  </span>

                  {/* Highlight active indicator */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute -inset-x-4 -inset-y-2 border border-green-200 rounded-lg pointer-events-none"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Display Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start"
            >
              
              {/* Left: Image Box */}
              <div className="lg:col-span-5 w-full flex items-center justify-center">
                <img 
                  src={EVENT_IMAGES[activeIndex % EVENT_IMAGES.length]} 
                  alt={activeEvent.title}
                  className="w-full h-auto object-contain rounded-2xl shadow-xl border border-gray-100"
                />
              </div>

              {/* Right: Text Content */}
              <div className="lg:col-span-7 flex flex-col justify-center h-full py-4 lg:py-10">
                {/* Year Badge */}
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-900 font-bold px-4 py-1.5 rounded-lg self-start mb-6 shadow-sm">
                  <span>{activeEvent.year}</span>
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <ChevronRight size={14} className="text-green-700" />
                  </div>
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6 display-font">
                  {activeEvent.title}
                </h3>
                
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl border-l-4 border-green-200 pl-6">
                  {activeEvent.description}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
