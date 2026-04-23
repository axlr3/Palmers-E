import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import NeonSign from './NeonSign';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity   = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale     = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 60%, #1a0e0599 0%, #0a0a0b 70%)' }}
    >
      {/* Three.js particle bg */}
      <ParticleBackground />

      {/* Radial dark vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, #0a0a0b 85%)',
          zIndex: 1,
        }}
      />

      {/* Horizontal scan line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 8 }}
        className="absolute left-0 right-0 h-[1px] pointer-events-none"
        style={{
          top: '45%',
          background: 'linear-gradient(90deg, transparent, #ffb34766, #ffb347, #ffb34766, transparent)',
          zIndex: 2,
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity, scale }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <NeonSign />

        {/* Address badge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-8 text-sm tracking-widest text-white/40 font-body"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          7853 LEARY WAY · REDMOND, WA 98052
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.7 }}
          className="flex flex-wrap gap-4 justify-center mt-8"
        >
          <a
            href="tel:+14258673837"
            className="btn-neon px-7 py-3 rounded-sm text-sm font-heading tracking-widest transition-all duration-300 pulse-glow"
            style={{
              fontFamily: 'Oswald, sans-serif',
              background: '#ffb347',
              color: '#0a0a0b',
              letterSpacing: '0.15em',
            }}
          >
            CALL NOW
          </a>
          <a
            href="#menu"
            className="btn-neon px-7 py-3 rounded-sm text-sm font-heading tracking-widest glass-card transition-all duration-300"
            style={{
              fontFamily: 'Oswald, sans-serif',
              color: '#ffb347',
              letterSpacing: '0.15em',
              border: '1px solid #ffb34766',
            }}
          >
            SEE THE MENU
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="text-[10px] tracking-[0.3em] text-white/30"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          SCROLL
        </span>
        <div
          className="bounce-y w-7 h-7 rounded-full flex items-center justify-center"
          style={{ border: '1px solid #ffb34744' }}
        >
          <ChevronDown size={14} color="#ffb347" />
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0b)', zIndex: 5 }}
      />
    </section>
  );
}
