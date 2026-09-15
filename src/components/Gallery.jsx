import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const CATS = ['All', 'People', 'Meetings', 'Events', 'Youth', 'Women'];
const IMGS = [
  { src: '/hero1.jpeg', cat: 'Meetings', cap: 'Community Engagement · Trichy East' },
  { src: '/hero2.jpeg', cat: 'People', cap: 'Meeting with Residents' },
  { src: '/hero3.jpeg', cat: 'Events', cap: 'Campaign Launch 2026' },
  { src: '/hero1.jpeg', cat: 'Youth', cap: 'Youth Dialogue Programme' },
  { src: '/hero2.jpeg', cat: 'Women', cap: "Women's Empowerment Session" },
  { src: '/hero3.jpeg', cat: 'People', cap: 'Door-to-door Outreach' },
  { src: '/hero1.jpeg', cat: 'Meetings', cap: 'Ward Representatives Forum' },
  { src: '/hero2.jpeg', cat: 'Events', cap: 'Public Rally · Trichy East' },
  { src: '/hero3.jpeg', cat: 'Youth', cap: 'Youth Leadership Meet' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lb, setLb] = useState(null);
  const filtered = active === 'All' ? IMGS : IMGS.filter(g => g.cat === active);

  return (
    <section id="gallery" className="bg-white py-28 relative overflow-hidden">
      <span className="section-num right-0 top-8">06</span>

      <div className="wrap relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="divider" />
          <span className="label text-crimson">Photo Gallery</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-font text-gray-900 mb-12"
          style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
        >
          GALLERY
        </motion.h2>

        <div className="flex flex-wrap gap-2 mb-10">
          {CATS.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className={`label px-4 py-2 border transition-all duration-200 ${active === c ? 'bg-jade border-jade text-gray-900' : 'border-gray-300/10 text-gray-600 hover:border-jade hover:text-jade'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 gap-2 space-y-2">
          {filtered.map((img, i) => (
            <motion.div
              key={`${img.src}-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.04 }}
              onClick={() => setLb(img)}
              className="break-inside-avoid relative group cursor-pointer mb-2"
            >
              <img src={img.src} alt={img.cap}
                className="w-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={26} className="text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-onyx/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="label text-jade text-[9px]">{img.cap}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/97 flex items-center justify-center p-6"
            onClick={() => setLb(null)}
          >
            <button className="absolute top-6 right-6 text-gray-600 hover:text-crimson transition-colors">
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={lb.src} alt={lb.cap}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={e => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 label text-jade">{lb.cap}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


