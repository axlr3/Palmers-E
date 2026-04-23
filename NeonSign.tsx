import { motion } from 'framer-motion';

export default function NeonSign() {
  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        className="w-64 h-[2px] mb-4"
        style={{
          background: 'linear-gradient(90deg, transparent, #ffb347, transparent)',
          boxShadow: '0 0 12px #ffb347, 0 0 24px #ffb34788',
        }}
      />

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        className="relative"
      >
        {/* Glow layer behind */}
        <div
          className="absolute inset-0 blur-2xl opacity-40 font-display text-center"
          style={{
            fontFamily: 'Bebas Neue, Oswald, sans-serif',
            fontSize: 'clamp(4rem, 14vw, 11rem)',
            color: '#ffb347',
            letterSpacing: '0.02em',
            lineHeight: 0.9,
          }}
        >
          PALMERS
        </div>
        <h1
          className="neon-flicker font-display text-center relative z-10"
          style={{
            fontFamily: 'Bebas Neue, Oswald, sans-serif',
            fontSize: 'clamp(4rem, 14vw, 11rem)',
            color: '#ffb347',
            textShadow: '0 0 10px #ffb347, 0 0 30px #ffb34799, 0 0 60px #ffb34744, 0 0 100px #ffb34722',
            letterSpacing: '0.02em',
            lineHeight: 0.9,
          }}
        >
          PALMERS
        </h1>
      </motion.div>

      {/* EAST — different color / flicker timing */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75, ease: 'easeOut' }}
        className="relative"
      >
        <div
          className="absolute inset-0 blur-2xl opacity-40 font-display text-center"
          style={{
            fontFamily: 'Bebas Neue, Oswald, sans-serif',
            fontSize: 'clamp(2.5rem, 9vw, 7rem)',
            color: '#ff3b3b',
            letterSpacing: '0.35em',
          }}
        >
          EAST
        </div>
        <h2
          className="neon-flicker-slow font-display text-center relative z-10"
          style={{
            fontFamily: 'Bebas Neue, Oswald, sans-serif',
            fontSize: 'clamp(2.5rem, 9vw, 7rem)',
            color: '#ff3b3b',
            textShadow: '0 0 10px #ff3b3b, 0 0 30px #ff3b3b99, 0 0 60px #ff3b3b44',
            letterSpacing: '0.35em',
          }}
        >
          EAST
        </h2>
      </motion.div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: 'easeOut' }}
        className="w-64 h-[2px] mt-4"
        style={{
          background: 'linear-gradient(90deg, transparent, #ff3b3b, transparent)',
          boxShadow: '0 0 12px #ff3b3b, 0 0 24px #ff3b3b88',
        }}
      />

      {/* Tagline pills */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
        className="flex flex-wrap justify-center gap-3 mt-6"
      >
        {['BAR', 'GRILL', 'KARAOKE'].map((tag, i) => (
          <span
            key={tag}
            className="glass-card px-4 py-1.5 text-xs tracking-[0.25em] font-heading"
            style={{
              fontFamily: 'Oswald, sans-serif',
              color: i === 0 ? '#ffb347' : i === 1 ? '#ff3b3b' : '#39ff14',
              border: `1px solid ${i === 0 ? '#ffb34744' : i === 1 ? '#ff3b3b44' : '#39ff1444'}`,
              textShadow: i === 0
                ? '0 0 8px #ffb34788'
                : i === 1
                ? '0 0 8px #ff3b3b88'
                : '0 0 8px #39ff1488',
            }}
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
