'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PortfolioData } from '@/types/portfolio';

interface OriginSectionProps {
  data: PortfolioData['identity'];
}

export function OriginSection({ data }: OriginSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="origin"
      className="relative w-full h-full flex items-center justify-center px-10 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full celestial-card bg-charcoal/90 border border-gold/50 backdrop-blur-xl p-10 rounded-xs shadow-2xl"
      >
        <div className="grid grid-cols-12 gap-10 items-center">
          {/* ================================================================ */}
          {/* LEFT: Dignified Portrait Frame (Large, Clean, No Badge)          */}
          {/* ================================================================ */}
          <div className="col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Architectural Linear Wine Rim Light Behind Portrait */}
              <div className="absolute -inset-1.5 rounded-xs bg-gradient-to-b from-wine/35 via-burgundy/15 to-transparent pointer-events-none" />

              {/* Dignified Archival Frame (w-64 h-80 / 256px x 320px) */}
              <div className="relative w-64 h-80 rounded-xs border border-gold/40 bg-obsidian/95 p-1.5 shadow-[0_0_28px_rgba(0,0,0,0.85)] overflow-hidden">
                <div className="relative w-full h-full rounded-xs overflow-hidden bg-obsidian flex items-center justify-center">
                  {!imageError && Boolean(data.photoUrl) ? (
                    <Image
                      src={data.photoUrl}
                      alt={data.name}
                      fill
                      sizes="256px"
                      className="object-cover object-top opacity-95"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-4">
                      <span className="font-serif text-6xl text-gold font-normal mb-1">
                        {data.name.charAt(0)}
                      </span>
                      <span className="text-[10px] font-sans tracking-widest text-slate-gray uppercase">
                        PORTRAIT
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Minimal Geometric Corner Accents */}
              <span className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-gold/60 pointer-events-none" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-gold/60 pointer-events-none" />
              <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b border-l border-gold/60 pointer-events-none" />
              <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-gold/60 pointer-events-none" />
            </div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT: Real Name, CV-Accurate Bio & Simplified HR Intelligence   */}
          {/* ================================================================ */}
          <div className="col-span-7 flex flex-col justify-center text-left">
            {/* Chapter Header */}
            <div className="flex items-center space-x-3 text-gold/80 text-xs font-sans tracking-[0.25em] uppercase mb-1.5">
              <span>ORIGIN</span>
              <span className="w-8 h-[1px] bg-gold/30" />
              <span>S1 INFORMATIKA (UMN)</span>
            </div>

            {/* Real Full Name (Formal) */}
            <h2 className="font-serif text-5xl font-normal text-ivory tracking-wide leading-tight my-1">
              {data.name}
            </h2>

            {/* Role Subheading */}
            <div className="text-sm font-sans tracking-[0.2em] text-gold/90 uppercase font-medium mb-3">
              {data.role}
            </div>

            {/* Golden Divider Line */}
            <div className="w-20 h-[1px] bg-gold/40 mb-4" />

            {/* CV-Accurate Bio Description (Comfortable Size & Line Height) */}
            <p className="font-sans text-sm text-ivory/90 leading-relaxed font-light mb-6">
              {data.bio}
            </p>

            {/* Quick-Scan Professional Facts (Scannable Executive Bullets) */}
            <div className="pt-4 border-t border-gunmetal/60 space-y-2.5 text-xs font-sans">
              <div className="flex items-start space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/80 mt-1.5 flex-shrink-0" />
                <span className="text-ivory/90 leading-relaxed font-light">
                  <strong className="text-gold font-medium uppercase tracking-wider text-[11px] mr-2">Education:</strong>
                  {data.major}, {data.university} &bull; GPA {data.gpa}
                </span>
              </div>

              <div className="flex items-start space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/80 mt-1.5 flex-shrink-0" />
                <span className="text-ivory/90 leading-relaxed font-light">
                  <strong className="text-gold font-medium uppercase tracking-wider text-[11px] mr-2">Seeking:</strong>
                  {data.seeking}
                </span>
              </div>

              <div className="flex items-start space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/80 mt-1.5 flex-shrink-0" />
                <span className="text-ivory/90 leading-relaxed font-light">
                  <strong className="text-gold font-medium uppercase tracking-wider text-[11px] mr-2">Location:</strong>
                  {data.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
