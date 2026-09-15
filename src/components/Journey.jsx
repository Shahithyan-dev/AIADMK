import { motion } from 'framer-motion';
import { TIMELINE } from '../data/config';

export default function Journey() {
  return (
    <section id="journey" className="section-padding bg-brand-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="red-line" />
            <span className="section-label">First Electoral Journey</span>
          </div>
          <h2 className="section-title">The Journey Begins</h2>
          <p className="section-subtitle mt-4 max-w-xl">
            Every great public service story has a beginning. For Kartikeyan, it begins here — in Trichy East.
          </p>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300" />

          <div className="space-y-0">
            {TIMELINE.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Dot */}
                <div className={`absolute left-6 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  event.status === 'current'
                    ? 'bg-green-primary border-green-primary'
                    : 'bg-white border-gray-400'
                }`}>
                  {event.status === 'current' && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>

                <div className="group hover:bg-white p-6 -m-4 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-sm font-black tracking-wider uppercase ${
                      event.status === 'current' ? 'text-red-accent' : 'text-brand-muted'
                    }`}>
                      {event.year}
                    </span>
                    {event.status === 'current' && (
                      <span className="text-xs bg-green-primary text-gray-900 px-2 py-0.5 font-bold tracking-wider uppercase">
                        Now
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-brand-black mb-2">{event.title}</h3>
                  <p className="text-brand-mid text-sm leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

