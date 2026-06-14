'use client';

import { motion } from 'framer-motion';

interface FloatingChipProps {
  label: string;
  position: { x: number; y: number };
  delay?: number;
}

export default function FloatingChip({ label, position, delay = 0 }: FloatingChipProps) {
  return (
    <motion.div
      className="absolute glass rounded-full px-4 py-2 text-sm font-medium text-text tracking-wide"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay },
      }}
    >
      {label}
    </motion.div>
  );
}
