import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Features', href: '#features' },
  { label: 'Location', href: '#location' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.5 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(10,10,11,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,179,71,0.12)' : '1px solid transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span
              className="font-display text-xl neon-flicker"
              style={{
                fontFamily: 'Bebas Neue, Oswald, sans-serif',
                color: '#ffb347',
                textShadow: '0 0 12px #ffb34788',
                letterSpacing: '0.05em',
              }}
            >
              PALMERS
            </span>
            <span
              className="font-display text-xs tracking-widest neon-flicker-slow"
              style={{
                fontFamily: 'Bebas Neue, Oswald, sans-serif',
                color: '#ff3b3b',
                textShadow: '0 0 8px #ff3b3b88',
                letterSpacing: '0.35em',
              }}
            >
              EAST
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs tracking-widest text-white/50 hover:text-amber-400 transition-colors duration-200 relative group"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: '#ffb347' }}
                />
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+14258673837"
              className="hidden sm:flex items-center gap-2 btn-neon px-4 py-2 rounded-sm text-xs tracking-wider transition-all duration-300"
              style={{
                fontFamily: 'Oswald, sans-serif',
                background: '#ffb347',
                color: '#0a0a0b',
                letterSpacing: '0.1em',
              }}
            >
              <Phone size={13} />
              CALL
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-sm glass-card transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {open ? <X size={18} color="#ffb347" /> : <Menu size={18} color="#ffb347" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: 'rgba(10,10,11,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="font-display text-5xl text-white/70 hover:text-amber-400 transition-colors duration-200"
                  style={{
                    fontFamily: 'Bebas Neue, Oswald, sans-serif',
                    letterSpacing: '0.08em',
                  }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:+14258673837"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 btn-neon px-8 py-4 text-sm tracking-widest rounded-sm"
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  background: '#ffb347',
                  color: '#0a0a0b',
                  letterSpacing: '0.15em',
                }}
              >
                (425) 867-3837
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
