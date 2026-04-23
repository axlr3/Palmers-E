import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const hours = [
  { day: 'Monday', hours: '11:00 AM – 1:00 AM' },
  { day: 'Tuesday', hours: '11:00 AM – 1:00 AM' },
  { day: 'Wednesday', hours: '11:00 AM – 1:00 AM' },
  { day: 'Thursday', hours: '11:00 AM – 1:00 AM' },
  { day: 'Friday', hours: '11:00 AM – 1:00 AM' },
  { day: 'Saturday', hours: '11:00 AM – 1:00 AM' },
  { day: 'Sunday', hours: '11:00 AM – 1:00 AM' },
];

const today = new Date().getDay(); // 0=Sun, 1=Mon...

function MapUI() {
  return (
    <div
      className="relative w-full h-64 md:h-80 rounded-sm overflow-hidden glass-card"
      style={{ border: '1px solid #ffb34733' }}
    >
      {/* Fake map grid */}
      <div className="absolute inset-0" style={{ background: '#0d1117' }}>
        {/* Grid lines */}
        <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffb347" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Road lines */}
        <svg width="100%" height="100%" className="absolute inset-0">
          {/* Leary Way - diagonal */}
          <line x1="0" y1="65%" x2="100%" y2="35%" stroke="#ffffff22" strokeWidth="12" />
          <line x1="0" y1="65%" x2="100%" y2="35%" stroke="#ffb34766" strokeWidth="2" />
          {/* Cross streets */}
          <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#ffffff11" strokeWidth="6" />
          <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#ffffff11" strokeWidth="6" />
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#ffffff11" strokeWidth="6" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#ffffff11" strokeWidth="6" />
        </svg>

        {/* Road labels */}
        <div
          className="absolute text-[10px] tracking-widest text-amber-400/60 rotate-[-17deg]"
          style={{ top: '44%', left: '38%', fontFamily: 'Oswald, sans-serif' }}
        >
          LEARY WAY NE
        </div>

        {/* Location pin - pulsing */}
        <div className="absolute" style={{ top: '47%', left: '50%', transform: 'translate(-50%,-50%)' }}>
          {/* Pulse rings */}
          <motion.div
            animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full"
            style={{
              width: 40,
              height: 40,
              background: '#ffb347',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          />
          <motion.div
            animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
            className="absolute inset-0 rounded-full"
            style={{
              width: 40,
              height: 40,
              background: '#ffb347',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          />
          {/* Pin dot */}
          <div
            className="relative z-10 flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              borderRadius: '50% 50% 50% 0',
              background: '#ffb347',
              transform: 'rotate(-45deg)',
              boxShadow: '0 0 20px #ffb34799',
            }}
          >
            <div
              className="w-3 h-3 bg-white rounded-full"
              style={{ transform: 'rotate(45deg)' }}
            />
          </div>
        </div>

        {/* Label box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute glass-card px-3 py-2 rounded-sm"
          style={{
            top: '28%',
            left: '53%',
            border: '1px solid #ffb34766',
            minWidth: 140,
          }}
        >
          <div
            className="text-xs font-heading"
            style={{ fontFamily: 'Oswald, sans-serif', color: '#ffb347' }}
          >
            PALMERS EAST
          </div>
          <div className="text-[9px] text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
            Bar & Grill · ⭐ 4.5
          </div>
        </motion.div>
      </div>

      {/* Open in Maps overlay button */}
      <a
        href="https://maps.google.com/?q=7853+Leary+Way+Redmond+WA+98052"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 glass-card rounded-sm text-xs transition-all duration-200 hover:border-amber-400/60 btn-neon"
        style={{
          fontFamily: 'Oswald, sans-serif',
          color: '#ffb347',
          border: '1px solid #ffb34744',
          letterSpacing: '0.1em',
        }}
      >
        <ExternalLink size={12} />
        OPEN IN MAPS
      </a>
    </div>
  );
}

export default function LocationSection() {
  return (
    <section id="location" className="relative py-28 px-4 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, #ffb34722 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p
            className="text-xs tracking-[0.4em] mb-3"
            style={{ color: '#ffb347', fontFamily: 'Oswald, sans-serif' }}
          >
            FIND US
          </p>
          <h2
            className="font-display leading-none"
            style={{
              fontFamily: 'Bebas Neue, Oswald, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              color: '#f0ece4',
            }}
          >
            COME{' '}
            <span style={{ color: '#ffb347', textShadow: '0 0 20px #ffb34788' }}>IN</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Map + Address */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <MapUI />

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                {
                  icon: MapPin,
                  label: 'Address',
                  value: '7853 Leary Way\nRedmond, WA 98052',
                  color: '#ffb347',
                  href: 'https://maps.google.com/?q=7853+Leary+Way+Redmond+WA+98052',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '(425) 867-3837',
                  color: '#ff3b3b',
                  href: 'tel:+14258673837',
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.icon === MapPin ? '_blank' : undefined}
                  rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="glass-card rounded-sm p-4 flex items-start gap-3 transition-all duration-200 hover:border-opacity-60 group btn-neon"
                  style={{ border: `1px solid ${item.color}33` }}
                >
                  <div
                    className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: item.color + '18', border: `1px solid ${item.color}44` }}
                  >
                    <item.icon size={15} color={item.color} />
                  </div>
                  <div>
                    <div
                      className="text-[10px] tracking-widest mb-1"
                      style={{ fontFamily: 'Oswald, sans-serif', color: item.color }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-sm text-white/70 group-hover:text-white/90 transition-colors whitespace-pre-line"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Hours + Extra info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Hours card */}
            <div
              className="glass-card rounded-sm p-6 mb-5"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Clock size={16} color="#ffb347" />
                <h3
                  className="text-sm tracking-widest"
                  style={{ fontFamily: 'Oswald, sans-serif', color: '#ffb347' }}
                >
                  HOURS
                </h3>
              </div>

              <div className="space-y-3">
                {hours.map((h, i) => {
                  // Map our index (0=Mon) to JS day (1=Mon, 0=Sun)
                  const jsDay = i === 6 ? 0 : i + 1;
                  const isToday = jsDay === today;
                  return (
                    <div
                      key={h.day}
                      className="flex items-center justify-between py-2 relative"
                    >
                      {isToday && (
                        <div
                          className="absolute inset-0 rounded-sm -mx-2"
                          style={{ background: '#ffb34711', border: '1px solid #ffb34733' }}
                        />
                      )}
                      <span
                        className="text-sm relative z-10"
                        style={{
                          fontFamily: 'Oswald, sans-serif',
                          color: isToday ? '#ffb347' : '#ffffff66',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {h.day}
                        {isToday && (
                          <span
                            className="ml-2 text-[9px] tracking-widest px-1.5 py-0.5 rounded-full"
                            style={{ background: '#ffb34733', color: '#ffb347' }}
                          >
                            TODAY
                          </span>
                        )}
                      </span>
                      <span
                        className="text-sm relative z-10"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          color: isToday ? '#ffb347' : '#ffffff44',
                        }}
                      >
                        {h.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Open indicator */}
              <div className="mt-5 pt-4 flex items-center gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#39ff14', boxShadow: '0 0 8px #39ff14' }}
                />
                <span
                  className="text-sm"
                  style={{ fontFamily: 'Oswald, sans-serif', color: '#39ff14', letterSpacing: '0.05em' }}
                >
                  OPEN NOW
                </span>
                <span className="text-xs text-white/30 ml-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Closes at 1:00 AM
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+14258673837"
                className="btn-neon flex items-center justify-center gap-2 px-5 py-4 rounded-sm text-sm tracking-widest pulse-glow transition-all duration-300"
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  background: '#ffb347',
                  color: '#0a0a0b',
                  letterSpacing: '0.1em',
                }}
              >
                <Phone size={15} />
                CALL US
              </a>
              <a
                href="https://maps.google.com/?q=7853+Leary+Way+Redmond+WA+98052"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon flex items-center justify-center gap-2 px-5 py-4 glass-card rounded-sm text-sm tracking-widest transition-all duration-300"
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  color: '#ffb347',
                  border: '1px solid #ffb34766',
                  letterSpacing: '0.1em',
                }}
              >
                <MapPin size={15} />
                DIRECTIONS
              </a>
            </div>

            {/* Extra info */}
            <div className="mt-5 glass-card rounded-sm p-5" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Price Range', value: '$20–$30 / person' },
                  { label: 'Atmosphere', value: 'Casual Dive Bar' },
                  { label: 'Parking', value: 'Street Parking' },
                  { label: 'Facebook', value: 'facebook.com' },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      className="text-[9px] tracking-widest mb-1 text-white/30"
                      style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-xs text-white/60"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
