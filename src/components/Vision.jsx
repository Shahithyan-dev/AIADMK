import { motion } from 'framer-motion';

const VISION = [
  { n: '01', icon: '🏗️', title: 'Better Infrastructure', desc: 'Comprehensive roads, drainage, pavements and public utilities across every ward of Trichy East.' },
  { n: '02', icon: '🌿', title: 'Clean Communities', desc: 'Greener, healthier neighbourhoods through sanitation drives, parks and environmental action.' },
  { n: '03', icon: '🚀', title: 'Youth Opportunities', desc: 'Skill development, employment pipelines and leadership programmes MOVEMENT youth.' },
  { n: '04', icon: '🎓', title: 'Quality Education', desc: 'Stronger government schools, digital classrooms and accessible higher education support.' },
  { n: '05', icon: '❤️', title: 'Accessible Healthcare', desc: 'Affordable, quality primary healthcare for every family — no exceptions, no barriers.' },
  { n: '06', icon: '🤝', title: 'Inclusive Development', desc: 'Women, senior citizens, youth and marginalised communities at the centre of every policy.' },
];

export default function Vision() {
  return (
    <section id="vision" className="bg-white py-28 relative overflow-hidden">
      <span className="section-num right-0 top-8">02</span>

      <div className="wrap relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="divider" />
              <span className="label text-crimson">Looking Ahead</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-font text-gray-900"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
            >
              PIONEER OF COOPERATIVE<br />
              <span className="text-jade">MOVEMENT</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {VISION.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-gray-50 p-10 group hover:bg-gray-100 transition-all duration-400 cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl">{v.icon}</span>
                <span className="display-font text-6xl text-gray-900/5 group-hover:text-jade/20 transition-colors leading-none">
                  {v.n}
                </span>
              </div>
              <h3 className="display-font text-gray-900 text-2xl tracking-widest mb-4 group-hover:text-jade transition-colors">
                {v.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800/70 transition-colors">{v.desc}</p>
              <div className="mt-6 h-px bg-jade/0 group-hover:bg-jade/40 transition-all duration-400 w-0 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



