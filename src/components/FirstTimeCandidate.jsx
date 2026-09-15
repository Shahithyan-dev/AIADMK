import { motion } from 'framer-motion';

const items = [
  { n: '01', word: 'LISTEN', sub: 'Hearing every neighbourhood, every concern, every voice of Trichy East — without exception.' },
  { n: '02', word: 'SERVE', sub: 'Practical, on-the-ground public service focused on real problems that affect daily life.' },
  { n: '03', word: 'DELIVER', sub: 'Converting people\'s trust into measurable, transparent and accountable action.' },
];

export default function FirstTimeCandidate() {
  return (
    <section id="first-time" className="bg-gray-100 py-28 relative overflow-hidden">
      {/* Large ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="display-font text-[20vw] text-gray-900/[0.03] tracking-widest whitespace-nowrap">IMPACT</span>
      </div>

      <div className="wrap relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="divider" />
              <span className="label text-crimson">Facilitator of Change</span>
            </div>
            <h2 className="display-font text-gray-900 leading-tight mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              IMPACT.<br />
              <span className="text-jade">STRONG ROOTS.</span><br />
              REAL RESULTS.
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-md">
              C.Karthikeyan enters electoral politics from Trichy East for the IMPACT in 2026 — bringing energy,
              a clean slate, and an uncompromising commitment to the people of this constituency.
            </p>
            <div className="mt-8 inline-block border border-gray-300/10 px-6 py-3">
              <span className="label text-gray-600">AIADMK · TRICHY EAST · 2026 ELECTION</span>
            </div>
          </motion.div>

          <div className="space-y-0 divide-y divide-white/10">
            {items.map((it, i) => (
              <motion.div
                key={it.n}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="py-8 flex gap-8 group hover:bg-gray-200 px-4 -mx-4 transition-all duration-300"
              >
                <div className="display-font text-6xl text-gray-900/10 group-hover:text-crimson transition-colors duration-300 leading-none shrink-0 w-16">
                  {it.n}
                </div>
                <div>
                  <h3 className="display-font text-3xl text-gray-900 tracking-widest mb-3 group-hover:text-jade transition-colors">
                    {it.word}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{it.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



