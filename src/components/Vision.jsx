import { motion } from 'framer-motion';
import { Building2, Leaf, Target, BookOpen, HeartPulse, Users } from 'lucide-react';

const VISION = [
  { n: '01', Icon: Building2, title: 'Better Infrastructure', desc: 'Comprehensive roads, drainage, pavements and public utilities across every ward of Trichy East.' },
  { n: '02', Icon: Leaf, title: 'Clean Communities', desc: 'Greener, healthier neighbourhoods through sanitation drives, parks and environmental action.' },
  { n: '03', Icon: Target, title: 'Youth Opportunities', desc: 'Skill development, employment pipelines and leadership programmes for the youth.' },
  { n: '04', Icon: BookOpen, title: 'Quality Education', desc: 'Stronger government schools, digital classrooms and accessible higher education support.' },
  { n: '05', Icon: HeartPulse, title: 'Accessible Healthcare', desc: 'Affordable, quality primary healthcare for every family — no exceptions, no barriers.' },
  { n: '06', Icon: Users, title: 'Inclusive Development', desc: 'Women, senior citizens, youth and marginalised communities at the centre of every policy.' },
];

export default function Vision() {
  return (
    <section id="vision" className="bg-gray-50 py-24 relative overflow-hidden">
      <div className="wrap relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-red-600" />
              <span className="label text-red-600 font-bold uppercase tracking-widest text-xs">Looking Ahead</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-font text-gray-900 leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              PIONEER OF COOPERATIVE<br />
              <span className="text-green-700">MOVEMENT</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {VISION.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl p-5 sm:p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-50 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                  <v.Icon size={20} className="sm:w-6 sm:h-6" strokeWidth={1.5} />
                </div>
                <span className="font-bold text-gray-200 text-3xl sm:text-4xl group-hover:text-red-100 transition-colors">
                  {v.n}
                </span>
              </div>
              
              <h3 className="font-bold text-gray-900 text-sm sm:text-lg mb-3 leading-tight group-hover:text-green-700 transition-colors">
                {v.title}
              </h3>
              
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-auto">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



