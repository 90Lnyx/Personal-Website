'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArtifactItem } from '@/types/portfolio';

interface ArtifactSectionProps {
  artifacts: ArtifactItem[];
}

function renderBoldText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-medium text-ivory tracking-wide">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function ArtifactSection({ artifacts }: ArtifactSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeArtifact = artifacts[selectedIndex] || artifacts[0];

  return (
    <section
      id="artifact"
      className="relative w-full h-full flex items-center justify-center px-10 max-w-6xl mx-auto select-none"
    >
      <div className="w-full">
        {/* Static Section Header (Never Shifts on Selection) */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 text-gold/80 text-xs font-sans tracking-[0.25em] uppercase">
            <span>ARTIFACT</span>
            <span className="w-6 h-[1px] bg-gold/30" />
            <span>SELECTED PROJECTS</span>
          </div>

          <span className="text-xs font-mono text-slate-gray tracking-widest uppercase">
            0{selectedIndex + 1} / 0{artifacts.length}
          </span>
        </div>

        {/* 12-Column Split Layout */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* ================================================================ */}
          {/* LEFT COLUMN (5 Cols): Clean Project Selection List               */}
          {/* ================================================================ */}
          <div className="col-span-5 flex flex-col space-y-2.5">
            {artifacts.map((art, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <button
                  key={art.id}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  aria-label={`Select ${art.title}`}
                  aria-pressed={isSelected}
                  className={`group relative flex items-center justify-between p-3.5 rounded-xs border text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-wine/40 via-charcoal/95 to-charcoal border-gold shadow-[0_0_24px_rgba(139,38,62,0.35)] translate-x-1.5'
                      : 'bg-charcoal/50 border-gunmetal/80 hover:border-gold/50 hover:bg-charcoal/80'
                  }`}
                >
                  {/* Left Side: Indicator Node & Titles */}
                  <div className="flex items-center space-x-3.5 min-w-0">
                    <div className="relative flex items-center justify-center w-4 h-4 flex-shrink-0">
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isSelected
                            ? 'bg-wine-bright shadow-[0_0_10px_#A3384D,0_0_18px_rgba(163,56,77,0.7)] scale-125'
                            : 'celestial-star-node group-hover:scale-110'
                        }`}
                      />
                    </div>

                    <div className="min-w-0">
                      <div
                        className={`font-sans text-xs tracking-wider uppercase truncate transition-colors duration-200 ${
                          isSelected
                            ? 'text-gold font-medium'
                            : 'text-ivory/85 group-hover:text-ivory'
                        }`}
                      >
                        {art.title}
                      </div>
                      <div className="text-[10px] font-sans tracking-wide text-slate-gray truncate mt-0.5">
                        {art.category}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ================================================================ */}
          {/* RIGHT COLUMN (7 Cols): Fixed Height, Stable Project Inspector    */}
          {/* ================================================================ */}
          <div className="col-span-7 h-[470px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArtifact.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
                className="relative h-full rounded-xs celestial-card p-6 shadow-2xl bg-charcoal/95 border border-gold/50 backdrop-blur-xl flex flex-col justify-between"
              >
                {/* Minimal Geometric Corner Accents */}
                <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gold/60 pointer-events-none" />
                <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gold/60 pointer-events-none" />
                <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gold/60 pointer-events-none" />
                <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-gold/60 pointer-events-none" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-gunmetal/60 text-xs font-sans tracking-widest uppercase">
                    <span className="px-2.5 py-0.5 rounded-xs bg-wine/30 border border-wine/60 text-gold font-medium shadow-[0_0_12px_rgba(139,38,62,0.25)]">
                      {activeArtifact.category}
                    </span>
                  </div>

                  {/* Title Area with Reserved Height (Prevents Content Shift) */}
                  <div className="min-h-[58px]">
                    <h3 className="font-serif text-3xl text-ivory tracking-wide leading-tight">
                      {activeArtifact.title}
                    </h3>
                    <div className="w-14 h-[1px] bg-gold/40 my-2" />
                  </div>

                  {/* Bullet Points Architecture Breakdown */}
                  <ul className="space-y-2.5 my-3 text-xs font-sans text-ivory/85 leading-relaxed font-light">
                    {activeArtifact.highlights.map((bullet, i) => (
                      <li key={i} className="flex items-start space-x-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/80 mt-1.5 flex-shrink-0" />
                        <span>{renderBoldText(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech Stack Matrix */}
                  <div className="mb-4 p-2.5 rounded-xs bg-obsidian/75 border border-gunmetal/70 flex flex-wrap gap-2">
                    {activeArtifact.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-xs bg-charcoal/90 border border-gunmetal/90 text-[11px] font-sans tracking-wider text-ivory/90 uppercase whitespace-nowrap shadow-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons (Clear, Unmistakable Actions) */}
                  <div className="flex items-center space-x-3 pt-3 border-t border-gunmetal/60">
                    <a
                      href={activeArtifact.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View GitHub source code for ${activeArtifact.title}`}
                      className="px-4 py-2 border border-gold/80 bg-gradient-to-r from-wine/45 via-burgundy/60 to-charcoal/90 hover:from-wine/65 hover:to-burgundy text-ivory text-xs font-sans tracking-widest uppercase rounded-xs transition-all duration-200 shadow-[0_0_14px_rgba(139,38,62,0.35)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold cursor-pointer"
                    >
                      [ GITHUB REPOSITORY ]
                    </a>

                    {activeArtifact.demoUrl && (
                      <a
                        href={activeArtifact.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View demonstration or external page for ${activeArtifact.title}`}
                        className="px-4 py-2 border border-gunmetal hover:border-slate-gray bg-charcoal/60 hover:bg-charcoal text-slate-gray hover:text-ivory text-xs font-sans tracking-widest uppercase rounded-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/60 cursor-pointer"
                      >
                        {activeArtifact.id === 'aegis-garuda-hacks' ? '[ DEVPOST ]' : '[ COLAB ]'}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
