import { motion } from 'framer-motion';

const NEWS = [
  { cat: 'NEWS', date: 'September 2026', title: 'C.Karthikeyan Launches Campaign for Trichy East', desc: 'Marking the beginning of his first electoral journey, C.Karthikeyan officially launches his campaign with a commitment to practical service for Trichy East.', img: '/hero1.jpeg', featured: true },
  { cat: 'STATEMENT', date: 'September 2026', title: 'Vision for a Stronger Trichy East', desc: 'Six-pillar vision for Trichy East focusing on infrastructure, education, healthcare and inclusive development.', img: '/hero2.jpeg' },
  { cat: 'EVENT', date: 'September 2026', title: 'Community Meeting — Ward Representatives', desc: 'C.Karthikeyan meets ward-level community representatives to understand ground-level concerns.', img: '/hero3.jpeg' },
  { cat: 'MEDIA', date: 'September 2026', title: 'AIADMK Announces Trichy East Candidate', desc: '[Editable: Add details of party announcement and media coverage.]', img: '/hero1.jpeg' },
];

export default function News() {
  const featured = NEWS.find(n => n.featured);
  const rest = NEWS.filter(n => !n.featured);

  return (
    <section id="news" className="bg-gray-50 py-28 relative overflow-hidden">
      <span className="section-num right-0 top-8">05</span>

      <div className="wrap relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="divider" />
          <span className="label text-crimson">Newsroom</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-font text-gray-900 mb-16"
          style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
        >
          LATEST <span className="text-jade">UPDATES</span>
        </motion.h2>

        {/* Featured */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-px bg-gray-200 mb-px group cursor-pointer"
          >
            <div className="overflow-hidden">
              <img src={featured.img} alt={featured.title}
                className="w-full h-72 lg:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-700 grayscale-[20%]" />
            </div>
            <div className="bg-gray-100 p-12 flex flex-col justify-center">
              <div className="flex gap-3 mb-4">
                <span className="bg-crimson text-gray-900 text-[10px] font-bold px-3 py-1 tracking-wider">{featured.cat}</span>
                <span className="label text-gray-600">{featured.date}</span>
              </div>
              <h3 className="display-font text-gray-900 text-3xl tracking-wider mb-4 group-hover:text-jade transition-colors">{featured.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{featured.desc}</p>
              <button className="label text-jade hover:text-gray-900 transition-colors flex items-center gap-2">READ MORE →</button>
            </div>
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-200">
          {rest.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 group cursor-pointer hover:bg-smoke transition-colors duration-300"
            >
              <div className="overflow-hidden">
                <img src={item.img} alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[30%] group-hover:grayscale-0" />
              </div>
              <div className="p-7">
                <div className="flex gap-3 mb-3">
                  <span className="label text-crimson">{item.cat}</span>
                  <span className="label text-gray-600">{item.date}</span>
                </div>
                <h3 className="display-font text-gray-900 text-xl tracking-wide mb-2 group-hover:text-jade transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                <button className="mt-4 label text-jade hover:text-gray-900 transition-colors">READ MORE →</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


