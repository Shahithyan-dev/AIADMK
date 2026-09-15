import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', area: '', msg: '' });
  const [sent, setSent] = useState(false);
  const sub = e => { e.preventDefault(); setSent(true); setForm({ name: '', phone: '', email: '', area: '', msg: '' }); setTimeout(() => setSent(false), 6000); };

  return (
    <section id="contact" className="bg-white py-28 relative overflow-hidden">
      <span className="section-num right-0 top-8">07</span>

      <div className="wrap relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="divider" />
          <span className="label text-crimson">Get in Touch</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-font text-gray-900 mb-16"
          style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
        >
          CONNECT WITH<br /><span className="text-jade">C.Karthikeyan</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="border border-gray-300/10 p-10 mb-8">
              <div className="display-font text-jade text-2xl tracking-widest mb-1">CAMPAIGN OFFICE</div>
              <div className="h-px bg-jade mb-8" />
              <div className="space-y-5">
                {[
                  { Icon: MapPin, text: 'Campaign Office, Trichy East, Tamil Nadu' },
                  { Icon: Phone, text: '+91 XXXXX XXXXX' },
                  { Icon: Mail, text: 'connect@C.Karthikeyan.in' },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-4 text-gray-600">
                    <Icon size={16} className="text-jade shrink-0" />
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden">
              <img src="/hero3.jpeg" alt="Campaign Office"
                className="w-full h-48 object-cover grayscale-[30%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="display-font text-gray-900 tracking-widest text-lg">TRICHY EAST</div>
                <div className="label text-jade">Campaign Headquarters</div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-gray-50 border border-gray-300/10 p-10">
              <div className="display-font text-gray-900 text-xl tracking-widest mb-6">SEND A MESSAGE</div>
              {sent ? (
                <div className="border border-jade p-6 text-jade label">✓ MESSAGE RECEIVED — WE'LL RESPOND SHORTLY.</div>
              ) : (
                <form onSubmit={sub} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Full Name *"
                      className="bg-white border border-gray-300/10 focus:border-jade px-4 py-3 text-sm text-gray-800 placeholder-ash/40 outline-none transition-colors w-full" />
                    <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="Phone *"
                      className="bg-white border border-gray-300/10 focus:border-jade px-4 py-3 text-sm text-gray-800 placeholder-ash/40 outline-none transition-colors w-full" />
                  </div>
                  <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="Email"
                    className="bg-white border border-gray-300/10 focus:border-jade px-4 py-3 text-sm text-gray-800 placeholder-ash/40 outline-none transition-colors w-full" />
                  <input value={form.area} onChange={e => setForm({ ...form, area: e.target.value })}
                    placeholder="Area / Ward"
                    className="bg-white border border-gray-300/10 focus:border-jade px-4 py-3 text-sm text-gray-800 placeholder-ash/40 outline-none transition-colors w-full" />
                  <textarea required rows={6} value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}
                    placeholder="Your message *"
                    className="bg-white border border-gray-300/10 focus:border-jade px-4 py-3 text-sm text-gray-800 placeholder-ash/40 outline-none transition-colors w-full resize-none" />
                  <button type="submit" className="btn-green w-full justify-center gap-3 py-4">
                    <Send size={15} /> SEND MESSAGE
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


