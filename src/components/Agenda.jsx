import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AGENDA = [
  { cat: 'INFRASTRUCTURE', pri: 'HIGH', status: 'VISION', prob: 'Poor road conditions and outdated drainage.', prop: 'Comprehensive road upgrades and stormwater systems.', impact: 'Safer, more accessible neighbourhoods.' },
  { cat: 'EDUCATION', pri: 'HIGH', status: 'VISION', prob: 'Government schools lack digital infrastructure.', prop: 'Smart classrooms and free local tuition centres.', impact: 'Competitive edge for government school students.' },
  { cat: 'HEALTHCARE', pri: 'HIGH', status: 'ACTION', prob: 'Overcrowded primary health centres.', prop: 'Upgrading PHCs with better diagnostic equipment.', impact: 'Faster, reliable local medical care.' },
  { cat: 'EMPLOYMENT', pri: 'MEDIUM', status: 'VISION', prob: 'Lack of local skill development for youth.', prop: 'Establishing a dedicated youth skill and placement cell.', impact: 'Higher local employment rates.' },
  { cat: 'WOMEN', pri: 'HIGH', status: 'ACTION', prob: 'Limited support for women entrepreneurs.', prop: 'Micro-finance facilitation and local markets for SHGs.', impact: 'Financial independence for local women.' },
  { cat: 'ENVIRONMENT', pri: 'MEDIUM', status: 'VISION', prob: 'Deteriorating local parks and green cover.', prop: 'Massive tree planting and park restoration drive.', impact: 'Cleaner air and better community spaces.' },
];

const CATS = ['ALL', ...new Set(AGENDA.map(a => a.cat))];
const STATUS_COLOR = {
  'VISION': 'border-green-700/20 text-green-700 bg-green-50',
  'ACTION': 'border-red-600/20 text-red-600 bg-red-50'
};

export default function Agenda() {
  const [active, setActive] = useState('ALL');
  const filtered = active === 'ALL' ? AGENDA : AGENDA.filter(a => a.cat === active);

  return (
    <section id="agenda" className="bg-white py-24 relative overflow-hidden">
      <div className="wrap relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-label-row">
            <div className="section-label-line" />
            <span className="section-label-text">Our Commitment</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-h2"
          >
            AN AGENDA<br /><span className="text-green-700">FOR ACTION</span>
          </motion.h2>
        </div>

        {/* Filters (Scrollable on mobile) */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-10 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATS.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className={`whitespace-nowrap font-bold text-[10px] tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300 ${
                active === c 
                  ? 'bg-green-700 text-white shadow-md' 
                  : 'bg-gray-50 text-gray-600 hover:bg-green-50 hover:text-green-700 border border-gray-100'
              }`}>
              {c}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.cat}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-4 sm:p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-shadow duration-300 flex flex-col"
              >
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-50 gap-2">
                  <span className="font-bold text-green-700 tracking-widest text-[10px] sm:text-sm uppercase leading-tight">{item.cat}</span>
                  <span className={`font-bold tracking-widest uppercase px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-[9px] border self-start sm:self-auto ${STATUS_COLOR[item.status] || 'border-gray-200 text-gray-600'}`}>
                    {item.status}
                  </span>
                </div>
                
                {/* Priority Label */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.pri === 'HIGH' ? 'bg-red-600' : 'bg-yellow-500'}`} />
                  <span className="text-gray-900 font-bold text-[8px] sm:text-[10px] tracking-widest uppercase">{item.pri} PRIORITY</span>
                </div>

                {/* Content Sections */}
                <div className="space-y-4 sm:space-y-5 flex-grow">
                  <div>
                    <div className="text-gray-400 font-bold tracking-widest text-[8px] sm:text-[9px] uppercase mb-1 sm:mb-1.5">The Problem</div>
                    <p className="text-gray-700 text-[10px] sm:text-sm leading-relaxed">{item.prob}</p>
                  </div>
                  <div>
                    <div className="text-gray-400 font-bold tracking-widest text-[8px] sm:text-[9px] uppercase mb-1 sm:mb-1.5">Proposed Focus</div>
                    <p className="text-gray-900 text-[10px] sm:text-sm leading-relaxed">{item.prop}</p>
                  </div>
                </div>

                {/* Impact Footer */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-50">
                  <div className="text-green-700 font-bold tracking-widest text-[8px] sm:text-[9px] uppercase mb-1 sm:mb-1.5">Expected Impact</div>
                  <p className="text-green-800 font-medium text-[10px] sm:text-sm leading-relaxed">{item.impact}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
