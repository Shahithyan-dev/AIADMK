import { motion } from 'framer-motion';
import { TIMELINE } from '../data/config';

export default function Journey() {
  return (
    <section id="journey" className="section-padding bg-brand-light">
      <div className="container-custom">
        <div className="section-header">
          <div className="section-label-row">
            <div className="section-label-line" />
            <span className="section-label-text">First Electoral Journey</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-h2"
          >
            The Journey Begins
          </motion.h2>
          <p className="section-desc">
            Every great public service story has a beginning. For C.Karthikeyan, it begins here — in Trichy East.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300" />

            <div className="space-y-6">
            {TIMELINE.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16 group"
              >
                {/* Timeline Dot (Animated on hover) */}
                <div className={`absolute left-5 top-6 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg ${
                  event.status === 'current'
                    ? 'bg-green-600 shadow-[0_0_15px_rgba(22,163,74,0.5)]'
                    : 'bg-white border-4 border-gray-200'
                }`}>
                  {event.status === 'current' && (
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  )}
                </div>

                {/* Timeline Content Card */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-sm font-black tracking-widest uppercase ${
                      event.status === 'current' ? 'text-red-600' : 'text-gray-400'
                    }`}>
                      {event.year}
                    </span>
                    {event.status === 'current' && (
                      <span className="text-[10px] bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold tracking-widest uppercase">
                        Active Now
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">{event.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          </div>

          {/* Right Column: Image */}
          <div className="hidden lg:block relative h-full min-h-[600px] w-full pl-10">
            {/* Decorative Background Frame */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute right-0 top-10 bottom-0 w-4/5 border-2 border-red-600/20 rounded-2xl" 
            />

            {/* Decorative Dots Pattern */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -top-4 -right-4 w-32 h-32 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)',
                backgroundSize: '16px 16px'
              }}
            />

            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 bottom-10 left-0 right-10 rounded-2xl overflow-hidden shadow-2xl z-10 border-[6px] border-white"
            >
              <img src="/hero3.jpeg" alt="C.Karthikeyan in Trichy East" className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000" />
              
              {/* Subtle Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/10 to-transparent" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg border-l-4 border-green-600">
                <p className="text-gray-900 font-bold text-sm tracking-wider uppercase">Roots in Trichy</p>
                <p className="text-gray-500 text-xs mt-0.5">Grassroots leadership</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


