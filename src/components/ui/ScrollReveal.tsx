'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn } from '@/lib/animations';

type AnimationType = 'up' | 'left' | 'right' | 'scale';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  className?: string;
  delay?: number;
}

const animations = {
  up: fadeInUp,
  left: fadeInLeft,
  right: fadeInRight,
  scale: scaleIn,
};

export default function ScrollReveal({
  children,
  animation = 'up',
  className = '',
  delay = 0,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  const anim = animations[animation];
  const delayedAnim = delay
    ? {
        ...anim,
        show: {
          ...anim.show,
          transition: { ...anim.show.transition, delay },
        },
      }
    : anim;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={delayedAnim}
      initial="hidden"
      animate={isVisible ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}
