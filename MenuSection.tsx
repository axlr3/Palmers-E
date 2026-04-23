import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const menuItems = [
  {
    category: 'Breakfast',
    color: '#ffb347',
    note: 'Served until 2:00 PM daily',
    items: [
      { name: 'Biscuits & Gravy', desc: 'Fresh biscuits smothered in homemade country gravy, served with 2 eggs and crispy hash browns', price: '$5.99', emoji: '🍳' },
      { name: "McPalmers' Muffin", desc: 'Toasted English muffin with 2 eggs, hash browns, cheese, and your choice of bacon, ham, or sausage', price: '$6.99', emoji: '🥚' },
      { name: 'Steak & Eggs', desc: '8oz top sirloin grilled to your liking with 2 eggs, crispy hash browns, and toast', price: '$11.99', emoji: '🥩' },
      { name: 'Chicken Fried Steak', desc: 'Smothered in homemade pork sausage gravy, served with 2 eggs, crispy hash browns, and toast', price: '$8.99', emoji: '🍽️' },
    ],
  },
  {
    category: 'Appetizers',
    color: '#ff3b3b',
    note: 'Saturday: half price appetizers all day',
    items: [
      { name: 'Inferno Wings', desc: '10 wings with bleu cheese', price: '$6.99', emoji: '🔥' },
      { name: 'Jalapeño Poppers', desc: '6 poppers with ranch sauce', price: '$5.99', emoji: '🌶️' },
      { name: 'Onion Rings', desc: 'Breaded and served with ranch sauce', price: '$3.99', emoji: '🧅' },
      { name: 'Pork Carnitas Tacos', desc: 'Two street tacos with onion and cilantro', price: '$2.99', emoji: '🌮' },
    ],
  },
  {
    category: 'Burgers & Mains',
    color: '#39ff14',
    note: 'All sandwiches served with hand cut, garlic, or sriracha fries',
    items: [
      { name: "Farmer's Burger", desc: 'Loaded with everything — including a fried egg and onion rings on top', price: '$9.95', emoji: '🍔' },
      { name: 'Mushroom Burger', desc: "Palmer's signature — a local favorite worth every bite", price: 'Ask us', emoji: '🍄' },
      { name: 'Cod Sandwich', desc: 'Crispy fried cod with tartar sauce on a freshly charred roll', price: 'Ask us', emoji: '🐟' },
      { name: 'Reuben', desc: 'Classic Reuben on rye — pairs perfectly with garlic fries', price: '$8.95', emoji: '🥪' },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="relative py-36 px-4 overflow-hidden">
      {/* BG accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ffb347 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">
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
            style={{ color: '#ff3b3b', fontFamily: 'Oswald, sans-serif' }}
          >
            WHAT WE'RE SERVING
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
            <span style={{ color: '#ff3b3b', textShadow: '0 0 20px #ff3b3b88' }}>MENU</span>
          </h2>
          <p
            className="mt-4 max-w-lg text-white/50 text-sm leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Pub grub done right. No foam, no truffle oil — just honest food and strong drinks at prices that won't hurt.
          </p>
        </motion.div>

        {/* Category sections */}
        {menuItems.map((cat, ci) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: ci * 0.1 }}
            className="mb-20"
          >
            {/* Category header */}
            <div className="flex items-center gap-4 mb-3">
              <div
                className="h-[1px] w-8"
                style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
              />
              <h3
                className="text-sm tracking-[0.3em] font-heading"
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  color: cat.color,
                  textShadow: `0 0 10px ${cat.color}88`,
                }}
              >
                {cat.category.toUpperCase()}
              </h3>
              <div
                className="h-[1px] flex-1"
                style={{ background: `linear-gradient(90deg, ${cat.color}66, transparent)` }}
              />
            </div>
            {cat.note && (
              <p className="text-xs text-white/30 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                {cat.note}
              </p>
            )}

            {/* Items grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.items.map((item, ii) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ii * 0.07 + ci * 0.05, duration: 0.5 }}
                >
                  <TiltCard
                    glowColor={cat.color}
                    className="glass-card h-full"
                    style={{ border: `1px solid ${cat.color}22` }}
                  >
                    <div className="p-5 flex flex-col h-full">
                      {/* Emoji */}
                      <div className="text-3xl mb-3">{item.emoji}</div>

                      {/* Name */}
                      <h4
                        className="font-heading text-base mb-2 leading-tight"
                        style={{ fontFamily: 'Oswald, sans-serif', color: '#f0ece4' }}
                      >
                        {item.name}
                      </h4>

                      {/* Desc */}
                      <p
                        className="text-xs text-white/40 leading-relaxed flex-1 mb-4"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.desc}
                      </p>

                      {/* Price */}
                      <div
                        className="font-display text-xl"
                        style={{
                          fontFamily: 'Bebas Neue, Oswald, sans-serif',
                          color: cat.color,
                          textShadow: `0 0 12px ${cat.color}66`,
                        }}
                      >
                        {item.price}
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(90deg, ${cat.color}88, transparent)` }}
                    />
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Weekly Specials callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-sm p-8 relative overflow-hidden"
          style={{ border: '1px solid #ffb34744' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, #ffb34711 0%, transparent 70%)' }}
          />
          <div
            className="font-display text-4xl md:text-5xl mb-6 relative z-10"
            style={{
              fontFamily: 'Bebas Neue, Oswald, sans-serif',
              color: '#ffb347',
              textShadow: '0 0 30px #ffb34799',
            }}
          >
            WEEKLY SPECIALS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {[
              { day: 'TUESDAY', deal: 'Burger Day', detail: '$3 off all burgers' },
              { day: 'WEDNESDAY', deal: 'Wing Day', detail: '10 Wings for $10' },
              { day: 'FRIDAY', deal: 'Prime Rib Night', detail: '$15.99 — starts at 6 PM, served with au jus, salad & loaded baked potato' },
              { day: 'SATURDAY', deal: 'Half Price Apps', detail: 'All appetizers half off, all day' },
            ].map((s) => (
              <div key={s.day} className="glass-card rounded-sm p-4" style={{ border: '1px solid #ffb34722' }}>
                <p className="text-[10px] tracking-widest text-white/30 mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>{s.day}</p>
                <p className="text-base mb-1" style={{ fontFamily: 'Oswald, sans-serif', color: '#ffb347' }}>{s.deal}</p>
                <p className="text-xs text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>{s.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs tracking-widest text-white/30 mt-6 relative z-10" style={{ fontFamily: 'Oswald, sans-serif' }}>
            HAPPY HOUR: EVERYDAY 2:30 PM – 6:30 PM · $1 OFF ALL DRINKS
          </p>
        </motion.div>
      </div>

      <div className="divider-glow mt-24 max-w-6xl mx-auto" />
    </section>
  );
}
