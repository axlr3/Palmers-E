import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Shawna Williams',
    badge: 'Local Guide · 284 reviews',
    rating: 5,
    time: '9 months ago',
    text: 'This is a nice little laid back restaurant. It looks like a sports bar on the inside and a nice cafe on the outside. My friend and I went during lunch hour and it wasn\'t busy. The atmosphere is super relaxed and the staff made us feel right at home.',
    highlight: 'atmosphere',
    avatar: 'SW',
    avatarColor: '#ff6b35',
  },
  {
    name: 'Ilya Marron',
    badge: 'Local Guide · 63 reviews',
    rating: 5,
    time: '11 months ago',
    text: 'We only ordered a couple of beers, but there was only one woman serving. She had a smile and was very friendly. It seems like it\'s a local place, and people enjoyed being there. I definitely recommend it.',
    highlight: 'friendly staff',
    avatar: 'IM',
    avatarColor: '#ffb347',
  },
  {
    name: 'Christi Balaki',
    badge: 'Local Guide · 632 reviews',
    rating: 5,
    time: 'a year ago',
    text: 'Incredible atmosphere with awesome food, drinks, and service. The drinks were fairly strong and the food was excellent especially for the happy hour price, including the cheese curds, the fried pickles, and the pretzel.',
    highlight: 'food & drinks',
    avatar: 'CB',
    avatarColor: '#39ff14',
  },
  {
    name: 'Marcus T.',
    badge: 'Reviewer',
    rating: 5,
    time: '6 months ago',
    text: 'Karaoke every night is the real deal here. People go absolutely wild and the crowd is super supportive. Had the onion rings and they were massive. Drinks are cheap. Will be back every weekend.',
    highlight: 'karaoke',
    avatar: 'MT',
    avatarColor: '#ff3b3b',
  },
  {
    name: 'Jennifer K.',
    badge: 'Local Guide · 89 reviews',
    rating: 4,
    time: '4 months ago',
    text: 'Small and great karaoke, prices and food are good and I like the service. This is our go-to spot after work. The bartenders know your order by the second visit. That\'s the sign of a great bar.',
    highlight: 'regulars',
    avatar: 'JK',
    avatarColor: '#ffd700',
  },
  {
    name: 'David R.',
    badge: 'Reviewer · 17 reviews',
    rating: 5,
    time: '2 months ago',
    text: 'Best dive bar in Redmond, no question. Pull tabs, poker nights, karaoke and cold beer. Everything you need and nothing you don\'t. Love this place.',
    highlight: 'dive bar',
    avatar: 'DR',
    avatarColor: '#ff6b35',
  },
];

function AnimatedStars({ rating, delay = 0 }: { rating: number; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: -30, opacity: 0 }}
          animate={visible ? { scale: 1, rotate: 0, opacity: 1 } : {}}
          transition={{ delay: delay + i * 0.07, duration: 0.35, type: 'spring', stiffness: 400 }}
        >
          <Star
            size={13}
            fill={i < rating ? '#ffb347' : 'transparent'}
            color={i < rating ? '#ffb347' : '#ffffff33'}
            style={i < rating ? { filter: 'drop-shadow(0 0 4px #ffb34788)' } : {}}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-28 px-4 overflow-hidden">
      {/* Background glow blobs */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: '#ff3b3b' }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-6 blur-3xl pointer-events-none"
        style={{ background: '#ffb347' }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p
            className="text-xs tracking-[0.4em] mb-3"
            style={{ color: '#39ff14', fontFamily: 'Oswald, sans-serif' }}
          >
            WHAT PEOPLE SAY
          </p>
          <div className="flex flex-wrap items-end gap-6">
            <h2
              className="font-display leading-none"
              style={{
                fontFamily: 'Bebas Neue, Oswald, sans-serif',
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                color: '#f0ece4',
              }}
            >
              REVIEWS
            </h2>
            {/* Overall rating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
              className="glass-card flex items-center gap-3 px-5 py-3 mb-2 rounded-sm"
              style={{ border: '1px solid #ffb34744' }}
            >
              <span
                className="font-display text-4xl"
                style={{
                  fontFamily: 'Bebas Neue, Oswald, sans-serif',
                  color: '#ffb347',
                  textShadow: '0 0 20px #ffb34788',
                }}
              >
                4.5
              </span>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={12} fill={i <= 4 ? '#ffb347' : 'transparent'} color="#ffb347" />
                  ))}
                </div>
                <div className="text-xs text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
                  1,073 reviews
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Review tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {[
            { tag: 'karaoke', count: 90 },
            { tag: 'dive bar', count: 72 },
            { tag: 'pull tabs', count: 13 },
            { tag: 'happy hour', count: 11 },
            { tag: 'cheap drinks', count: 45 },
            { tag: 'friendly staff', count: 38 },
          ].map((t) => (
            <span
              key={t.tag}
              className="px-3 py-1.5 text-xs glass-card rounded-full cursor-pointer transition-all duration-200 hover:border-amber-400/40"
              style={{
                fontFamily: 'Oswald, sans-serif',
                color: '#ffffff88',
                letterSpacing: '0.05em',
              }}
            >
              {t.tag}{' '}
              <span style={{ color: '#ffb34799' }}>{t.count}</span>
            </span>
          ))}
        </motion.div>

        {/* Review cards — masonry-style floating layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="break-inside-avoid"
            >
              <motion.div
                whileHover={{ y: -4, borderColor: '#ffb34744' }}
                transition={{ duration: 0.25 }}
                className="glass-card rounded-sm p-5 relative overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Quote mark */}
                <div
                  className="absolute top-2 right-4 font-display opacity-10 pointer-events-none select-none"
                  style={{
                    fontFamily: 'Bebas Neue, Oswald, sans-serif',
                    fontSize: '5rem',
                    color: '#ffb347',
                    lineHeight: 1,
                  }}
                >
                  "
                </div>

                {/* Avatar + name */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-heading flex-shrink-0"
                    style={{
                      background: r.avatarColor + '33',
                      border: `1px solid ${r.avatarColor}66`,
                      color: r.avatarColor,
                      fontFamily: 'Oswald, sans-serif',
                    }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <div
                      className="text-sm font-heading"
                      style={{ fontFamily: 'Oswald, sans-serif', color: '#f0ece4' }}
                    >
                      {r.name}
                    </div>
                    <div className="text-[10px] text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {r.badge}
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="mb-3">
                  <AnimatedStars rating={r.rating} delay={i * 0.08} />
                </div>

                {/* Review text */}
                <p
                  className="text-sm text-white/65 leading-relaxed mb-3 relative z-10"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {r.text}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] tracking-wide px-2 py-0.5 rounded-full"
                    style={{
                      background: r.avatarColor + '22',
                      color: r.avatarColor,
                      border: `1px solid ${r.avatarColor}44`,
                      fontFamily: 'Oswald, sans-serif',
                    }}
                  >
                    {r.highlight}
                  </span>
                  <span className="text-[10px] text-white/25" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {r.time}
                  </span>
                </div>

                {/* Bottom glow line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[1px]"
                  style={{ background: `linear-gradient(90deg, ${r.avatarColor}66, transparent)` }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="https://maps.app.goo.gl/palmerseast"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-2 px-6 py-3 glass-card rounded-sm text-sm tracking-widest transition-all duration-300"
            style={{
              fontFamily: 'Oswald, sans-serif',
              color: '#ffb347',
              border: '1px solid #ffb34744',
              letterSpacing: '0.15em',
            }}
          >
            <Star size={14} fill="#ffb347" color="#ffb347" />
            READ ALL 1,073 REVIEWS ON GOOGLE
          </a>
        </motion.div>
      </div>

      <div className="divider-glow mt-24 max-w-6xl mx-auto" />
    </section>
  );
}
