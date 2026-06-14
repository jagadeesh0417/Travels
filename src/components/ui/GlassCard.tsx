'use client';

import { useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useMousePositionRelative } from '@/hooks/useMousePosition';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export default function GlassCard({ children, className = '', tilt = false, glow = false, onClick }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useMousePositionRelative(ref);

  const tiltStyle = tilt
    ? {
        transform: `perspective(1000px) rotateX(${-mouse.y * 8}deg) rotateY(${mouse.x * 8}deg)`,
        transition: 'transform 0.15s ease-out',
      }
    : {};

  const glowStyle = glow
    ? {
        background: `radial-gradient(circle at ${50 + mouse.x * 30}% ${50 + mouse.y * 30}%, rgba(217,119,6,0.06), transparent 60%)`,
      }
    : {};

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      className={`glass-card rounded-2xl p-8 cursor-default ${className}`}
      style={{ ...tiltStyle, ...glowStyle }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
}
