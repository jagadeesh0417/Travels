'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import VehicleScene from '@/components/three/VehicleScene';
import FloatingChip from '@/components/ui/FloatingChip';

export default function Hero() {
  const [scroll, setScroll] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });
    if (titleRef.current?.children) {
      tl.fromTo(
        titleRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );
    }
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4');
    }
    if (buttonsRef.current) {
      tl.fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
    }

    return () => { tl.kill(); };
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-primary">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-accent/[0.03] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-accent/[0.02] to-transparent pointer-events-none" />
      <div className="container-luxury px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="relative z-10">
            <div ref={titleRef}>
              <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[1.05] tracking-tight text-text">
                <span className="block">EXPERIENCE</span>
                <span className="block">TRAVEL</span>
                <span className="block text-accent">BEYOND</span>
                <span className="block">BOUNDARIES</span>
              </motion.h1>
            </div>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-text-secondary mt-8 max-w-lg leading-relaxed font-light"
            >
              Discover premium travel experiences with comfort, trust and unforgettable journeys.
            </p>

            <div ref={buttonsRef} className="flex flex-wrap gap-4 mt-10">
              <Link href="/booking" className="btn-primary text-sm px-8 py-3">
                Book Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/services" className="btn-outline text-sm px-8 py-3">
                Explore Packages
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-2 text-text-secondary text-xs tracking-widest uppercase">
              <span className="w-8 h-[1px] bg-accent" />
              Premium Travel Partner Since 2010
            </div>
          </div>

          <div className="relative h-[400px] md:h-[600px] lg:h-[700px]">
            <VehicleScene scroll={scroll} />

            <FloatingChip label="Hyderabad" position={{ x: 15, y: 20 }} delay={3.5} />
            <FloatingChip label="Tirupati" position={{ x: 80, y: 15 }} delay={3.8} />
            <FloatingChip label="Bangalore" position={{ x: 85, y: 65 }} delay={4.1} />
            <FloatingChip label="Goa" position={{ x: 20, y: 75 }} delay={4.4} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest text-text-secondary uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-text-secondary/30"
        />
      </div>
    </section>
  );
}
