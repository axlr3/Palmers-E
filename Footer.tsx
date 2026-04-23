import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16 pb-8 px-4">
      {/* Top amber glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, #ffb347, transparent)' }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: '#ffb347' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <div
                className="font-display text-5xl leading-none neon-flicker"
                style={{
                  fontFamily: 'Bebas Neue, Oswald, sans-serif',
                  color: '#ffb347',
                  textShadow: '0 0 20px #ffb34788',
                }}
              >
                PALMERS
              </div>
              <div
                className="font-display text-2xl tracking-[0.5em] neon-flicker-slow"
                style={{
                  fontFamily: 'Bebas Neue, Oswald, sans-serif',
                  color: '#ff3b3b',
                  textShadow: '0 0 12px #ff3b3b88',
                }}
              >
                EAST
              </div>
            </div>
            <p
              className="text-sm text-white/40 leading-relaxed max-w-xs"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Redmond's favorite dive bar. Karaoke every night, cheap drinks, real food, real people.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-3 mt-5">
              {['FB', 'IG', 'YP'].map((s) => (
                <div
                  key={s}
                  className="w-9 h-9 rounded-sm flex items-center justify-center glass-card text-xs cursor-pointer hover:border-amber-400/40 transition-colors duration-200"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    color: '#ffffff44',
                    border: '1px solid rgba(255,255,255,0.08)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              className="text-xs tracking-[0.3em] mb-5 text-white/30"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              CONTACT
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+14258673837"
                className="flex items-start gap-3 group"
              >
                <Phone size={14} color="#ffb347" className="mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-white/30 mb-0.5" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>
                    PHONE
                  </div>
                  <div
                    className="text-sm text-white/60 group-hover:text-amber-400 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    (425) 867-3837
                  </div>
                </div>
              </a>
              <a
                href="https://maps.google.com/?q=7853+Leary+Way+Redmond+WA+98052"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MapPin size={14} color="#ff3b3b" className="mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-white/30 mb-0.5" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>
                    ADDRESS
                  </div>
                  <div
                    className="text-sm text-white/60 group-hover:text-red-400 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    7853 Leary Way
                    <br />
                    Redmond, WA 98052
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <ExternalLink size={14} color="#39ff14" className="mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-white/30 mb-0.5" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>
                    SOCIAL
                  </div>
                  <div className="text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    facebook.com
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              className="text-xs tracking-[0.3em] mb-5 text-white/30"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              HOURS
            </h4>
            <div className="space-y-2">
              {[
                'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                'Friday', 'Saturday', 'Sunday',
              ].map((day) => (
                <div key={day} className="flex justify-between items-center">
                  <span
                    className="text-xs text-white/40"
                    style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}
                  >
                    {day}
                  </span>
                  <span className="text-xs text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>
                    11 AM – 1 AM
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#39ff14', boxShadow: '0 0 6px #39ff14' }}
              />
              <span
                className="text-xs"
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  color: '#39ff14',
                  textShadow: '0 0 8px #39ff1466',
                  letterSpacing: '0.08em',
                }}
              >
                OPEN NOW · CLOSES 1 AM
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <Clock size={12} color="#ffb34788" />
              <span className="text-xs text-white/25" style={{ fontFamily: 'Inter, sans-serif' }}>
                Kitchen may close earlier
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-[11px] text-white/20" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2024 Palmers East Bar & Grill · Redmond, WA 98052
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-white/15" style={{ fontFamily: 'Inter, sans-serif' }}>
              Must be 21+ to drink. Please drink responsibly.
            </span>
          </div>
          <div className="flex gap-1">
            {['🍺', '🎤', '🔥'].map((e) => (
              <span key={e} className="text-base">{e}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
