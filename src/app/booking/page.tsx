'use client';

import PageLayout from '@/components/ui/PageLayout';
import Booking from '@/components/home/Booking';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function BookingPage() {
  return (
    <PageLayout>
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-accent">Book Now</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 text-text">
                Reserve Your Journey
              </h1>
              <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg font-light">
                Fill in your details and we&apos;ll get back to you instantly via WhatsApp
              </p>
            </div>
          </ScrollReveal>
          <Booking />
        </div>
      </section>
    </PageLayout>
  );
}
