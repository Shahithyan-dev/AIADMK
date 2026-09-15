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
      <span className="section-num right-0 top-8">03</span>

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
            className="lg:col-span-1 bg-gray-100 border border-jade/20 p-10 flex flex-col items-center justify-center min-h-72 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'repeating-linear-gradient(0deg, #27ae6b 0, #27ae6b 1px, transparent 0, transparent 40px), repeating-linear-gradient(-90deg, #27ae6b 0, #27ae6b 1px, transparent 0, transparent 40px)' }} />
            <MapPin size={36} className="text-crimson mb-3 relative z-10 animate-float" />
            <div className="display-font text-gray-900 text-3xl tracking-widest text-center relative z-10">TRICHY EAST</div>
            <div className="label text-jade mt-2 relative z-10">TAMIL NADU</div>
            <div className="mt-4 text-xs text-gray-600 text-center relative z-10">Constituency Map Placeholder</div>
            <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-crimson rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping opacity-30 z-10" />
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


