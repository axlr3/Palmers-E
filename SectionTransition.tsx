import { motion } from 'framer-motion';

interface SectionTransitionProps {
  label: string;
  color?: string;
}

export default function SectionTransition({ label, color = '#ffb347' }: SectionTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4 max-w-6xl mx-auto px-4 py-2"
    >
      <div
        className="flex-1 h-[1px]"
        style={{ background: `linear-gradient(90deg, transparent, ${color}44)` }}
      />
      <span
        className="text-[9px] tracking-[0.4em] px-3 py-1 rounded-full"
        style={{
          fontFamily: 'Oswald, sans-serif',
          color: color + '88',
          border: `1px solid ${color}22`,
          background: color + '0a',
        }}
      >
        {label}
      </span>
      <div
        className="flex-1 h-[1px]"
        style={{ background: `linear-gradient(90deg, ${color}44, transparent)` }}
      />
    </motion.div>
  );
}
