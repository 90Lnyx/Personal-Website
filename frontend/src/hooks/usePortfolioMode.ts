'use client';

import { useState, useCallback } from 'react';
import { PortfolioMode, SectionIndex } from '@/types/portfolio';

export interface UsePortfolioModeReturn {
  mode: PortfolioMode;
  activeSection: SectionIndex;
  direction: number;
  enterArchive: () => void;
  exitToGateway: () => void;
  goToSection: (index: SectionIndex) => void;
  nextSection: () => void;
  prevSection: () => void;
}

export function usePortfolioMode(): UsePortfolioModeReturn {
  const [mode, setMode] = useState<PortfolioMode>('gateway');
  const [activeSection, setActiveSection] = useState<SectionIndex>(0);
  const [direction, setDirection] = useState<number>(1);

  const enterArchive = useCallback(() => {
    setMode('archive');
    setActiveSection(0);
    setDirection(1);
  }, []);

  const exitToGateway = useCallback(() => {
    setMode('gateway');
    setActiveSection(0);
  }, []);

  const goToSection = useCallback((targetIndex: SectionIndex) => {
    setActiveSection((prev) => {
      setDirection(targetIndex >= prev ? 1 : -1);
      return targetIndex;
    });
  }, []);

  const nextSection = useCallback(() => {
    setActiveSection((prev) => {
      if (prev < 3) {
        setDirection(1);
        return (prev + 1) as SectionIndex;
      }
      return prev;
    });
  }, []);

  const prevSection = useCallback(() => {
    setActiveSection((prev) => {
      if (prev > 0) {
        setDirection(-1);
        return (prev - 1) as SectionIndex;
      }
      return prev;
    });
  }, []);

  return {
    mode,
    activeSection,
    direction,
    enterArchive,
    exitToGateway,
    goToSection,
    nextSection,
    prevSection,
  };
}
