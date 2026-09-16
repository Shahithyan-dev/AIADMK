import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const ISSUES = [
  { icon: '🛣️', title: 'Roads & Infrastructure' },
  { icon: '💧', title: 'Drinking Water' },
  { icon: '🌊', title: 'Drainage' },
  { icon: '🧹', title: 'Cleanliness' },
  { icon: '📚', title: 'Education' },
  { icon: '🏥', title: 'Healthcare' },
  { icon: '💼', title: 'Employment' },
  { icon: '👩', title: "Women's Dev." },
  { icon: '🏃', title: 'Youth' },
  { icon: '🚌', title: 'Transport' },
  { icon: '🏪', title: 'Local Biz' },
  { icon: '👴', title: 'Senior Citizens' },
];

export default function Constituency() {
  return (
    <section id="constituency" className="bg-gray-50 py-28 relative overflow-hidden">


      <div className="wrap relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="divider" />
          <span className="label text-crimson">Our Ground</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-font text-gray-900 mb-4"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          TRICHY <span className="text-jade">EAST</span>
        </motion.h2>
        <p className="serif-font text-gray-800/60 italic text-xl mb-16 max-w-lg">
          "Understanding our constituency is the first step to serving it."
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-white border border-gray-200 rounded-xl overflow-hidden relative shadow-sm group"
          >
            <img 
              src="/map.jpeg" 
              alt="Map of Trichy East Constituency" 
              className="w-full h-full object-cover min-h-[300px] transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay label */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-sm border border-white">
              <div className="flex items-center gap-3 mb-1">
                <MapPin size={20} className="text-red-600" />
                <div className="display-font text-gray-900 text-xl tracking-widest leading-none">TRICHY EAST</div>
              </div>
              <div className="text-gray-500 font-bold tracking-widest text-[9px] uppercase pl-8">Tamil Nadu Constituency</div>
            </div>
          </motion.div>

          {/* Issues */}
          <div className="lg:col-span-2 grid grid-cols-3 sm:grid-cols-4 gap-px bg-gray-200">
            {ISSUES.map((iss, i) => (
              <motion.div
                key={iss.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-gray-50 p-5 flex flex-col items-center text-center gap-3 hover:bg-gray-100 group transition-all duration-300 cursor-default"
              >
                <span className="text-2xl">{iss.icon}</span>
                <span className="label text-gray-600 group-hover:text-jade transition-colors text-[9px]">{iss.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


