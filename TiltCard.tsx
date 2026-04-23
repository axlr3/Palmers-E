import { useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  glowColor?: string;
}

export default function TiltCard({ children, className = '', style = {}, glowColor = '#ffb347' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawBrightX = useMotionValue(50);
  const rawBrightY = useMotionValue(50);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 30 });
  const brightX = useSpring(rawBrightX, { stiffness: 200, damping: 25 });
  const brightY = useSpring(rawBrightY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(x);
    rawY.set(y);
    rawBrightX.set((e.clientX - rect.left) / rect.width * 100);
    rawBrightY.set((e.clientY - rect.top) / rect.height * 100);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    rawBrightX.set(50);
    rawBrightY.set(50);
  };

  return (
    <div style={{ perspective: '1000px' }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          ...style,
        }}
        className={`relative overflow-hidden rounded-sm ${className}`}
        whileHover={{ scale: 1.025 }}
        transition={{ scale: { duration: 0.2 } }}
      >
        {/* Shimmer layer */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-20 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [brightX, brightY],
              ([bx, by]) =>
                `radial-gradient(circle at ${bx}% ${by}%, ${glowColor}22 0%, transparent 60%)`
            ),
          }}
        />
        {/* Content */}
        <div style={{ transform: 'translateZ(20px)' }}>{children}</div>
      </motion.div>
    </div>
  );
}
