import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic2, Music } from 'lucide-react';

const songs = [
  { title: "Don't Stop Believin'", artist: 'Journey', genre: 'Classic Rock' },
  { title: 'Sweet Caroline', artist: 'Neil Diamond', genre: 'Sing-Along' },
  { title: 'Total Eclipse of the Heart', artist: 'Bonnie Tyler', genre: 'Power Ballad' },
  { title: 'Africa', artist: 'Toto', genre: 'Classic Rock' },
  { title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Epic' },
  { title: 'Living on a Prayer', artist: 'Bon Jovi', genre: 'Rock' },
  { title: 'Mr. Brightside', artist: 'The Killers', genre: 'Indie' },
  { title: 'Wonderwall', artist: 'Oasis', genre: 'Britpop' },
  { title: 'Gold Digger', artist: 'Kanye West', genre: 'Hip-Hop' },
  { title: 'Since U Been Gone', artist: 'Kelly Clarkson', genre: 'Pop' },
  { title: 'I Will Survive', artist: 'Gloria Gaynor', genre: 'Disco' },
  { title: 'Somebody That I Used to Know', artist: 'Gotye', genre: 'Indie Pop' },
];

const colorMap: Record<string, string> = {
  'Classic Rock': '#ff6b35',
  'Sing-Along': '#ffb347',
  'Power Ballad': '#ff3b3b',
  'Epic': '#ffd700',
  'Rock': '#ff6b35',
  'Indie': '#39ff14',
  'Britpop': '#00d4ff',
  'Hip-Hop': '#ffb347',
  'Pop': '#ff69b4',
  'Disco': '#c084fc',
  'Indie Pop': '#39ff14',
};

export default function KaraokeSection() {
  const [picked, setPicked] = useState<typeof songs[0] | null>(null);
  const [spinning, setSpinning] = useState(false);

  const pickSong = () => {
    setSpinning(true);
    setPicked(null);
    setTimeout(() => {
      setPicked(songs[Math.floor(Math.random() * songs.length)]);
      setSpinning(false);
    }, 1200);
  };

  return (
    <section className="relative py-40 px-4 overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(255,179,71,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(255,59,59,0.06) 0%, transparent 50%)
          `,
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs tracking-[0.4em] mb-3"
            style={{ color: '#ff3b3b', fontFamily: 'Oswald, sans-serif' }}
          >
            🎤 TONIGHT'S FEATURE
          </p>
          <h2
            className="font-display leading-none mb-4"
            style={{
              fontFamily: 'Bebas Neue, Oswald, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              color: '#f0ece4',
            }}
          >
            KARAOKE{' '}
            <span style={{ color: '#ff3b3b', textShadow: '0 0 20px #ff3b3b88' }}>EVERY</span>{' '}
            NIGHT
          </h2>
          <p
            className="text-white/50 text-sm max-w-lg mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Drinks are cheaper, staff is great and karaoke every night. What more do you need?
            Pick your poison — the mic is always open.
          </p>
        </motion.div>

        {/* Song picker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-sm p-8 text-center relative overflow-hidden"
          style={{ border: '1px solid #ff3b3b33' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, #ff3b3b08 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            <Mic2 size={32} color="#ff3b3b" className="mx-auto mb-4" style={{ filter: 'drop-shadow(0 0 12px #ff3b3b99)' }} />

            <p
              className="text-xs tracking-widest mb-6 text-white/40"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              CAN'T DECIDE WHAT TO SING?
            </p>

            <button
              onClick={pickSong}
              disabled={spinning}
              className="btn-neon px-8 py-4 text-sm tracking-widest rounded-sm transition-all duration-300 mb-8"
              style={{
                fontFamily: 'Oswald, sans-serif',
                background: spinning ? '#ff3b3b66' : '#ff3b3b',
                color: spinning ? '#ffffff88' : '#fff',
                letterSpacing: '0.15em',
                boxShadow: spinning ? 'none' : '0 0 20px #ff3b3b55',
                cursor: spinning ? 'wait' : 'pointer',
              }}
            >
              {spinning ? '🎲 PICKING...' : '🎯 PICK MY SONG'}
            </button>

            {/* Result */}
            <AnimatePresence mode="wait">
              {spinning && (
                <motion.div
                  key="spinning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-20 flex items-center justify-center"
                >
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ scaleY: [1, 3, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                        className="w-1.5 rounded-full"
                        style={{ height: 10, background: '#ff3b3b', transformOrigin: 'bottom' }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {picked && !spinning && (
                <motion.div
                  key="picked"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="glass-card rounded-sm p-6 relative overflow-hidden"
                  style={{ border: `1px solid ${colorMap[picked.genre] || '#ffb347'}44` }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at center, ${colorMap[picked.genre] || '#ffb347'}11 0%, transparent 70%)` }}
                  />
                  <Music size={20} className="mx-auto mb-3" color={colorMap[picked.genre] || '#ffb347'} />
                  <div
                    className="font-display text-3xl mb-2 relative z-10"
                    style={{
                      fontFamily: 'Bebas Neue, Oswald, sans-serif',
                      color: colorMap[picked.genre] || '#ffb347',
                      textShadow: `0 0 20px ${colorMap[picked.genre] || '#ffb347'}88`,
                    }}
                  >
                    {picked.title}
                  </div>
                  <div
                    className="text-white/60 text-sm mb-2 relative z-10"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {picked.artist}
                  </div>
                  <span
                    className="text-[10px] tracking-widest px-2 py-1 rounded-full relative z-10"
                    style={{
                      background: `${colorMap[picked.genre] || '#ffb347'}22`,
                      color: colorMap[picked.genre] || '#ffb347',
                      border: `1px solid ${colorMap[picked.genre] || '#ffb347'}44`,
                      fontFamily: 'Oswald, sans-serif',
                    }}
                  >
                    {picked.genre}
                  </span>
                  <p className="text-xs text-white/30 mt-3 relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                    You're up. No backing out now. 🎤
                  </p>
                </motion.div>
              )}

              {!picked && !spinning && (
                <div key="empty" className="h-20 flex items-center justify-center">
                  <p className="text-white/20 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Hit the button above to find your song
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Popular songs grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"
        >
          {songs.slice(0, 8).map((song, i) => (
            <motion.div
              key={song.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03, borderColor: `${colorMap[song.genre] || '#ffb347'}66` }}
              className="glass-card rounded-sm p-3 cursor-pointer transition-all duration-200"
              style={{ border: `1px solid ${colorMap[song.genre] || '#ffb347'}22` }}
              onClick={() => setPicked(song)}
            >
              <div
                className="text-[10px] tracking-widest mb-1"
                style={{ fontFamily: 'Oswald, sans-serif', color: colorMap[song.genre] || '#ffb347' }}
              >
                {song.genre}
              </div>
              <div
                className="text-xs text-white/70 font-heading leading-tight"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {song.title}
              </div>
              <div className="text-[10px] text-white/30 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                {song.artist}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="divider-glow mt-24 max-w-6xl mx-auto" />
    </section>
  );
}
