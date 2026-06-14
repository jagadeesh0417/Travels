'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '@/lib/data';
import ScrollReveal from '@/components/ui/ScrollReveal';

const categories = ['all', 'fleet', 'destinations'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-primary relative overflow-hidden section-accent-top">
      <div className="container-luxury">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-accent">Gallery</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 text-text">
              Visual Journey
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg font-light">
              A glimpse into the world of premium travel
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-text text-white'
                    : 'bg-transparent text-text-secondary border border-light-gray hover:border-text'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
                onClick={() => setSelectedImage(img.id)}
              >
                <div
                  className="w-full bg-white rounded-2xl overflow-hidden relative border border-accent/10"
                  style={{ aspectRatio: img.width / img.height, minHeight: img.height > img.width ? '300px' : '200px' }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-white text-lg font-medium">{img.alt}</h3>
                    <p className="text-white/70 text-sm capitalize">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full aspect-[4/3] bg-white rounded-3xl overflow-hidden border border-accent/10"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage && (
                <img
                  src={galleryImages.find((img) => img.id === selectedImage)?.src || ''}
                  alt="Gallery"
                  className="w-full h-full object-contain"
                />
              )}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-text hover:text-accent transition-colors z-10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
