import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function PeoplesVoice() {
  const [form, setForm] = useState({ name: '', area: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const sub = e => { e.preventDefault(); setSent(true); setForm({ name: '', area: '', phone: '', message: '' }); setTimeout(() => setSent(false), 6000); };

  return (
    <section id="voice" className="bg-gray-100 py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #27ae6b 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <div className="wrap relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="divider" />
              <span className="label text-crimson">Direct Engagement</span>
            </div>
            <h2 className="display-font text-gray-900 mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
              YOUR VOICE<br /><span className="text-jade">MATTERS</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-md">
              C.Karthikeyan believes in open, direct dialogue. Share your concern, suggest an idea, or request a
              meeting — every message is read personally.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '💬', label: 'Share a Concern' },
                { emoji: '💡', label: 'Suggest an Idea' },
                { emoji: '⚠️', label: 'Report an Issue' },
                { emoji: '📅', label: 'Request Meeting' },
              ].map(({ emoji, label }) => (
                <div key={label} className="border border-gray-300/10 p-5 hover:border-jade group transition-colors duration-300 cursor-pointer">
                  <div className="text-2xl mb-2">{emoji}</div>
                  <div className="label text-gray-600 group-hover:text-jade transition-colors">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-crimson p-6 flex items-center justify-between gap-4">
              <div>
                <div className="display-font text-gray-900 text-xl tracking-widest">SPEAK DIRECTLY</div>
                <div className="label text-gray-900/70 mt-1">Campaign Office — Open to All</div>
              </div>
              <span className="display-font text-gray-900 text-xl">+91 XXXXX XXXXX</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-white p-10 border border-gray-300/10">
              <div className="display-font text-2xl text-gray-900 tracking-widest mb-1">SEND A MESSAGE</div>
              <div className="h-px bg-jade mb-8" />
              {sent ? (
                <div className="border border-jade p-6 text-jade label tracking-wider">
                  ✓ RECEIVED — WE'LL BE IN TOUCH SHORTLY.
                </div>
              ) : (
                <form onSubmit={sub} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your Name *"
                      className="bg-gray-50 border border-gray-300/10 focus:border-jade px-4 py-3 text-sm text-gray-800 placeholder-ash/50 outline-none transition-colors w-full" />
                    <input value={form.area} onChange={e => setForm({ ...form, area: e.target.value })}
                      placeholder="Area / Ward"
                      className="bg-gray-50 border border-gray-300/10 focus:border-jade px-4 py-3 text-sm text-gray-800 placeholder-ash/50 outline-none transition-colors w-full" />
                  </div>
                  <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="Phone Number"
                    className="bg-gray-50 border border-gray-300/10 focus:border-jade px-4 py-3 text-sm text-gray-800 placeholder-ash/50 outline-none transition-colors w-full" />
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Your message or concern *"
                    className="bg-gray-50 border border-gray-300/10 focus:border-jade px-4 py-3 text-sm text-gray-800 placeholder-ash/50 outline-none transition-colors w-full resize-none" />
                  <button type="submit" className="btn-green w-full justify-center gap-3">
                    <Send size={15} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


