'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePortfolioMode } from '@/hooks/usePortfolioMode';
import { portfolioData } from '@/data/portfolioData';

import { CelestialLoadingScreen } from '@/components/loading/CelestialLoadingScreen';
import { CelestialGateway } from '@/components/gateway/CelestialGateway';
import { TopStepper } from '@/components/navigation/TopStepper';

import { OriginSection } from '@/components/sections/OriginSection';
import { ArtifactSection } from '@/components/sections/ArtifactSection';
import { JourneySection } from '@/components/sections/JourneySection';
import { AllianceSection } from '@/components/sections/AllianceSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const {
    mode,
    activeSection,
    direction,
    enterArchive,
    exitToGateway,
    goToSection,
    nextSection,
    prevSection,
  } = usePortfolioMode();

  // Robust gesture-locked wheel navigation (1 gesture = exactly 1 page transition)
  const isScrollLockedRef = useRef(false);
  const releaseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isLoading || mode === 'gateway') return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrollLockedRef.current) {
        if (releaseTimerRef.current) clearTimeout(releaseTimerRef.current);
        releaseTimerRef.current = setTimeout(() => {
          isScrollLockedRef.current = false;
        }, 180);
        return;
      }

      if (Math.abs(e.deltaY) < 18) return;

      isScrollLockedRef.current = true;
      if (releaseTimerRef.current) clearTimeout(releaseTimerRef.current);
      releaseTimerRef.current = setTimeout(() => {
        isScrollLockedRef.current = false;
      }, 750);

      if (e.deltaY > 0) {
        nextSection();
      } else if (e.deltaY < 0) {
        prevSection();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (releaseTimerRef.current) clearTimeout(releaseTimerRef.current);
    };
  }, [isLoading, mode, nextSection, prevSection]);

  // Global keyboard navigation: ArrowRight / Space -> Next, ArrowLeft -> Prev
  useEffect(() => {
    if (isLoading || mode === 'gateway') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        if (activeSection < 3) {
          e.preventDefault();
          nextSection();
        }
      } else if (e.key === 'ArrowLeft') {
        if (activeSection > 0) {
          e.preventDefault();
          prevSection();
        }
      } else if (e.key === '1') {
        e.preventDefault();
        goToSection(0);
      } else if (e.key === '2') {
        e.preventDefault();
        goToSection(1);
      } else if (e.key === '3') {
        e.preventDefault();
        goToSection(2);
      } else if (e.key === '4') {
        e.preventDefault();
        goToSection(3);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        exitToGateway();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLoading, mode, activeSection, nextSection, prevSection, goToSection, exitToGateway]);

  // Dual CV Download Trigger (1 Button downloads both Data Science and Backend tracks)
  const handleDownloadBothCVs = () => {
    const files = [
      {
        url: '/cv/Josiah Maximus Suryadi - Data Science.pdf',
        name: 'Josiah Maximus Suryadi - Data Science.pdf',
      },
      {
        url: '/cv/Josiah Maximus Suryadi - Backend.pdf',
        name: 'Josiah Maximus Suryadi - Backend.pdf',
      },
    ];

    files.forEach((file, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = file.url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 250);
    });
  };

  // High-performance hardware-accelerated slide transitions (GPU transform & opacity only)
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 44 : -44,
      opacity: 0,
      scale: 0.985,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -44 : 44,
      opacity: 0,
      scale: 0.985,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  // Helper to render active section content
  const renderCurrentSection = () => {
    switch (activeSection) {
      case 0:
        return <OriginSection data={portfolioData.identity} />;
      case 1:
        return <ArtifactSection artifacts={portfolioData.artifacts} />;
      case 2:
        return <JourneySection journey={portfolioData.journey} />;
      case 3:
        return <AllianceSection data={portfolioData.alliance} />;
      default:
        return null;
    }
  };

  return (
    <main className="relative w-full h-[100dvh] overflow-hidden bg-obsidian text-ivory">
      {/* 1. INITIAL LOADING SCREEN WITH DISSOLVE */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              filter: 'blur(8px)',
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            }}
            className="fixed inset-0 z-50 pointer-events-none"
          >
            <CelestialLoadingScreen onLoaded={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Zenith Celestial Night Sky Background (Revealed upon entering Archive) */}
      <motion.div
        className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] pointer-events-none will-change-transform"
        animate={{
          scale: mode === 'gateway' ? 1.02 : 1.06,
          x: mode !== 'gateway' ? activeSection * -16 : 0,
          y: mode !== 'gateway' ? (activeSection % 2 === 0 ? -4 : 4) : 0,
          opacity: 0.9,
        }}
        transition={{
          duration: 1.0,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Image
          src="/images/night-sky.jpg"
          alt="LNYX Archive Celestial Night Sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft edge radial vignette for razor-sharp typography contrast in panels */}
        <div className="absolute inset-0 celestial-vignette opacity-80" />
        <div className="absolute inset-0 celestial-hero-vignette opacity-50" />
      </motion.div>

      {/* Mode Viewport Switcher */}
      <AnimatePresence mode="wait">
        {/* 2. GATEWAY VIEW */}
        {!isLoading && mode === 'gateway' && (
          <motion.div
            key="gateway"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              opacity: 0,
              scale: 1.03,
              filter: 'blur(8px)',
              transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
            }}
            className="absolute inset-0 w-full h-full z-20"
          >
            <CelestialGateway onEnter={enterArchive} />
          </motion.div>
        )}

        {/* 3. THE ARCHIVE MASTER VIEW */}
        {!isLoading && mode === 'archive' && (
          <motion.div
            key="archive"
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              transition: { duration: 0.45 },
            }}
            className="relative w-full h-full z-10 flex flex-col justify-between"
          >
            {/* Top Stepper Header with 1-Click Dual CV Download */}
            <TopStepper
              activeSection={activeSection}
              onSelectSection={goToSection}
              onExitToGateway={exitToGateway}
              onDownloadCV={handleDownloadBothCVs}
            />

            {/* Slide Viewport: Grounded, Centered, High Contrast */}
            <div className="relative z-10 w-full flex-1 flex items-center justify-center overflow-hidden pt-14 pb-8">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={activeSection}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full flex items-center justify-center"
                >
                  {renderCurrentSection()}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
