import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const IMGS = [
  "/blog/WhatsApp Image 2026-09-15 at 4.30.57 PM (1).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.30.57 PM (2).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.30.57 PM.jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM (1).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM (2).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM (3).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM (4).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM (5).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM (6).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM.jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.40.15 PM.jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (1).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (2).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (3).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (4).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (5).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (6).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (7).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (8).jpeg",
  "/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM.jpeg",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1 === IMGS.length ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? IMGS.length - 1 : prev - 1));
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      z: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      z: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="gallery" className="bg-gray-50 py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="section-header" style={{marginBottom: 0}}>
            <div className="section-label-row">
              <div className="section-label-line" />
              <span className="section-label-text">Campaign Trail</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-h2"
              style={{marginBottom: 0}}
            >
              GALL<span className="text-green-700">ERY</span>
            </motion.h2>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-4 md:translate-x-6">
            <button onClick={prev} className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-green-700 hover:border-green-700 transition-colors shadow-sm">
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
            <button onClick={next} className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-green-700 hover:border-green-700 transition-colors shadow-sm">
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200 flex items-center justify-center">
          
          {/* Placeholder/Loading state background */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
            <ImageIcon size={48} strokeWidth={1} className="mb-2 opacity-50" />
            <span className="text-sm font-medium tracking-widest uppercase">Loading Image...</span>
          </div>

          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={index}
              src={IMGS[index]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full h-full object-contain bg-black/5 backdrop-blur-sm z-10"
              alt={`Campaign Moment ${index + 1}`}
            />
          </AnimatePresence>
          
          {/* Number Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/50 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest">
            {index + 1} / {IMGS.length}
          </div>
        </div>

      </div>
    </section>
  );
}
