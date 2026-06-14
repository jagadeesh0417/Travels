'use client';

import RouteMap from '@/components/three/RouteMap';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { destinations } from '@/lib/data';

export default function Destinations() {
  return (
    <section id="destinations" className="section-padding bg-primary relative overflow-hidden section-accent-top">
      <div className="container-luxury">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-accent">Destinations</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 text-text">
              Popular Routes
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg font-light">
              Most loved destinations with premium travel experience
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 space-y-6">
            {destinations.map((dest, i) => (
              <ScrollReveal key={dest.id} animation="left" delay={i * 0.1}>
                <div className="glass-card rounded-xl p-3 flex items-center gap-4 group cursor-default border-l-2 border-l-accent/30 hover:border-l-accent transition-all">
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-text">{dest.name}</h3>
                    <p className="text-sm text-text-secondary">{dest.distance} &middot; {dest.duration}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-accent font-medium text-sm">{dest.price}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="right" className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-4 md:p-6">
              <RouteMap />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
