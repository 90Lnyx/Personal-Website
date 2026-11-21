'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CelestialGatewayProps {
  onEnter: () => void;
}

// Curated golden fireflies array (deterministic positions prevent hydration mismatch)
const FIREFLIES = [
  { id: 1, left: '12%', top: '24%', size: 3, delay: 0.2, duration: 4.8 },
  { id: 2, left: '18%', top: '64%', size: 2.5, delay: 1.1, duration: 5.6 },
  { id: 3, left: '26%', top: '38%', size: 3.5, delay: 0.5, duration: 4.2 },
  { id: 4, left: '35%', top: '18%', size: 2, delay: 2.3, duration: 6.1 },
  { id: 5, left: '42%', top: '76%', size: 3, delay: 0.8, duration: 5.0 },
  { id: 6, left: '50%', top: '28%', size: 2.5, delay: 1.7, duration: 4.6 },
  { id: 7, left: '58%', top: '80%', size: 3, delay: 0.4, duration: 5.4 },
  { id: 8, left: '65%', top: '22%', size: 2, delay: 2.0, duration: 6.3 },
  { id: 9, left: '72%', top: '58%', size: 3.5, delay: 1.4, duration: 4.9 },
  { id: 10, left: '80%', top: '34%', size: 2.5, delay: 0.9, duration: 5.2 },
  { id: 11, left: '88%', top: '70%', size: 3, delay: 2.5, duration: 4.5 },
  { id: 12, left: '15%', top: '85%', size: 2, delay: 1.8, duration: 5.8 },
  { id: 13, left: '30%', top: '88%', size: 3, delay: 0.3, duration: 4.4 },
  { id: 14, left: '76%', top: '16%', size: 2.5, delay: 1.2, duration: 6.0 },
  { id: 15, left: '84%', top: '86%', size: 3, delay: 2.1, duration: 5.1 },
  { id: 16, left: '22%', top: '14%', size: 2, delay: 0.7, duration: 4.7 },
  { id: 17, left: '60%', top: '12%', size: 2.5, delay: 1.5, duration: 5.5 },
  { id: 18, left: '46%', top: '90%', size: 3, delay: 2.7, duration: 4.3 },
  { id: 19, left: '8%', top: '48%', size: 2.5, delay: 1.0, duration: 5.9 },
  { id: 20, left: '92%', top: '46%', size: 2, delay: 0.6, duration: 5.3 },
];

export function CelestialGateway({ onEnter }: CelestialGatewayProps) {
  const [isAscending, setIsAscending] = useState(false);

  const handleEnter = useCallback(() => {
    if (isAscending) return;
    setIsAscending(true);

    // Poetic cinematic cross-dissolve duration
    setTimeout(() => {
      onEnter();
    }, 750);
  }, [isAscending, onEnter]);

  // Support intuitive Enter or Space keyboard trigger on Gateway
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleEnter();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleEnter]);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden select-none bg-obsidian flex flex-col justify-center items-center">
      {/* ==================================================================== */}
      {/* 1. SANCTUARY / TEMPLE GATEWAY BACKGROUND                             */}
      {/* On Enter: Pure cinematic dissolve into the celestial starry night   */}
      {/* ==================================================================== */}
      <motion.div
        animate={
          isAscending
            ? {
                scale: 1.05,
                filter: 'blur(8px)',
                opacity: 0,
                transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
              }
            : {
                scale: 1,
                filter: 'blur(0px)',
                opacity: 0.92,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              }
        }
        className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="LNYX Archive Sanctuary Gateway"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft edge radial vignette only (keeps architectural gateway luminous & visible) */}
        <div className="absolute inset-0 celestial-vignette opacity-80" />
        <div className="absolute inset-0 celestial-hero-vignette opacity-50" />
      </motion.div>

      {/* ==================================================================== */}
      {/* 2. LIVING GOLDEN FIREFLIES (Active only in Gateway)                  */}
      {/* On Enter: Softly blossom and dissolve into the starry heavens        */}
      {/* ==================================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
        {FIREFLIES.map((fly) => (
          <motion.div
            key={fly.id}
            initial={{ opacity: 0 }}
            animate={
              isAscending
                ? {
                    scale: 2.2,
                    filter: 'blur(4px)',
                    opacity: 0,
                    transition: {
                      duration: 0.7,
                      delay: fly.delay * 0.08,
                      ease: 'easeOut',
                    },
                  }
                : {
                    x: [0, 8, -6, 0],
                    y: [0, -14, 6, 0],
                    opacity: [0.3, 0.85, 0.3],
                    transition: {
                      duration: fly.duration,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: fly.delay,
                    },
                  }
            }
            style={{
              left: fly.left,
              top: fly.top,
              width: `${fly.size}px`,
              height: `${fly.size}px`,
            }}
            className="absolute rounded-full bg-gold shadow-[0_0_10px_#C6A66B,0_0_20px_rgba(198,166,107,0.4)]"
          />
        ))}
      </div>

      {/* ==================================================================== */}
      {/* 3. MAIN GATEWAY BRAND & CTA                                          */}
      {/* On Enter: Gentle dissolve and scale dissolve                         */}
      {/* ==================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          isAscending
            ? {
                opacity: 0,
                scale: 0.96,
                filter: 'blur(8px)',
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              }
            : {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              }
        }
        className="relative z-20 flex flex-col items-center justify-center w-full px-6 text-center max-w-2xl mx-auto"
      >
        {/* Top Minimal Accent */}
        <div className="mb-6 flex items-center space-x-3 text-gold/90 text-xs tracking-[0.3em] font-sans uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <span className="w-8 h-[1px] bg-gold/50" />
          <span>GATEWAY</span>
          <span className="w-8 h-[1px] bg-gold/50" />
        </div>

        {/* Grand Cormorant Title: LNYX ARCHIVE (Strictly 1 Single Line) */}
        <h1 className="font-serif text-5xl md:text-6xl tracking-widest text-ivory leading-tight whitespace-nowrap drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          LNYX ARCHIVE
        </h1>

        {/* Single Confident Entrance Action (Without Arrow) */}
        <div className="mt-12 flex flex-col items-center w-full max-w-xs">
          <button
            type="button"
            onClick={handleEnter}
            aria-label="Enter LNYX Archive"
            className={`celestial-card group relative w-full flex items-center justify-center px-8 py-4 rounded-xs border-gold/80 text-gold hover:border-gold hover:shadow-[0_0_32px_rgba(163,56,77,0.5),0_0_16px_rgba(198,166,107,0.4)] bg-gradient-to-r from-charcoal/90 via-wine/25 to-charcoal/90 hover:from-wine/40 hover:to-wine/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold transition-all duration-300 cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.85)] ${
              isAscending ? 'celestial-card-active scale-[0.98]' : ''
            }`}
          >
            <span className="font-sans text-sm tracking-[0.25em] uppercase font-medium text-ivory group-hover:text-gold transition-colors duration-200">
              [ ENTER ARCHIVE ]
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}