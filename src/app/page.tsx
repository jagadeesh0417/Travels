'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Loader from '@/components/ui/Loader';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/home/Hero';
import Footer from '@/components/ui/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlassCard from '@/components/ui/GlassCard';
import { services, destinations, testimonials } from '@/lib/data';

const previewSections = [
  {
    title: 'Our Services',
    desc: 'Premium travel solutions tailored to your needs.',
    items: services.slice(0, 3).map((s) => s.title),
    link: '/services',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Destinations',
    desc: 'Explore our most popular routes and travel experiences.',
    items: destinations.map((d) => d.name),
    link: '/destinations',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Gallery',
    desc: 'Visual journey through our premium travel experiences.',
    items: ['Luxury Fleet', 'Destination Views', 'Travel Moments'],
    link: '/gallery',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Testimonials',
    desc: 'Hear from our happy travelers across India.',
    items: testimonials.slice(0, 3).map((t) => t.name),
    link: '/testimonials',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  },
  {
    title: 'Book a Trip',
    desc: 'Ready for your next journey? Book instantly via WhatsApp.',
    items: ['Instant Confirmation', 'Flexible Dates', 'Best Prices'],
    link: '/booking',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Contact Us',
    desc: 'Get in touch with us through any channel.',
    items: ['Call', 'Email', 'WhatsApp', 'Visit'],
    link: '/contact',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="section-padding bg-white section-accent-top">
          <div className="container-luxury">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-xs tracking-[0.3em] uppercase text-accent">Explore</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 text-text">
                  Everything We Offer
                </h2>
                <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg font-light">
                  Premium travel services designed for your comfort and convenience
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {previewSections.map((section, i) => (
                <ScrollReveal key={section.title} delay={i * 0.08}>
                  <Link href={section.link}>
                    <GlassCard tilt glow className="h-full cursor-pointer group">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={section.icon} />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium text-text mb-2">{section.title}</h3>
                      <p className="text-text-secondary text-sm mb-4">{section.desc}</p>
                      <ul className="space-y-1.5">
                        {section.items.map((item) => (
                          <li key={item} className="text-sm text-text-secondary flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-4 border-t border-light-gray/50 flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                        Explore More
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </GlassCard>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
