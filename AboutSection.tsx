import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const vibes = [
  { emoji: '🎤', label: 'Karaoke Nights', desc: 'Every. Single. Night.' },
  { emoji: '🍺', label: 'Cheap Pours', desc: 'Real drinks, real prices' },
  { emoji: '🎰', label: 'Pull Tabs', desc: 'Try your luck' },
  { emoji: '🌮', label: 'Pub Grub', desc: 'Honest, greasy, delicious' },
  { emoji: '🃏', label: 'Poker Nights', desc: 'Cards & cold ones' },
  { emoji: '🏠', label: 'Locals Only', desc: 'Since forever' },
];

const stats = [
  { value: '1,073', label: 'Reviews' },
  { value: '4.5★', label: 'Rating' },
  { value: '1 AM', label: 'Close Time' },
  { value: '7 Days', label: 'Open' },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const textX = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <section ref={ref} id="about" className="relative overflow-hidden py-40 px-4">
      {/* Parallax BG gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: '#ffb347', transform: 'translate(-30%, -30%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-8 blur-3xl"
          style={{ background: '#ff3b3b', transform: 'translate(30%, 30%)' }}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          style={{ x: textX }}
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
            THE VIBE
          </p>
          <h2
            className="font-display leading-none mb-6"
            style={{
              fontFamily: 'Bebas Neue, Oswald, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              color: '#f0ece4',
            }}
          >
            DIVE BAR{' '}
            <span
              style={{
                color: '#ffb347',
                textShadow: '0 0 20px #ffb34788',
              }}
            >
              ENERGY
            </span>
          </h2>
          <p
            className="max-w-xl text-white/60 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}
          >
            Palmers East isn't trying to be fancy — and that's exactly why everyone loves it.
            It's where Redmond's regulars park themselves after work, where strangers turn into
            friends by the third round, and where karaoke transforms even the shyest person
            into a rock star. Come as you are. Leave happy.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              className="glass-card rounded-sm p-6 text-center"
            >
              <div
                className="font-display text-4xl md:text-5xl mb-1"
                style={{
                  fontFamily: 'Bebas Neue, Oswald, sans-serif',
                  color: '#ffb347',
                  textShadow: '0 0 20px #ffb34766',
                }}
              >
                {s.value}
              </div>
              <div
                className="text-xs tracking-widest text-white/40"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vibe grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {vibes.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              whileHover={{ scale: 1.03, borderColor: '#ffb34766' }}
              className="glass-card rounded-sm p-5 flex items-start gap-4 cursor-default transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="text-2xl mt-0.5">{v.emoji}</span>
              <div>
                <div
                  className="font-heading text-sm tracking-wide mb-1"
                  style={{ fontFamily: 'Oswald, sans-serif', color: '#ffb347' }}
                >
                  {v.label}
                </div>
                <div className="text-xs text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {v.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div
            className="text-white/10 font-display"
            style={{
              fontFamily: 'Bebas Neue, Oswald, sans-serif',
              fontSize: 'clamp(1.5rem, 5vw, 4rem)',
              letterSpacing: '0.05em',
            }}
          >
            "DRINKS ARE CHEAPER, STAFF IS GREAT &{' '}
            <span style={{ color: '#ffb34733' }}>KARAOKE EVERY NIGHT</span>"
          </div>
          <div
            className="mt-3 text-xs tracking-widest text-white/20"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            — GOOGLE REVIEW
          </div>
        </motion.div>
      </div>

      <div className="divider-glow mt-24 max-w-6xl mx-auto" />
    </section>
  );
}
