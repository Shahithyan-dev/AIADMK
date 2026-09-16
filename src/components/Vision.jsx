import { motion } from 'framer-motion';
import { Building2, Leaf, Target, BookOpen, HeartPulse, Users, ArrowUpRight } from 'lucide-react';

const VISION = [
  { 
    n: '01', 
    Icon: Building2, 
    title: 'Better Infrastructure', 
    desc: 'Comprehensive roads, drainage, pavements and public utilities across every ward of Trichy East.', 
    accent: '#2563eb', 
    bg: 'bg-blue-50',
    colSpan: 'md:col-span-2 lg:col-span-2 lg:row-span-2',
    isLarge: true
  },
  { 
    n: '02', 
    Icon: Leaf, 
    title: 'Clean Communities', 
    desc: 'Greener, healthier neighbourhoods through sanitation drives and environmental action.', 
    accent: '#16a34a', 
    bg: 'bg-green-50',
    colSpan: 'md:col-span-1 lg:col-span-1',
    isLarge: false
  },
  { 
    n: '03', 
    Icon: Target, 
    title: 'Youth Opportunities', 
    desc: 'Skill development, employment pipelines and leadership programmes.', 
    accent: '#ea580c', 
    bg: 'bg-orange-50',
    colSpan: 'md:col-span-1 lg:col-span-1',
    isLarge: false
  },
  { 
    n: '04', 
    Icon: BookOpen, 
    title: 'Quality Education', 
    desc: 'Stronger government schools, digital classrooms and accessible higher education support.', 
    accent: '#7c3aed', 
    bg: 'bg-purple-50',
    colSpan: 'md:col-span-1 lg:col-span-1',
    isLarge: false
  },
  { 
    n: '05', 
    Icon: HeartPulse, 
    title: 'Accessible Healthcare', 
    desc: 'Affordable, quality primary healthcare for every family — no exceptions, no barriers.', 
    accent: '#dc2626', 
    bg: 'bg-red-50',
    colSpan: 'md:col-span-1 lg:col-span-1',
    isLarge: false
  },
  { 
    n: '06', 
    Icon: Users, 
    title: 'Inclusive Development', 
    desc: 'Women, senior citizens, youth and marginalised communities at the centre of every policy.', 
    accent: '#0d9488', 
    bg: 'bg-teal-50',
    colSpan: 'md:col-span-2 lg:col-span-2 lg:row-span-1',
    isLarge: true
  },
];

export default function Vision() {
  return (
    <section id="vision" className="bg-[#FDFBF7] py-16 lg:py-24 relative overflow-hidden">
      <div className="wrap relative z-10">

        {/* Header */}
        <div className="section-header">
          <div className="section-label-row">
            <div className="section-label-line" />
            <span className="section-label-text">Looking Ahead</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-h2"
          >
            OUR <span className="text-green-700">VISION</span>
          </motion.h2>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {VISION.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 ${v.bg} ${v.colSpan} cursor-pointer shadow-sm`}
            >
              {/* Animated Gradient Background on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${v.accent}, transparent)` }}
              />

              {/* Top Row: Icon & Number */}
              <div className="flex items-start justify-between relative z-10">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md bg-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ color: v.accent }}
                >
                  <v.Icon size={28} strokeWidth={2} />
                </div>
                
                {/* Large Background Ghost Number */}
                <span 
                  className="display-font absolute -top-4 -right-2 text-[8rem] leading-none opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ color: v.accent }}
                >
                  {v.n}
                </span>

                {/* Arrow Icon */}
                <ArrowUpRight 
                  size={24} 
                  className="text-gray-300 group-hover:text-gray-600 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0" 
                />
              </div>

              {/* Bottom Row: Text Content */}
              <div className="relative z-10 mt-auto">
                <span 
                  className="text-[10px] font-black tracking-widest uppercase mb-2 block"
                  style={{ color: v.accent }}
                >
                  Pillar {v.n}
                </span>
                <h3 className={`display-font text-gray-900 mb-2 ${v.isLarge ? 'text-3xl md:text-5xl' : 'text-2xl'} leading-tight`}>
                  {v.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${v.isLarge ? 'text-base md:text-lg max-w-xl' : 'text-sm'}`}>
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
