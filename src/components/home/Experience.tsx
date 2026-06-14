'use client';

import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/ui/ScrollReveal';

const stats = [
  { value: 15000, label: 'Happy Travelers', suffix: '+' },
  { value: 2500, label: 'Tours Completed', suffix: '+' },
  { value: 50, label: 'Destinations', suffix: '+' },
  { value: 14, label: 'Years Experience', suffix: '' },
];

export default function Experience() {
  return (
    <section className="section-padding bg-white relative overflow-hidden section-accent-top">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-gray to-transparent" />

      <div className="container-luxury">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-accent">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 text-text">
              Premium Experience
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg font-light">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.15} animation="up">
              <div className="text-center group">
                <div className="text-5xl md:text-6xl lg:text-7xl font-light text-text mb-3 transition-all duration-500 group-hover:text-accent">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500 + i * 200} />
                </div>
                <div className="h-px w-12 bg-accent/40 mx-auto mb-4 transition-all duration-500 group-hover:w-20" />
                <p className="text-text-secondary text-sm md:text-base tracking-wide">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-20">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-text leading-relaxed">
              &ldquo;We don&apos;t just move people. We create journeys that become memories.&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-sm font-medium">
                B
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-text">BDL Travels</p>
                <p className="text-xs text-text-secondary">Since 2010</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
