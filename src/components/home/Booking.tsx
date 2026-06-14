'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { destinations_list } from '@/lib/data';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', destination: 'Hyderabad', date: '', passengers: '1' });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi BDL Travels! I want to book a trip.%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Destination:* ${form.destination}%0A*Date:* ${form.date}%0A*Passengers:* ${form.passengers}`;
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'}?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 bg-white/50 border rounded-xl text-sm text-text outline-none transition-all duration-300 ${
      focusedField === field ? 'border-accent shadow-[0_0_0_3px_rgba(217,119,6,0.1)]' : 'border-light-gray'
    }`;

  return (
    <section id="booking" className="section-padding bg-primary relative overflow-hidden section-accent-top">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="left">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-accent">Book Now</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 text-text">
                Ready for Your Next Journey?
              </h2>
              <p className="text-text-secondary mt-4 max-w-md text-lg font-light">
                Fill in your details and we&apos;ll get back to you instantly via WhatsApp.
              </p>

              <div className="mt-12 space-y-4">
                {[
                  { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', text: 'Flexible scheduling' },
                  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Secure booking' },
                  { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', text: 'Instant WhatsApp confirmation' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                    <span className="text-sm text-text-secondary">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="right">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

              <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 md:p-10 relative">
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs px-6 py-2 rounded-full whitespace-nowrap"
                    >
                      Opening WhatsApp...
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs tracking-wider text-text-secondary mb-2 uppercase">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      className={inputClass('name')}
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-wider text-text-secondary mb-2 uppercase">Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      className={inputClass('phone')}
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-wider text-text-secondary mb-2 uppercase">Destination</label>
                    <select
                      value={form.destination}
                      onChange={(e) => setForm({ ...form, destination: e.target.value })}
                      onFocus={() => setFocusedField('destination')}
                      onBlur={() => setFocusedField('')}
                      className={inputClass('destination')}
                    >
                      {destinations_list.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-wider text-text-secondary mb-2 uppercase">Date</label>
                      <input
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        onFocus={() => setFocusedField('date')}
                        onBlur={() => setFocusedField('')}
                        className={inputClass('date')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wider text-text-secondary mb-2 uppercase">Passengers</label>
                      <select
                        value={form.passengers}
                        onChange={(e) => setForm({ ...form, passengers: e.target.value })}
                        onFocus={() => setFocusedField('passengers')}
                        onBlur={() => setFocusedField('')}
                        className={inputClass('passengers')}
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center mt-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
