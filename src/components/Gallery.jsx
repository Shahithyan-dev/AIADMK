import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';

const ALL_IMAGES = [
  '/blog/WhatsApp Image 2026-09-15 at 4.30.57 PM.jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.30.57 PM (1).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.30.57 PM (2).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM.jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM (1).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM (2).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM (3).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM (4).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM (5).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.30.59 PM (6).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.40.15 PM.jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM.jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (1).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (2).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (3).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (4).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (5).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (6).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (7).jpeg',
  '/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (8).jpeg',
];

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.97 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.97 }),
};

export default function Gallery() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const [perPage, setPerPage] = useState(10); // Default for initial render

  // Detect screen size to set images per page
  useEffect(() => {
    const handleResize = () => {
      setPerPage(window.innerWidth >= 1024 ? 10 : 5);
    };
    handleResize(); // Check immediately
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(ALL_IMAGES.length / perPage);

  const goTo = (newPage, direction) => {
    setDir(direction);
    setPage(newPage);
  };

  const next = () => goTo((page + 1) % totalPages, 1);
  const prev = () => goTo((page - 1 + totalPages) % totalPages, -1);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [page, totalPages]);

  const images = ALL_IMAGES.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="gallery" className="bg-gray-50 py-16 lg:py-24 relative overflow-hidden">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <div className="section-label-row">
              <div className="section-label-line" />
              <span className="section-label-text" style={{ color: 'red' }}>Campaign Trail</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-font text-gray-900 leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 0 }}
            >
              <span className="text-green-700">GALLERY</span>
            </motion.h2>
            <p className="text-gray-400 text-sm mt-3">
              {/* {ALL_IMAGES.length} moments · Page {page + 1} of {TOTAL_PAGES} */}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 text-gray-900 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            {/* Page dots */}
            <div className="flex items-center gap-2 px-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > page ? 1 : -1)}
                  className={`transition-all duration-400 rounded-full ${
                    i === page ? 'w-6 h-2 bg-green-700' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 text-gray-900 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Image Grid with AnimatePresence */}
        <div className="relative overflow-hidden rounded-2xl" style={{ minHeight: '520px' }}>
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={page}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-2 lg:grid-cols-5 gap-3"
            >
              {images.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                    i === 0 ? 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2' : ''
                  }`}
                  style={{ aspectRatio: i === 0 ? '1/1' : '3/4' }}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${page * perPage + i + 1}`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="text-white text-xs font-bold bg-green-600 px-2 py-1 rounded-full">
                      #{page * perPage + i + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="mt-8 h-0.5 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            key={page}
            className="h-full bg-green-600 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 6, ease: 'linear' }}
          />
        </div>
        {/* <div className="flex justify-between mt-3 text-xs text-gray-500">
          <span className="flex items-center gap-1.5"><Images size={12} /> Showing {images.length} of {ALL_IMAGES.length} photos</span>
          <span>Auto-advances in 6s</span>
        </div> */}

      </div>
    </section>
  );
}
