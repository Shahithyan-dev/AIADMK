import { IconFacebook, IconInstagram, IconYoutube, IconTwitter } from './SocialIcons';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Vision', href: '#vision' },
  { label: 'Trichy East', href: '#constituency' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'News', href: '#news' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { Icon: IconFacebook, href: '#' },
  { Icon: IconInstagram, href: '#' },
  { Icon: IconYoutube, href: '#' },
  { Icon: IconTwitter, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300/5">
      <div className="h-px bg-gradient-to-r from-crimson via-jade to-crimson" />

      <div className="wrap py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gray-100 border border-jade/30 flex items-center justify-center display-font text-gray-900 text-3xl relative">
                K
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-crimson" />
              </div>
              <div>
                <div className="display-font text-gray-900 text-2xl tracking-widest">C.Karthikeyan</div>
                <div className="label text-crimson mt-0.5">AIADMK · TRICHY EAST</div>
              </div>
            </div>
            <p className="serif-font text-gray-600 italic text-base leading-relaxed max-w-xs">
              "Leadership with Purpose. Service with Commitment."
            </p>
            <div className="flex gap-4 mt-6">
              {SOCIALS.map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-9 h-9 border border-gray-300/10 flex items-center justify-center hover:border-jade hover:text-jade text-gray-600 cursor-pointer transition-all duration-200">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="label text-jade mb-6">QUICK LINKS</div>
            <nav className="flex flex-col gap-3">
              {LINKS.map(l => (
                <a key={l.href} href={l.href}
                  className="label text-gray-600 hover:text-jade transition-colors hover:translate-x-1 inline-block duration-200">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <div className="label text-jade mb-6">CONTACT</div>
            <div className="space-y-3 text-gray-600 text-sm">
              <div>Campaign Office, Trichy East</div>
              <div>Trichy, Tamil Nadu</div>
              <div>+91 XXXXX XXXXX</div>
              <div>connect@C.Karthikeyan.in</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="label text-gray-600 text-[9px]">© {new Date().getFullYear()} C.Karthikeyan. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Disclaimer'].map(l => (
              <a key={l} href="#" className="label text-gray-600 hover:text-jade transition-colors text-[9px]">{l}</a>
            ))}
          </div>
        </div>
        <p className="label text-gray-600/30 text-[9px] mt-4 text-center">
          Official campaign website for C.Karthikeyan, AIADMK candidate, Trichy East.
        </p>
      </div>
    </footer>
  );
}


