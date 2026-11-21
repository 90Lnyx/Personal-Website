'use client';

import React from 'react';
import { SectionIndex } from '@/types/portfolio';

interface TopStepperProps {
  activeSection: SectionIndex;
  onSelectSection: (index: SectionIndex) => void;
  onExitToGateway?: () => void;
  onDownloadCV: () => void;
}

const SECTIONS = [
  { index: 0 as SectionIndex, label: 'ORIGIN' },
  { index: 1 as SectionIndex, label: 'ARTIFACT' },
  { index: 2 as SectionIndex, label: 'JOURNEY' },
  { index: 3 as SectionIndex, label: 'ALLIANCE' },
];

export function TopStepper({
  activeSection,
  onSelectSection,
  onExitToGateway,
  onDownloadCV,
}: TopStepperProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-obsidian/90 backdrop-blur-md border-b border-gunmetal/80 px-8 py-3.5 flex items-center justify-between select-none">
      {/* Brand Mark Return Trigger (LNYX ARCHIVE) */}
      <button
        type="button"
        onClick={onExitToGateway}
        aria-label="Return to LNYX Archive Title Screen (Press Esc)"
        title="Return to Gateway (Esc)"
        className="text-left font-sans text-xs tracking-[0.25em] text-slate-gray hover:text-gold transition-colors duration-200 uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/60 rounded-xs cursor-pointer"
      >
        [LNYX ARCHIVE]
      </button>

      {/* 4-Step Navigation Timeline */}
      <nav aria-label="Portfolio Stepper Navigation" className="flex items-center space-x-6">
        {SECTIONS.map((sec, i) => {
          const isActive = activeSection === sec.index;

          return (
            <React.Fragment key={sec.label}>
              {i > 0 && (
                <div
                  className="w-8 h-[1px] bg-gold/40 transition-colors duration-300"
                  aria-hidden="true"
                />
              )}

              <button
                type="button"
                onClick={() => onSelectSection(sec.index)}
                aria-label={`Jump to ${sec.label} (Press ${i + 1})`}
                title={`Jump to ${sec.label} (Key ${i + 1})`}
                aria-current={isActive ? 'step' : undefined}
                className={`relative flex items-center py-1 px-2 text-xs tracking-widest font-sans uppercase whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/60 rounded-xs cursor-pointer ${
                  isActive
                    ? 'text-gold font-medium'
                    : 'text-ivory/80 hover:text-gold'
                }`}
              >
                <span>{sec.label}</span>

                {/* Active Indicator Underline (Directional Linear Wine-to-Gold Beacon) */}
                {isActive && (
                  <span
                    className="absolute -bottom-3.5 inset-x-0 h-[2.5px] bg-gradient-to-r from-wine via-wine-bright to-gold shadow-[0_0_12px_rgba(163,56,77,0.85)]"
                    aria-hidden="true"
                  />
                )}
              </button>
            </React.Fragment>
          );
        })}
      </nav>

      {/* Right Controls: Single Catchy 10% CTA Download CV Button */}
      <div className="flex items-center">
        <button
          type="button"
          onClick={onDownloadCV}
          aria-label="Download Josiah Maximus Suryadi Curriculum Vitae (Both Tracks)"
          className="text-xs font-sans tracking-widest uppercase text-ivory hover:text-white px-4 py-1.5 border border-gold/80 bg-gradient-to-r from-wine/80 via-burgundy to-wine/80 hover:from-wine hover:to-wine-bright rounded-xs transition-all duration-300 shadow-[0_0_18px_rgba(139,38,62,0.5)] hover:shadow-[0_0_26px_rgba(163,56,77,0.75)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold cursor-pointer"
        >
          [DOWNLOAD CV]
        </button>
      </div>
    </header>
  );
}
