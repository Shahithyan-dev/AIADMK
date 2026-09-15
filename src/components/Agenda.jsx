import { useState } from 'react';
import { motion } from 'framer-motion';

const AGENDA = [
  { cat: 'Infrastructure', pri: 'HIGH', prob: 'Poor road conditions and outdated drainage.', prop: 'Comprehensive road upgrades and stormwater systems.', impact: 'Safer, more accessible neighbourhoods.', status: 'VISION' },
  { cat: 'Education', pri: 'HIGH', prob: 'Inadequate government school facilities.', prop: 'Infrastructure upgrades and digital classrooms.', impact: 'Better outcomes for thousands of students.', status: 'VISION' },
  { cat: 'Healthcare', pri: 'HIGH', prob: 'Limited primary healthcare access.', prop: 'PHC upgrades and mobile health units.', impact: 'Reduced healthcare costs for families.', status: 'VISION' },
  { cat: 'Employment', pri: 'HIGH', prob: 'Youth unemployment and skill gaps.', prop: 'Skill hubs, startup support and employment drives.', impact: 'Greater local employment and retention.', status: 'PROPOSED' },
  { cat: 'Women', pri: 'MEDIUM', prob: 'Limited opportunities and safety concerns.', prop: 'SHG support, safety programmes and welfare access.', impact: 'Greater economic independence.', status: 'PROPOSED' },
  { cat: 'Environment', pri: 'MEDIUM', prob: 'Lack of green spaces, waste issues.', prop: 'Urban greening, park development, waste management.', impact: 'Cleaner and healthier city spaces.', status: 'VISION' },
];

const CATS = ['All', 'Infrastructure', 'Education', 'Healthcare', 'Employment', 'Women', 'Environment'];
const STATUS_COLOR = { VISION: 'border-jade text-jade', PROPOSED: 'border-yellow-500 text-yellow-400', 'IN PROGRESS': 'border-blue-400 text-blue-400', COMPLETED: 'border-emerald-400 text-emerald-400' };

export default function Agenda() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? AGENDA : AGENDA.filter(a => a.cat === active);

  return (
    <section id="agenda" className="bg-white py-28 relative overflow-hidden">
      <span className="section-num right-0 top-8">04</span>

      <div className="wrap relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="divider" />
          <span className="label text-crimson">Development Priorities</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-font text-gray-900 mb-12"
          style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
        >
          AN AGENDA<br /><span className="text-jade">FOR ACTION</span>
        </motion.h2>

        <div className="flex flex-wrap gap-2 mb-10">
          {CATS.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className={`label px-4 py-2 border transition-all duration-200 ${
                active === c ? 'bg-jade border-jade text-gray-900' : 'border-gray-300/10 text-gray-600 hover:border-jade hover:text-jade'
              }`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {filtered.map((item, i) => (
            <motion.div
              key={`${item.cat}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="bg-gray-50 p-8 group hover:bg-gray-100 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="display-font text-jade tracking-widest text-lg">{item.cat}</span>
                <span className={`label border px-2 py-0.5 text-[9px] ${STATUS_COLOR[item.status] || 'border-ash text-gray-600'}`}>
                  {item.status}
                </span>
              </div>
              <div className="text-crimson label mb-1">{item.pri} PRIORITY</div>
              <div className="space-y-4 mt-4">
                <div>
                  <div className="label text-gray-600 mb-1 text-[9px]">THE PROBLEM</div>
                  <p className="text-gray-800/60 text-xs leading-relaxed">{item.prob}</p>
                </div>
                <div>
                  <div className="label text-gray-600 mb-1 text-[9px]">PROPOSED FOCUS</div>
                  <p className="text-gray-800/80 text-xs leading-relaxed">{item.prop}</p>
                </div>
                <div>
                  <div className="label text-jade mb-1 text-[9px]">EXPECTED IMPACT</div>
                  <p className="text-jade/70 text-xs leading-relaxed">{item.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

