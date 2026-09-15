
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SECTIONS = [
  { h: 'Background', body: '[Editable — Add background, family and community roots in Trichy East.]' },
  { h: 'Education', body: '[Editable — Add educational qualifications and institutions.]' },
  { h: 'Professional Journey', body: '[Editable — Add career details and areas of expertise.]' },
  { h: 'Community Service', body: '[Editable — Add social service activities led by Kartikeyan.]' },
  { h: 'Political Journey', body: 'Kartikeyan is contesting from Trichy East for the first time in 2026, marking the beginning of his formal electoral journey under the AIADMK banner.' },
  { h: 'Leadership Values', body: 'Listen before speaking. Serve before asking. Deliver before claiming. Build lasting public trust through honest action.' },
];

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? SECTIONS : SECTIONS.slice(0, 3);

  return (
    <section id="about" className="bg-gray-50 py-28 relative overflow-hidden">
      {/* Ghost number */}
      <span className="section-num right-0 top-8 opacity-5">01</span>

      <div className="wrap relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="divider" />
          <span className="label text-crimson">Strengthening the Party Cadre</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-font text-gray-900 mb-16"
          style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
        >
          ORGANIZATION <span className="text-stroke">BUILDER</span>
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            {/* Green border accent */}
            <div className="absolute -top-3 -left-3 w-1/2 h-1/2 border border-jade/30 pointer-events-none z-0" />
            <div className="absolute -bottom-3 -right-3 w-1/2 h-1/2 border border-crimson/20 pointer-events-none z-0" />

            <img src="/hero2.jpeg" alt="Kartikeyan"
              className="relative z-10 w-full object-cover object-top grayscale-[20%] contrast-[1.05]"
              style={{ maxHeight: '600px' }} />

            {/* Card overlay */}
            <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0 bg-white/90 backdrop-blur-sm p-6 z-20 border-t border-green-700/30">
              <div className="label text-red-600 mb-1">AIADMK CANDIDATE</div>
              <div className="display-font text-2xl text-gray-900 tracking-widest">KARTIKEYAN</div>
              <div className="text-gray-600 text-xs mt-1 tracking-wider">Trichy East Constituency · Tamil Nadu</div>
            </div>
          </motion.div>

          {/* Bio */}
          <div className="lg:col-span-3">
            <blockquote className="serif-font text-xl text-gray-800/70 italic leading-relaxed border-l-2 border-jade pl-6 mb-10">
              "Entering electoral politics from Trichy East for the first time, bringing a commitment to practical
              service, open dialogue, and accountable leadership for every resident of this constituency."
            </blockquote>

            <div className="space-y-6">
              {visible.map((s, i) => (
                <motion.div
                  key={s.h}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group"
                >
                  <h3 className="label text-jade mb-2 group-hover:text-gray-900 transition-colors">{s.h}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                  <div className="w-8 h-px bg-gray-200 mt-4" />
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-8 flex items-center gap-2 label text-jade hover:text-gray-900 transition-colors"
            >
              {expanded ? <><ChevronUp size={14} /> Show Less</> : <><ChevronDown size={14} /> Read Full Profile</>}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


