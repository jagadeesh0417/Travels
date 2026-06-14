'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [show, setShow] = useState(true);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 2, ease: 'power2.inOut' },
        '-=0.4'
      )
      .to(lineRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
      })
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            setShow(false);
            onComplete();
          },
        },
        '-=0.2'
      );

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
        >
          <div ref={logoRef} className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-light tracking-[0.2em] text-text">
              BDL
            </h1>
            <span className="text-xs tracking-[0.5em] text-text-secondary uppercase mt-2 block">
              Travels
            </span>
          </div>

          <div ref={textRef} className="text-center mb-12">
            <p className="text-sm tracking-widest text-text-secondary uppercase">
              Premium Travel Experiences
            </p>
          </div>

          <div className="w-48 h-[1px] bg-light-gray overflow-hidden rounded-full">
            <div
              ref={lineRef}
              className="h-full bg-accent origin-left rounded-full"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>

          <motion.div
            className="mt-16"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
