'use client';

import PageLayout from '@/components/ui/PageLayout';
import Experience from '@/components/home/Experience';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const milestones = [
  { year: '2010', event: 'BDL Travels founded in Hyderabad' },
  { year: '2012', event: 'Expanded fleet with luxury buses' },
  { year: '2015', event: 'Crossed 5,000 happy travelers' },
  { year: '2018', event: 'Launched cab booking services' },
  { year: '2020', event: 'Introduced corporate travel packages' },
  { year: '2024', event: '25,000+ travelers served' },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-accent">About Us</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 text-text">
                Our Story
              </h1>
              <div className="accent-rule mt-6" />
              <p className="text-text-secondary mt-6 text-lg leading-relaxed font-light">
                BDL Travels has been at the forefront of premium travel services since 2010. 
                Based in Hyderabad, we have grown from a small travel operator to one of the 
                most trusted names in the industry, serving thousands of happy travelers across India.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { value: 25000, label: 'Happy Travelers', suffix: '+' },
              { value: 3500, label: 'Tours Completed', suffix: '+' },
              { value: 50, label: 'Destinations', suffix: '+' },
              { value: 14, label: 'Years Experience', suffix: '' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 text-center group">
                  <div className="text-4xl md:text-5xl font-light text-text mb-2 transition-all duration-500 group-hover:text-accent">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500 + i * 200} />
                  </div>
                  <div className="h-px w-10 bg-accent/40 mx-auto mb-3" />
                  <p className="text-text-secondary text-sm tracking-wide">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-text">Our Journey</h2>
              <div className="accent-rule mt-4" />
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.08}>
                <div className="flex gap-6 items-start group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0" />
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-accent/20 min-h-[40px]" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-medium text-accent tracking-wider">{m.year}</span>
                    <p className="text-text mt-1">{m.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <Experience />
        </div>
      </section>
    </PageLayout>
  );
}
