import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { IconFacebook, IconInstagram, IconYoutube, IconTwitter } from './SocialIcons';

const SOCIAL = [
  { name: 'Facebook', Icon: IconFacebook, handle: '@C.KarthikeyanAIADMK', color: 'hover:bg-blue-900/30 hover:border-blue-500', accent: 'text-blue-400', desc: 'Campaign updates, community events and news from Trichy East.' },
  { name: 'Instagram', Icon: IconInstagram, handle: '@C.Karthikeyan_te', color: 'hover:bg-pink-900/20 hover:border-pink-500', accent: 'text-pink-400', desc: 'Behind-the-scenes visits, photos and community moments.' },
  { name: 'YouTube', Icon: IconYoutube, handle: 'C.Karthikeyan Official', color: 'hover:bg-red-900/30 hover:border-red-500', accent: 'text-red-400', desc: 'Speeches, interviews, public meetings and event recordings.' },
  { name: 'X / Twitter', Icon: IconTwitter, handle: '@C.Karthikeyan_TE', color: 'hover:bg-gray-200 hover:border-gray-300/40', accent: 'text-gray-900', desc: 'Real-time statements, policy thoughts and public responses.' },
];

export default function Social() {
  return (
    <section id="social" className="bg-gray-50 py-28 relative overflow-hidden">
      <div className="wrap">
        <div className="flex items-center gap-4 mb-4">
          <div className="divider" />
          <span className="label text-crimson">Stay Connected</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-font text-gray-900 mb-16"
          style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
        >
          FOLLOW <span className="text-jade">C.Karthikeyan</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {SOCIAL.map((s, i) => (
            <motion.a
              key={s.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gray-50 border border-gray-300/5 p-8 flex flex-col gap-5 group transition-all duration-400 ${s.color} cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <s.Icon size={26} className={`${s.accent} transition-transform group-hover:scale-110 duration-300`} />
                <ExternalLink size={14} className="text-gray-600 group-hover:text-gray-900 transition-colors opacity-0 group-hover:opacity-100" />
              </div>
              <div>
                <div className="display-font text-gray-900 text-xl tracking-widest">{s.name}</div>
                <div className={`label mt-0.5 ${s.accent} opacity-60 group-hover:opacity-100 transition-opacity`}>{s.handle}</div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}


