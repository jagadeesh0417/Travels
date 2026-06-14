'use client';

import Link from 'next/link';
import { services } from '@/lib/data';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

const iconMap: Record<string, string> = {
  '🗺️': 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  '🚌': 'M8 7h8m-8 4h8m-4 4h.01M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z',
  '🚗': 'M13 10V3L4 14h7v7l9-11h-7z',
  '💼': 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  '👨‍👩‍👧‍👦': 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  '🎯': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden section-accent-top">
      <div className="container-luxury">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-accent">Our Services</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 text-text">
              Premium Travel Solutions
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg font-light">
              Comprehensive travel services designed for your comfort and convenience
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.1}>
              <GlassCard tilt glow className="h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconMap[service.icon] || iconMap['🎯']} />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-text mb-3">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{service.description}</p>
                <div className="mt-6 pt-6 border-t border-light-gray/50">
                  <Link href="/booking" className="text-accent text-sm font-medium tracking-wide hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Book Now
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
