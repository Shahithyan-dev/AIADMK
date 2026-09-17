import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const NEWS = [
  { cat: 'NEWS', date: 'September 2026', title: 'C.Karthikeyan Launches Campaign for Trichy East', desc: 'Marking the beginning of his first electoral journey, C.Karthikeyan officially launches his campaign with a commitment to practical service for Trichy East.', img: '/blog/WhatsApp Image 2026-09-15 at 4.40.15 PM.jpeg', featured: true },
  { cat: 'STATEMENT', date: 'September 2026', title: 'Vision for a Stronger Trichy East', desc: 'Six-pillar vision for Trichy East focusing on infrastructure, education, healthcare and inclusive development.', img: '/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (1).jpeg' },
  { cat: 'EVENT', date: 'September 2026', title: 'Community Meeting — Ward Representatives', desc: 'C.Karthikeyan meets ward-level community representatives to understand ground-level concerns.', img: '/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (2).jpeg' },
  { cat: 'MEDIA', date: 'September 2026', title: 'AIADMK Announces Trichy East Candidate', desc: '[Editable: Add details of party announcement and media coverage.]', img: '/blog/WhatsApp Image 2026-09-15 at 4.40.16 PM (3).jpeg' },
];

export default function News() {
  const featured = NEWS.find(n => n.featured);
  const rest = NEWS.filter(n => !n.featured);
  
  const scrollRef = useRef(null);

  // Duplicate items many times so it just keeps scrolling forward
  const sliderItems = Array(20).fill(rest).flat();

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { clientWidth } = scrollRef.current;
        // Always scroll forward by one card smoothly
        scrollRef.current.scrollBy({ left: clientWidth * 0.85, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="news" className="bg-white py-16 lg:py-24 relative overflow-hidden">
      <div className="wrap relative z-10">
        <div className="section-header">
          <div className="section-label-row">
            <div className="section-label-line" />
            <span className="section-label-text">Newsroom</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-h2"
          >
            LATEST <span className="text-green-700">UPDATES</span>
          </motion.h2>
        </div>

        {/* Featured */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg mb-10 group cursor-pointer hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="overflow-hidden">
              <img src={featured.img} alt={featured.title}
                className="w-full h-64 md:h-72 lg:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="bg-gray-50 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex gap-3 mb-4">
                <span className="bg-crimson text-gray-900 text-[10px] font-bold px-3 py-1 tracking-wider">{featured.cat}</span>
                <span className="label text-gray-600">{featured.date}</span>
              </div>
              <h3 className="display-font text-gray-900 text-2xl lg:text-3xl tracking-wider mb-4 group-hover:text-jade transition-colors">{featured.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 md:line-clamp-none">{featured.desc}</p>
              <button className="label text-jade hover:text-gray-900 transition-colors flex items-center gap-2">READ MORE →</button>
            </div>
          </motion.div>
        )}

        {/* Grid - Horizontal Scroll Slider on Mobile, Grid on Desktop */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden" 
          style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sliderItems.map((item, i) => (
            <motion.article
              key={`${item.title}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-[85vw] sm:min-w-[320px] md:min-w-0 md:max-w-none snap-center flex flex-col"
            >
              <div className="overflow-hidden">
                <img src={item.img} alt={item.title}
                  className="w-full h-56 md:h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 md:p-7">
                <div className="flex gap-3 mb-3">
                  <span className="label text-crimson">{item.cat}</span>
                  <span className="label text-gray-600">{item.date}</span>
                </div>
                <h3 className="display-font text-gray-900 text-lg md:text-xl tracking-wide mb-2 group-hover:text-jade transition-colors line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">{item.desc}</p>
                <button className="mt-4 md:mt-auto pt-2 label text-jade hover:text-gray-900 transition-colors">READ MORE →</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


