'use client';

import Link from 'next/link';
import { navLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-text text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container-luxury px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-light tracking-[0.15em] text-white">BDL</span>
              <span className="text-xs tracking-[0.3em] text-white/50 uppercase mt-1">Travels</span>
            </div>
            <p className="text-white/60 text-sm max-w-md leading-relaxed font-light">
              Premium travel experiences with comfort, trust and unforgettable journeys. 
              Your journey begins with us.
            </p>
            <div className="flex gap-4 mt-6">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/bdl_travels`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-all duration-300 group"
                >
                  <span className="text-white/70 group-hover:text-white text-xs capitalize">{social.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white/70">Hyderabad, India</li>
              <li>
                <a href="tel:+919876543210" className="text-sm text-white/70 hover:text-accent transition-colors">
                  +91 9876543210
                </a>
              </li>
              <li>
                <a href="mailto:info@bdl-travels.com" className="text-sm text-white/70 hover:text-accent transition-colors">
                  info@bdl-travels.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} BDL Travels. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
