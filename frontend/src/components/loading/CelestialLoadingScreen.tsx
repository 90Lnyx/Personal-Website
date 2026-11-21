'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CelestialLoadingScreenProps {
  onLoaded: () => void;
}

export function CelestialLoadingScreen({ onLoaded }: CelestialLoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation from 0% to 100% over 1.6s
    const startTime = performance.now();
    const duration = 1600;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const nextProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(nextProgress);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        // Brief pause at 100% before dissolve
        setTimeout(() => {
          onLoaded();
        }, 200);
      }
    };

    const animId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animId);
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian select-none">
      {/* Ambient Directional Linear Crimson Atmosphere */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-wine/15 via-burgundy/5 to-transparent pointer-events-none" />

      {/* Minimal Archival Teaser: Pure, Quiet & Mysterious */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p className="font-sans text-xs tracking-[0.35em] text-gold/90 uppercase font-medium mb-6">
          INITIALIZING ARCHIVE
        </p>

        {/* Golden Progress Bar */}
        <div className="w-56 h-[2px] bg-gunmetal relative overflow-hidden rounded-full mb-3.5">
          <motion.div
            className="h-full bg-gradient-to-r from-gold/50 to-gold shadow-[0_0_8px_#C6A66B]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>

        {/* Progress Counter: Natural 1-digit to 3-digit progression with tabular nums to prevent jitter */}
        <div className="font-mono text-xs tracking-widest text-gold/80 tabular-nums w-14 text-center">
          {progress}%
        </div>
      </div>
    </div>
  );
}
