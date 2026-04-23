import { motion } from 'framer-motion';
import { Mic2, Clock, Dices, ShoppingBag, Users, Zap } from 'lucide-react';
import TiltCard from './TiltCard';

const features = [
  {
    icon: Mic2,
    title: 'Karaoke Every Night',
    desc: 'Live karaoke 7 nights a week. Grab the mic, embarrass yourself, make new friends. No judgment zone.',
    color: '#ffb347',
    tag: 'NIGHTLY',
  },
  {
    icon: Clock,
    title: 'Happy Hour Specials',
    desc: 'Discounted drinks and bar bites daily. Ask your bartender for today\'s deals — they\'re always worth it.',
    color: '#ff3b3b',
    tag: 'DAILY',
  },
  {
    icon: Dices,
    title: 'Pool Tables & Darts',
    desc: 'Settle debates over a game of pool or darts. Classic bar games, good company, cold drinks.',
    color: '#39ff14',
    tag: 'ALWAYS ON',
  },
  {
    icon: ShoppingBag,
    title: 'Dine-In & Takeout',
    desc: 'Eat in the cozy bar, take it to go, or get delivery. We\'re here to feed you however works best.',
    color: '#ffb347',
    tag: 'FLEXIBLE',
  },
  {
    icon: Users,
    title: 'LGBTQ+ Friendly',
    desc: 'Palmers East is a welcoming space for everyone. All are welcome at our bar, every night of the week.',
    color: '#ff6b35',
    tag: 'INCLUSIVE',
  },
  {
    icon: Zap,
    title: 'Late Night Scene',
    desc: 'Open until 1 AM. When the rest of Redmond winds down, Palmers East is just getting started.',
    color: '#ffd700',
    tag: 'OPEN LATE',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-36 px-4 overflow-hidden">
      {/* BG texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(255,179,71,0.015) 40px,
              rgba(255,179,71,0.015) 41px
            )
          `,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p
            className="text-xs tracking-[0.4em] mb-3"
            style={{ color: '#ffb347', fontFamily: 'Oswald, sans-serif' }}
          >
            WHY COME HERE
          </p>
          <h2
            className="font-display leading-none"
            style={{
              fontFamily: 'Bebas Neue, Oswald, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              color: '#f0ece4',
            }}
          >
            THE{' '}
            <span style={{ color: '#ffb347', textShadow: '0 0 20px #ffb34788' }}>
              FULL
            </span>{' '}
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <TiltCard
                glowColor={f.color}
                className="glass-card h-full"
                style={{ border: `1px solid ${f.color}22` }}
              >
                <div className="p-6 relative overflow-hidden">
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }}
                  />

                  {/* Icon + tag row */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-sm flex items-center justify-center"
                      style={{
                        background: f.color + '18',
                        border: `1px solid ${f.color}44`,
                      }}
                    >
                      <f.icon size={20} color={f.color} style={{ filter: `drop-shadow(0 0 6px ${f.color}88)` }} />
                    </div>
                    <span
                      className="text-[10px] tracking-widest px-2 py-1"
                      style={{
                        fontFamily: 'Oswald, sans-serif',
                        color: f.color,
                        background: f.color + '18',
                        border: `1px solid ${f.color}33`,
                      }}
                    >
                      {f.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-heading text-lg mb-3"
                    style={{ fontFamily: 'Oswald, sans-serif', color: '#f0ece4', letterSpacing: '0.02em' }}
                  >
                    {f.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm text-white/50 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {f.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Big CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 relative overflow-hidden rounded-sm"
          style={{ border: '1px solid #ffb34733' }}
        >
          {/* Animated gradient bg */}
          <motion.div
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #ffb34711 0%, #ff3b3b11 50%, #ffb34711 100%)',
              backgroundSize: '200% 200%',
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8">
            <div>
              <div
                className="font-display text-4xl md:text-5xl mb-2"
                style={{
                  fontFamily: 'Bebas Neue, Oswald, sans-serif',
                  color: '#f0ece4',
                }}
              >
                OPEN UNTIL{' '}
                <span style={{ color: '#ffb347', textShadow: '0 0 20px #ffb34788' }}>1 AM</span>
              </div>
              <p className="text-white/50 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                7853 Leary Way, Redmond, WA 98052 · Open 7 days a week
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+14258673837"
                className="btn-neon flex items-center gap-2 px-6 py-3 text-sm tracking-widest transition-all duration-300 pulse-glow rounded-sm"
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  background: '#ffb347',
                  color: '#0a0a0b',
                  letterSpacing: '0.1em',
                }}
              >
                📞 (425) 867-3837
              </a>
              <a
                href="https://maps.google.com/?q=7853+Leary+Way+Redmond+WA+98052"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon flex items-center gap-2 px-6 py-3 text-sm tracking-widest glass-card transition-all duration-300 rounded-sm"
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  color: '#ffb347',
                  border: '1px solid #ffb34766',
                  letterSpacing: '0.1em',
                }}
              >
                📍 GET DIRECTIONS
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="divider-glow mt-24 max-w-6xl mx-auto" />
    </section>
  );
}
